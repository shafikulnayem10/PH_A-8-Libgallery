import React from "react";
import Marquee from "react-fast-marquee";

const PromoMarquee = () => {
  return (
    <div className="bg-gray-900 py-3 border-b border-gray-800">
      <Marquee 
        gradient={true} 
        gradientColor="black" 
        gradientWidth={100}
        speed={50}
        pauseOnHover={true}
      >
        <div className="flex gap-10 text-white text-sm font-bold uppercase tracking-widest px-4">
          <span className="flex items-center gap-2">
            <span className="text-indigo-400">★</span> 
            New Arrivals: The Silent Echo
          </span>
          <span className="flex items-center gap-2">
            <span className="text-indigo-400">★</span> 
            Special Discount on Memberships - Get 20% Off!
          </span>
          <span className="flex items-center gap-2">
            <span className="text-indigo-400">★</span> 
            Just Added: Rust for Systems Programming
          </span>
          <span className="flex items-center gap-2">
            <span className="text-indigo-400">★</span> 
            Join our community of 5,000+ readers
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default PromoMarquee;