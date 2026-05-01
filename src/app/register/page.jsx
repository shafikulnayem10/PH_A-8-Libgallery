"use client";
import { authClient } from "@/lib/auth-client";
import { 
  Button, 
  Card, 
  Form, 
  Input, 
  Label, 
  TextField, 
  FieldError, 
  Link 
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; 
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();

  
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const image = formData.get("image");
    const password = formData.get("password");

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image,
    });

    if (error) {
      toast.error(error.message || "Registration failed.");
    } else {
      toast.success("Registration successful! Please log in.");
      authClient.signOut();
        window.location.href = "/login";
     
    }
  };

 
  const handleGoogleLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/login", 
    });

    if (error) {
      toast.error(error.message || "Google authentication failed.");
    } else {
      
      toast.success("Google account linked! Proceed to login.");
      authClient.signOut();
        window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
      <Card className="w-full max-w-md border-none shadow-2xl rounded-[32px] p-10 bg-white">
       
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-slate-800">
            Create <span className="text-indigo-600">Account</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2 font-medium">Join our community of readers</p>
        </div>

       
        <Button
          fullWidth
          variant="bordered"
          onPress={handleGoogleLogin}
          startContent={<FcGoogle className="text-xl" />}
          className="border-slate-200 font-semibold text-slate-600 hover:bg-slate-50 h-12 rounded-xl mb-6"
        >
          Register with Google
        </Button>

        

       
        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label className="text-slate-700 font-bold mb-1">Full Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          <TextField isRequired name="email" type="email">
            <Label className="text-slate-700 font-bold mb-1">Email Address</Label>
            <Input placeholder="name@example.com" />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          <TextField isRequired name="image" type="url">
            <Label className="text-slate-700 font-bold mb-1">Photo URL</Label>
            <Input placeholder="https://example.com/photo.jpg" />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label className="text-slate-700 font-bold mb-1">Password</Label>
            <Input placeholder="••••••••" />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          <Button 
            type="submit" 
            className="bg-indigo-600 text-white font-bold h-12 rounded-xl shadow-lg shadow-indigo-200 mt-2 hover:bg-indigo-700"
          >
            Register Now
          </Button>
        </Form>

      
        <p className="text-center text-slate-500 text-sm mt-8 font-medium">
          Already have an account?{" "}
          <Link 
            href="/login" 
            className="text-indigo-600 font-bold hover:underline"
          >
            Login here
          </Link>
        </p>
      </Card>
    </div>
  );
}
