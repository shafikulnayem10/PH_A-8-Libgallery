
"use client";
export const dynamic = 'force-dynamic';
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"; 
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Login failed. Please check your credentials.");
    } else {
      toast.success("Welcome!");
      router.push(redirect); 
    }
  };

  const handleGoogleLogIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirect, 
      });
    } catch (err) {
      toast.error("Google sign-in failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Toaster position="top-center" reverseOrder={false} />

      <Card className="border shadow-lg w-full max-w-md py-10 px-8 flex flex-col gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Please enter your details to sign in.</p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-sm font-bold">Email Address</Label>
            <Input placeholder="name@example.com" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            className="w-full"
          >
            <Label className="text-sm font-bold">Password</Label>
            <Input placeholder="••••••••" />
            <Description className="text-[10px] text-gray-400">
              Must be at least 8 characters.
            </Description>
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold h-12"
          >
            <Check className="size-4" />
            Login to Libgallery
          </Button>
        </Form>

        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-xs text-gray-400 font-bold uppercase">Or</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <Button
          onClick={handleGoogleLogIn}
          variant="bordered"
          className="w-full border-gray-200 font-bold h-12"
        >
          <GrGoogle className="text-red-500" />
          Continue with Google
        </Button>

        <p className="text-center text-sm text-gray-600">
          New to the library?{" "}
          <Link href="/register" className="text-indigo-600 font-bold hover:underline">
            Create an account
          </Link>
        </p>
      </Card>
    </div>
  );
}