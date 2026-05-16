"use client";
import React from "react";
import { Card, Link as HeroLink } from "@heroui/react";
import { CircleDollar } from "@gravity-ui/icons";
import NextLink from "next/link";
import Image from "next/image";

const BookCard = ({ book }) => {
 
  const categoryStyles = {
    "Science": "bg-blue-50 text-blue-600 border-blue-100",
    "Classic": "bg-amber-50 text-amber-700 border-amber-100",
    "Tech": "bg-indigo-50 text-indigo-700 border-indigo-100",
    "Fantasy": "bg-purple-50 text-purple-700 border-purple-100",
    "Story": "bg-emerald-50 text-emerald-700 border-emerald-100",
    "default": "bg-gray-50 text-gray-600 border-gray-100"
  };

  const badgeStyle = categoryStyles[book.category] || categoryStyles.default;

  return (
    <Card className="w-full p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 bg-white">
      
     
      <div className="flex items-start justify-between">
        <CircleDollar 
          aria-label="Price icon" 
          className="text-indigo-600 size-6 shrink-0" 
          role="img" 
        />
        <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${badgeStyle}`}>
          {book.category}
        </span>
      </div>

     
      <div className="relative w-full h-48 overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={book.image_url }
          fill
          alt={book.title || "Book Cover"}
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

     
      <div className="flex flex-col gap-1">
       
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {book.title}
        </h3>
        
        <p className="text-sm text-gray-500 font-medium italic">
          by {book.author || "Unknown Author"}
        </p>

        <p className="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
          {book.description || "Explore this amazing title from our collection."}
        </p>
      </div>

     
      <div className="h-px w-full bg-gray-100 my-1" />

      
      <div className="flex items-center justify-between mt-auto">
       

        <HeroLink
          as={NextLink}
          href={`/allbooks/${book.id}`}
          className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 group"
        >
          View Details
          <HeroLink.Icon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </HeroLink>
      </div>
    </Card>
  );
};

export default BookCard;