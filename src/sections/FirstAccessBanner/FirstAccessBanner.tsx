import React from 'react';
import { Link } from 'react-router-dom';

const FirstAccessBanner = () => {
  return (
    <section className="py-12 px-4 md:px-12 max-w-[1600px] mx-auto relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-gold/10 blur-[100px] pointer-events-none" />

      <Link 
        to="/new-arrivals" 
        className="block relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-soft-pink/30 via-cream-white to-soft-pink/30 border border-rose-gold/20 flex items-center justify-center min-h-[220px] md:min-h-[300px] group shadow-soft hover:shadow-pastel transition-all duration-500"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pure-white/60 via-pure-white/80 to-pure-white/60 z-10" />

        {/* Left Image (Jewelry) */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/2 md:w-1/3 z-0"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to right, black 30%, transparent 100%)', 
            maskImage: 'linear-gradient(to right, black 30%, transparent 100%)' 
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" 
            alt="Jewelry" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold text-deep-black tracking-[0.15em] mb-2 leading-none drop-shadow-sm">
            FIRST ACCESS
          </h2>
          
          <div className="relative mb-4 w-full flex justify-center">
            {/* Light gradient pill behind the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/80 to-transparent w-4/5 mx-auto blur-[8px]" />
            <p className="relative text-xl md:text-3xl text-rose-gold italic font-serif px-8 py-1 tracking-wide">
              to what's new!
            </p>
          </div>

          <p className="text-sm md:text-base text-deep-black/70 font-sans tracking-widest uppercase mt-2">
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
            className="w-full h-full object-cover object-top opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
      </Link>
    </section>
  );
};

export default FirstAccessBanner;
