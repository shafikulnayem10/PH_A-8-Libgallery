import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import bg from '../../public/quotesectionbg.jpg';

const QuoteSection = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden my-16 rounded-3xl">
     
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${bg.src}')` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>

     
      <div className="relative z-10 px-6 text-center max-w-4xl">
        <div className="flex justify-center mb-6">
            <div className="p-3 border border-yellow-500/50 rounded-full">
                <FaQuoteLeft className="text-yellow-500 size-5" />
            </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-8">
          “Without the library, you have no civilisation.”
        </h2>
        
        <p className="text-indigo-300 text-xl md:text-2xl font-medium tracking-wide italic">
          — Ray Bradbury
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;