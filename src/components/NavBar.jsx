"use client";
import React, { useState } from "react"; 
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/LibGalleryLogo_V2.jpeg";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/allbooks" },
    { name: "My Profile", href: "/profile" },
  ];

  return (
    <div className="border-b px-4 sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        <div className="flex gap-4 items-center">
         
          <button 
            className="md:hidden text-2xl" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full" />
            <h3 className="font-black text-lg tracking-tighter">
              <span className="text-indigo-600">Lib</span>gallery
            </h3>
          </Link>
        </div>

       
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-indigo-600 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

       
        <div className="flex items-center gap-4">
          {!user ? (
            <Link href="/login">
              <Button className="bg-indigo-600 rounded-full text-white px-6">Log In</Button>
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar size="sm" src={user.image} isBordered color="primary" />
              <Button 
                onClick={handleLogOut} 
                className="hidden sm:flex bg-red-500 text-white rounded-full"
              >
                Log Out
              </Button>
            </div>
          )}
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="md:hidden pb-4 flex flex-col gap-4 border-t pt-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 font-semibold px-2"
            >
              {link.name}
            </Link>
          ))}
          {user && (
            <Button onClick={handleLogOut} color="danger" variant="flat" className="w-full">
              Log Out
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
