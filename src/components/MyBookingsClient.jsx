"use client";
import { useState } from "react";

export default function MyBookingsClient({ bookings: initialBookings }) {
  const [bookings, setBookings] = useState(initialBookings);

  const handleDelete = async (id) => {
    const res = await fetch(`https://libgallery-server.vercel.app/bookings/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      setBookings((prev) => prev.filter((b) => b._id !== id));
    }
  };

  if (bookings.length === 0) {
    return <p className="p-10 text-center text-slate-500">No Borrowed Books found!</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
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
                    onClick={() => handleDelete(booking._id)}
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