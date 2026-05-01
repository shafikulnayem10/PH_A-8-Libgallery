"use client";
import { Suspense } from "react";
import LoginForm from "./login-form";

export default function LogInPage() {
  return (
    <Suspense fallback={<LoginPageSkeleton />}>
      <LoginForm />
    </Suspense>
  );
}

function LoginPageSkeleton() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md h-96 bg-gray-200 rounded-lg animate-pulse" />
    </div>
  );
}