import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),


  title: {
    default: "Libgallery | Find Your Next Read",
    template: "%s | Libgallery",
  },

  description:
    "Libgallery is a modern online book borrowing platform. Browse thousands of digital titles — from tech manuals to gripping stories — and borrow instantly.",

keywords: [
  "online library",
  "online library Bangladesh",        
  "online book borrowing Bangladesh",  
  "digital library borrow books free", 
  "libgallery online library",         
  "digital books",
  "ebook borrowing",
  "free books online",
  "libgallery",
],

  authors: [{ name: "Libgallery Team", url: "http://localhost:3000" }],

  creator: "Libgallery",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3000",
    siteName: "Libgallery",
    title: "Libgallery | Find Your Next Read",
    description:
      "Browse thousands of digital titles. Borrow books instantly — from deep-tech manuals to gripping stories.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Libgallery — Find Your Next Read",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Libgallery | Find Your Next Read",
    description: "Browse thousands of digital titles and borrow instantly.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "http://localhost:3000",
  },
  verification: {
    google: "uCe_yd87BPCPOryhx17v0n8i0KWoAJx1WRRzujVYWag",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-100 text-gray-900">
        <Navbar />
        <main className="bg-slate-100 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {children}
        </main>
        <Footer />
        <Toaster position="top-left" richColors />
      </body>
    </html>
  );
}