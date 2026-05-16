export const dynamic = 'force-dynamic';
import React from 'react';
import Link from 'next/link';
import { getAllBooks, getCategories } from '@/lib/database';
import BookCard from '@/components/BookCard';
import SearchInput from '@/components/SearchInput'; 

export default async function AllBooksPage({ searchParams }) {
  const [books, categories] = await Promise.all([
     getAllBooks(),
    getCategories()
  ]);
  
  const params = await searchParams;
  const currentCategorySlug = params.category || "all";
  const searchQuery = params.search || "";

  const filteredBooks = books.filter((book) => {
    const matchesCategory = currentCategorySlug === "all" || 
      book.category?.toLowerCase() === currentCategorySlug.toLowerCase();
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        
      
     
<aside className="w-full md:w-64 flex-shrink-0">
  <div className="bg-white p-6 rounded-[32px] shadow-sm sticky top-24">
    <h3 className="text-xl font-bold text-slate-800 mb-6 px-2">Categories</h3>
    <div className="flex flex-col gap-2">

     
      <Link
        href={searchQuery ? `?search=${searchQuery}` : "?"}
        className={`text-left px-4 py-3 rounded-2xl font-medium transition-all ${
          currentCategorySlug === "all"
            ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
            : "text-slate-500 hover:bg-indigo-50 hover:text-indigo-600"
        }`}
      >
        All Books
      </Link>

      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`?category=${cat.slug}${searchQuery ? `&search=${searchQuery}` : ""}`}
          className={`text-left px-4 py-3 rounded-2xl font-medium transition-all ${
            currentCategorySlug === cat.slug
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
              : "text-slate-500 hover:bg-indigo-50 hover:text-indigo-600"
          }`}
        >
          {cat.name}
        </Link>
      ))}

    </div>
  </div>
</aside>

      
        <div className="flex-grow">
          <div className="mb-10">
           
            <SearchInput defaultValue={searchQuery} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 font-medium">
                  No books found {searchQuery ? `for "${searchQuery}"` : ""} in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
