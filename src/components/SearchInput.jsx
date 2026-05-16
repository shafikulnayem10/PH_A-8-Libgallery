"use client";

import { FiSearch } from "react-icons/fi";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function SearchInput({ defaultValue }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="relative w-full">
      <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-indigo-600 text-xl pointer-events-none" />
      <input
        type="text"
        placeholder="Search by title..."
        defaultValue={defaultValue}
        onChange={handleSearch}
        className="w-full h-16 pl-14 pr-6 bg-white rounded-2xl shadow-sm border-none outline-none focus:ring-2 ring-indigo-600 transition-all text-slate-700 placeholder:text-slate-400"
      />
      {isPending && (
        <div className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      )}
    </div>
  );
}