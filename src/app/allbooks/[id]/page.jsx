import React from 'react';
import NextImage from 'next/image';
import { Chip } from "@heroui/react";
import { FiUser, FiInfo, FiLayers } from "react-icons/fi";
import BorrowButton from "@/components/BorrowButton";
import { getBookDetailsById } from '@/lib/database';
import { auth } from '@/lib/auth'; 
import { headers } from 'next/headers';





export async function generateMetadata({ params }) {
  const { id } = await params;
  const book = await getBookDetailsById(id);

  if (!book) {
    return {
      title: "Book Not Found",
      description: "The requested book could not be found on Libgallery.",
    };
  }

  return {
    
    title: book.title,

    description: `${book.description?.slice(0, 155)}...`,

    keywords: [
      book.title,
      book.author,
      book.category,
      "borrow book online",
      "libgallery",
    ],

    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: `${book.description?.slice(0, 155)}...`,
      url: `http://localhost:3000/allbooks/${id}`,
      images: [
        {
          url: book.image_url,
          width: 800,
          height: 600,
          alt: `${book.title} — book cover`,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${book.title} by ${book.author}`,
      description: `${book.description?.slice(0, 155)}...`,
      images: [book.image_url],
    },

    alternates: {
      canonical: `http://localhost:3000/allbooks/${id}`,
    },
  };
}

export default async function BookDetailsPage({ params }) {
  const { id } = await params;

 
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const book = await getBookDetailsById(id);

  if (!book) {
    return <div className="text-center py-20">Book not found.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-sm overflow-hidden flex flex-col md:flex-row border border-slate-100">
        
        <div className="w-full md:w-1/2 bg-slate-100 flex items-center justify-center p-12">
          <div className="relative shadow-2xl rounded-2xl overflow-hidden w-full max-w-sm aspect-[3/4]">
            <NextImage
              src={book.image_url}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
          <div className="mb-6">
            <Chip className="bg-indigo-50 text-indigo-600 font-bold" variant="flat">
              {book.category}
            </Chip>
          </div>

          <h1 className="text-4xl font-serif font-black text-slate-800 mb-4">
            {book.title}
          </h1>

          <div className="flex items-center gap-2 text-slate-500 mb-8 font-medium">
            <FiUser className="text-indigo-600" />
            <span>by <span className="text-slate-800 font-bold">{book.author}</span></span>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-3">
              <FiInfo className="text-indigo-600 mt-1 flex-shrink-0" />
              <p className="text-slate-600 leading-relaxed italic">{book.description}</p>
            </div>

            <div className="flex items-center gap-3">
              <FiLayers className="text-indigo-600" />
              <span className="font-bold text-emerald-600">
                {book.available_quantity} copies left
              </span>
            </div>
          </div>

        
        
    <BorrowButton isAvailable={book.available_quantity > 0} book={book} />
        </div>
      </div>
    </div>
  );
}

