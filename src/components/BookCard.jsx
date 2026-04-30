"use client";
import React from "react";
import { Card, Link as HeroLink } from "@heroui/react";
import { CircleDollar } from "@gravity-ui/icons";
import NextLink from "next/link";
import Image from "next/image";

const BookCard = ({ book }) => {
  return (
    <Card className="w-full p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col gap-4">
      {/* Gravity UI Icon & Header */}
      <div className="flex items-start justify-between">
        <CircleDollar 
          aria-label="Price icon" 
          className="text-indigo-600 size-6 shrink-0" 
          role="img" 
        />
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded">
          {book.category}
        </span>
      </div>

      {/* Book Image (Added for a professional library look) */}
      <div className="relative w-full h-48 overflow-hidden rounded-xl">
        <Image
          src={book.image_url}
          fill
          alt={book.title}
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-gray-900 leading-tight truncate">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 font-medium italic">
          by {book.author}
        </p>
        <p className="text-sm text-gray-600 line-clamp-2 mt-2 leading-relaxed">
          {book.description || "Start reading this incredible title from Libgallery today."}
        </p>
      </div>

      {/* Custom Tailwind Divider (Fixes the "Divider doesn't exist" error) */}
      <div className="h-px w-full bg-gray-100 my-1" />

      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-lg font-black text-indigo-600">${book.price || "14.99"}</span>
          <span className="text-[10px] text-gray-400 font-bold uppercase">Ready to Borrow</span>
        </div>

        {/* HeroUI Link with Icon */}
        <HeroLink
          as={NextLink}
          href={`/all-books/${book.id}`}
          className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1"
        >
          View Details
          <HeroLink.Icon className="size-4" />
        </HeroLink>
      </div>
    </Card>
  );
};

export default BookCard;