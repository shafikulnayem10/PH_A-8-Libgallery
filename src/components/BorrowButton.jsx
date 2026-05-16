"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { toast } from "sonner";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { authClient, getSession } from "@/lib/auth-client";

export default function BorrowButton({ isAvailable, book }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [borrowed, setBorrowed] = useState(false);

  const handleBorrow = async () => {
    const { data: session } = await getSession();

    if (!session?.user) {
      const currentPath = window.location.pathname;
      router.push(`/login?redirect=${currentPath}`);
      return;
    }

    setLoading(true);

    try {
      
      const { token } = await authClient.getToken();

      const bookingData = {
        bookId: book._id?.toString(),
        bookName: book.title,
        bookImage: book.image_url,
        author: book.author,
        category: book.category,
        userEmail: session.user.email,
        userName: session.user.name,
        borrowDate: new Date().toLocaleDateString(),
        status: "pending",
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        setBorrowed(true);
        toast.success("Borrow request successful!", {
          description: "Book added to your collection.",
          icon: <FiCheckCircle className="text-emerald-500" />,
        });
      } else {
        toast.error("Something went wrong. Try again!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error!");
    } finally {
      setLoading(false);
    }
  };

  if (!isAvailable) {
    return (
      <Button
        disabled
        size="lg"
        className="w-full h-16 rounded-2xl font-bold text-lg bg-slate-200 text-slate-400 cursor-not-allowed"
      >
        Out of Stock
      </Button>
    );
  }

  if (borrowed) {
    return (
      <Button
        disabled
        size="lg"
        className="w-full h-16 rounded-2xl font-bold text-lg bg-emerald-100 text-emerald-700"
      >
        Borrowed!
      </Button>
    );
  }

  return (
    <Button
      onClick={handleBorrow}
      isLoading={loading}
      size="lg"
      className="w-full h-16 rounded-2xl font-bold text-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95"
    >
      {loading ? "Borrowing..." : "Borrow This Book"}
    </Button>
  );
}