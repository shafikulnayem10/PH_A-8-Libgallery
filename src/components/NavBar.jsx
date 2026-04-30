"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Libgallery_Logo.png";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2 sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        {/* LEFT: Website Logo (Links to Home) */}
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Libgallery Logo"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />
            <h3 className="font-black text-lg tracking-tighter">Libgallery</h3>
          </Link>
        </div>

        {/* CENTER: Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-books" className="hover:text-indigo-600 transition-colors">
              All Books
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-indigo-600 transition-colors">
              My Profile
            </Link>
          </li>
        </ul>

        {/* RIGHT: Conditional Rendering */}
        <div className="flex items-center gap-4">
          {!user ? (
           
            <ul className="flex items-center text-sm gap-5 font-medium">
              <li>
                <Link href="/signin" className="hover:text-indigo-600">
                 Log In
                </Link>
              </li>
              <li>
                <Button 
                  as={Link} 
                  href="/signup" 
                  size="sm" 
                  className="bg-indigo-600 text-white"
                >
                  SignUp
                </Button>
              </li>
            </ul>
          ) : (
           
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-xs font-bold text-gray-900 leading-none">
                  {user.name}
                </p>
              </div>
              
              <Avatar size="sm" isBordered color="primary">
                <Avatar.Image
                  alt={user.name}
                  src={user.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user.name?.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>

              <Button 
                onClick={handleSignOut} 
                size="sm" 
                variant="flat" 
                color="danger"
                className="font-medium"
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
