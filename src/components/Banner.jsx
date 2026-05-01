import React from 'react';
import Link from 'next/link';
import PromoMarquee from './PromoMarquee';

const Banner = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
     
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-44 flex flex-col items-center text-center">
        
       
       <PromoMarquee></PromoMarquee>

        
        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 tracking-tighter leading-[1.1] mb-8">
          Find Your <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600">
            Next Read.
          </span>
        </h1>

       
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed font-medium">
          Dive into a curated collection of thousands of digital titles. 
          From deep-tech manuals to gripping stories, your next favorite 
          book is just a click away.
        </p>

       
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link
            href="/allbooks"
            className="group relative px-10 py-5 bg-gray-900 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-200 active:scale-95"
          >
            Browse Collection
          </Link>
          
         
        </div>

     
        <div className="mt-24 w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
};

export default Banner;