import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import Image from 'next/image';
import logo from "../../public/LibGalleryLogo_V2.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
         
          <div className="space-y-4">
            <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-white font-bold">
  <Image 
    src={logo} 
    alt="Libgallery Logo" 
    width={32} 
    height={32} 
    className="object-cover"
  />
</div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Libgallery
              </span>

            </div>
            <p className="text-sm leading-relaxed">
              Empowering readers worldwide with a seamless digital borrowing experience. 
              Explore thousands of titles across all genres.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white rounded-full border border-gray-200 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full border border-gray-200 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full border border-gray-200 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

         
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-xs tracking-widest mb-5">
              Library Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
              <li><Link href="/all-books" className="hover:text-indigo-600 transition-colors">All Books</Link></li>
              <li><Link href="/profile" className="hover:text-indigo-600 transition-colors">My Profile</Link></li>

            </ul>
          </div>

          
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-xs tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-indigo-600 mt-1" />
                <span>support@libgallery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-indigo-600 mt-1" />
                <span>+1 (555) 000-1234</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-indigo-600 mt-1" />
                <span>123 Library Lane, Booktown, BK 10101</span>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-xs tracking-widest mb-5">
              Stay Informed
            </h4>
            <p className="text-xs mb-4 text-gray-500">Subscribe for new arrivals and reading tips.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
              />
              <button 
                type="submit" 
                className="bg-indigo-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="h-px w-full bg-gray-200 my-10"></div>

     
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {currentYear} Libgallery. Designed with care for readers.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;