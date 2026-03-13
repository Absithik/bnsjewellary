import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 0,
    title: "Elegance Redefined",
    subtitle: "Discover the new silver collection.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 1,
    title: "The Golden Hour",
    subtitle: "18KT gold plated essentials.",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    title: "Timeless Bonds",
    subtitle: "Gifts that last a lifetime.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=2000",
  }
];

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-royal-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-pure-white/80 font-bold">
              Aurelia Exclusive
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-pure-white leading-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-2xl text-pure-white/90 font-light drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>
            <div className="pt-8">
              <Link 
                to="/shop" 
                className="inline-block bg-pure-white text-royal-black px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-rose-gold hover:text-pure-white transition-colors duration-300"
              >
                Explore Collection
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 relative flex items-center justify-center ${
              currentSlide === idx ? 'w-12 h-12' : 'w-8 h-8'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span 
              className={`absolute h-[2px] bg-pure-white transition-all duration-500 ${
                currentSlide === idx ? 'w-10 opacity-100' : 'w-4 opacity-50 hover:opacity-100'
              }`} 
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
