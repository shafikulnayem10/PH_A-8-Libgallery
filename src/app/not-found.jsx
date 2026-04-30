import React from 'react';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
    
      <div className="relative mb-8">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-indigo-600 whitespace-nowrap">
          Page Not Found
        </p>
      </div>

     
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
        >
          Return Home
        </Link>
     
      </div>
      
    
    </div>
  );
}