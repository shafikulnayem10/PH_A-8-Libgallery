"use client";
import { Button } from "@heroui/react";
import { toast } from "sonner";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/auth-client"; 

export default function BorrowButton({ isAvailable }) {
  const router = useRouter();

const handleBorrow = async () => {
  const { data: session } = await getSession();

  if (!session?.user) {
    const currentPath = window.location.pathname; 
    router.push(`/login?redirect=${currentPath}`); 
    return;
  }

  toast.success("Borrow request successful!", {
    description: "Book added to your collection.",
    icon: <FiCheckCircle className="text-emerald-500" />,
  });
};

  return (
    <Button
      onClick={handleBorrow}
      disabled={!isAvailable}
      size="lg"
      className={`w-full h-16 rounded-2xl font-bold text-lg shadow-lg transition-all ${
        isAvailable
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "bg-slate-200 text-slate-400 cursor-not-allowed"
      }`}
    >
      {isAvailable ? "Borrow This Book" : "Out of Stock"}
    </Button>
  );
}