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

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2 sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
      
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
            <h3 className="font-black text-lg tracking-tighter"><span className="text-indigo-600">Lib</span>gallery</h3>
          </Link>
        </div>

       
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/allbooks" className="hover:text-indigo-600 transition-colors">
              All Books
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-indigo-600 transition-colors">
              My Profile
            </Link>
          </li>
        </ul>

      
        <div className="flex items-center gap-4">
          {!user ? (
           
            <ul className="flex items-center text-sm gap-5 font-medium">
              <li>
                <Link href="/login" className="hover:text-indigo-600">
                 <Button variant="outline" size="sm" className="bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-100">
                    Log In
                  </Button>
                </Link>
              </li>
              <li>
               
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
                onClick={handleLogOut} 
                size="sm" 
                variant="flat" 
                color="danger"
                className="font-medium"
              >
                Log Out
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
