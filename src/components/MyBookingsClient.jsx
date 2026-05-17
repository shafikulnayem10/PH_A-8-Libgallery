"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function MyBookingsClient({ bookings: initialBookings }) {
  const [bookings, setBookings] = useState(initialBookings);
  const [confirmId, setConfirmId] = useState(null); 
  const router = useRouter();

  const handleCancelClick = async (id) => {
   
    const { data: session } = await authClient.getSession();
    if (!session?.user) {
      toast.error("Please log in first!", {
        description: "You need to be logged in to cancel a booking.",
        action: {
          label: "Log In",
          onClick: () => router.push("/login"),
        },
      });
      setTimeout(() => router.push("/login"), 2000);
      return;
    }

   
    setConfirmId(id);
  };

  const handleConfirmDelete = async () => {
    const id = confirmId;
    setConfirmId(null);

    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    if (data.deletedCount > 0) {
      setBookings((prev) => prev.filter((b) => b._id !== id));
      toast.success("Booking cancelled!", {
        description: "Your booking has been successfully cancelled.",
      });
    } else {
      toast.error("Something went wrong. Try again!");
    }
  };

  if (bookings.length === 0) {
    return (
      <p className="p-10 text-center text-slate-500">No Borrowed Books found!</p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

   
      {confirmId && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4">
            <h3 className="text-lg font-black text-slate-800 mb-2">
              Cancel Booking?
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Are you sure you want to cancel this booking? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmId(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all"
              >
                Keep It
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm transition-all"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-black text-slate-700 mb-6">
        My Borrowed Books{" "}
        <span className="text-indigo-600">({bookings.length})</span>
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-indigo-50 text-indigo-700 font-bold">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Book</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking._id}
                className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-3 text-slate-500">{index + 1}</td>
                <td className="px-4 py-3 font-semibold text-slate-700">
                  {booking.bookName}
                </td>
                <td className="px-4 py-3 text-slate-500">{booking.borrowDate}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    booking.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {booking.status || "Pending"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleCancelClick(booking._id)}
                    className="text-red-500 hover:text-red-700 font-bold text-xs border border-red-200 px-3 py-1 rounded-full hover:bg-red-50 transition-all"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}