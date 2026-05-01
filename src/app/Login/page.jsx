"use client";

import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import LoginForm from "@/components/LoginForm"; 

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Toaster position="top-center" reverseOrder={false} />
      
     
      <Suspense fallback={
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          <p className="text-gray-500 text-sm">Loading Login...</p>
        </div>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
}