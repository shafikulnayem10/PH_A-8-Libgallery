"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/LibGalleryLogo_V2.jpeg";
import { FiMenu, FiX, FiLogOut, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
    setIsMenuOpen(false);
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
            className="md:hidden text-2xl text-slate-700 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full ring-2 ring-indigo-50 group-hover:ring-indigo-100 transition-all">
              <Image 
                src={logo} 
                alt="Logo" 
                fill 
                className="object-cover border-2 border-indigo-100 rounded-full transition-transform group-hover:scale-110"
              />
              
            </div>
            <h3 className="font-black text-xl text-slate-700 group-hover:text-indigo-600 transition-colors">
              <span className="text-indigo-600">Lib</span>gallery
            </h3>
          </Link>
        </div>

       
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="hover:text-indigo-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

   
        <div className="flex items-center gap-3">
          {!user ? (
            <Link href="/login">
              <Button 
                size="md" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 font-bold shadow-md shadow-indigo-100 transition-all active:scale-95"
              >
                Log In
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-2 md:gap-4">
             
              <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full">
                <FiUser className="text-indigo-600 hidden sm:block" size={16} />
                <p className="text-xs md:text-sm font-bold text-indigo-700 max-w-[80px] md:max-w-[120px] truncate">
                  {user.name}
                </p>
              </div>

              <Button 
                onClick={handleLogOut} 
                size="sm"
                variant="flat"
                color="danger"
                className="rounded-full font-bold px-4 hidden sm:flex items-center gap-2"
              >
                <FiLogOut size={16} />
                Log Out
              </Button>
            </div>
          )}
        </div>
      </nav>

     
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden" 
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-full left-0 w-full bg-white border-b shadow-xl p-6 md:hidden flex flex-col gap-5 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-700 hover:text-indigo-600 flex items-center justify-between"
              >
                {link.name}
                <span className="w-2 h-2 bg-slate-200 rounded-full"></span>
              </Link>
            ))}
            
            {user && (
              <div className="pt-4 border-t">
                <Button 
                  onClick={handleLogOut} 
                  color="danger" 
                  variant="solid" 
                  className="w-full rounded-2xl font-bold h-12"
                >
                  Log Out
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
