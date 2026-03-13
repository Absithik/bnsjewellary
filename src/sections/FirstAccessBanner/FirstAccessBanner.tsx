import React from 'react';
import { Link } from 'react-router-dom';

const FirstAccessBanner = () => {
  return (
    <section className="py-8 px-4 md:px-12 max-w-[1600px] mx-auto">
      <Link 
        to="/new-arrivals" 
        className="block relative w-full rounded-sm overflow-hidden bg-[#631526] flex items-center justify-center min-h-[200px] md:min-h-[260px] group shadow-sm hover:shadow-md transition-shadow"
      >
        {/* Left Image (Jewelry) */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/3 md:w-1/4 z-0"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to right, black 30%, transparent 100%)', 
            maskImage: 'linear-gradient(to right, black 30%, transparent 100%)' 
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" 
            alt="Jewelry" 
            className="w-full h-full object-cover mix-blend-screen opacity-70 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-wide mb-1 leading-none font-sans">
            FIRST ACCESS
          </h2>
          
          <div className="relative mb-3 w-full flex justify-center">
            {/* Dark gradient pill behind the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3a0b14] to-transparent w-4/5 mx-auto blur-[4px]" />
            <p className="relative text-xl md:text-2xl text-white italic font-serif px-8 py-1">
              to what's new!
            </p>
          </div>

          <p className="text-sm md:text-base text-white/90 font-medium tracking-wide">
            New design destined to<br className="md:hidden" /> become bestsellers
          </p>
        </div>

        {/* Right Image (Model) */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 z-0"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)', 
            maskImage: 'linear-gradient(to left, black 50%, transparent 100%)' 
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" 
            alt="Model wearing jewelry" 
            className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </Link>
    </section>
  );
};

export default FirstAccessBanner;
