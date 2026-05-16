"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Avatar } from "@heroui/react";
import { FaStar } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const reviews = [
    { id: 1, name: "Rahim Uddin", role: "Reader", review: "Libgallery completely changed how I read. The digital borrowing system is so smooth — I got my book in seconds!", rating: 5 },
    { id: 2, name: "Tajmun Nahar Tisha ", role: "Web Developer", review: "The collection is massive. I found so many rare tech books I couldn't get anywhere else. Absolutely love this platform!", rating: 5 },
    { id: 3, name: "Karim Hossain", role: "Student", review: "Clean interface, easy to navigate. The category filter makes finding books so much easier. Highly recommended!", rating: 4 },
    { id: 4, name: "Anika Tahsin", role: "Editor", review: "The UI is incredibly intuitive. As someone who handles hundreds of titles, this makes organization a breeze.", rating: 5 },
    { id: 5, name: "Zayan Ahmed", role: "Software Engineer", review: "I love the dark mode and the fast loading speeds. It's rare to see a library app this well-optimized.", rating: 5 },
    { id: 6, name: "Nabila Sayed", role: "Researcher", review: "The citation tools and PDF viewer are top-notch. It has become my primary resource for academic papers.", rating: 5 },
    { id: 7, name: "Fahim Shahriar", role: "Casual Reader", review: "The recommendation engine is spooky good! Every book suggested so far has been exactly what I was looking for.", rating: 4 },
    { id: 8, name: "Mehnaz Karim", role: "Professor", review: "A fantastic resource for my students. The ability to track reading progress helps keep everyone on schedule.", rating: 5 },
    { id: 9, name: "Tanvir Hasan", role: "Developer", review: "Being able to contribute to the gallery is a game changer. The community aspect here is truly unique.", rating: 5 }
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
      
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-slate-800">
            What Our <span className="text-indigo-600">Readers</span> Say
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          autoplay={{ 
            delay: 3500, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          
          className="pb-20 
            [&_.swiper-pagination-bullet]:w-2.5 
            [&_.swiper-pagination-bullet]:h-2.5 
            [&_.swiper-pagination-bullet]:bg-slate-300 
            [&_.swiper-pagination-bullet]:opacity-100
            [&_.swiper-pagination-bullet-active]:!bg-indigo-600 
            [&_.swiper-pagination-bullet-active]:w-6 
            [&_.swiper-pagination-bullet-active]:rounded-full
            [&_.swiper-pagination-bullet-active]:transition-all"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-50 transition-all duration-300 h-full flex flex-col group">
                
               
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      className={`text-lg ${index < item.rating ? "text-indigo-600" : "text-slate-200"}`} 
                    />
                  ))}
                </div>

              
                <p className="text-slate-600 italic leading-relaxed mb-10 flex-grow text-lg">
                  "{item.review}"
                </p>

              
                <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-indigo-100 transition-colors" />

               
                <div className="flex items-center gap-4">
                 
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight text-lg group-hover:text-indigo-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-400 font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;