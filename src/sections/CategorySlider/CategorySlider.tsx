import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Pendants', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400', bg: 'bg-gradient-to-br from-champagne to-cream-white' },
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=400', bg: 'bg-gradient-to-br from-peach to-cream-white' },
  { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400', bg: 'bg-gradient-to-br from-soft-pink to-cream-white' },
  { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400', bg: 'bg-gradient-to-br from-mint to-cream-white' },
  { name: 'Anklets', image: 'https://images.unsplash.com/photo-1611085507273-2985f2df5542?auto=format&fit=crop&q=80&w=400', bg: 'bg-gradient-to-br from-champagne to-cream-white' },
  { name: 'Bangle', image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=400', bg: 'bg-gradient-to-br from-soft-pink to-cream-white' },
  { name: 'Sets', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400', bg: 'bg-gradient-to-br from-peach to-cream-white' },
  { name: 'Men in Silver', image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400', bg: 'bg-gradient-to-br from-mint to-cream-white' },
];

const CategorySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 5;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const progress = scrollLeft / maxScroll;
      const index = Math.min(Math.round(progress * (totalDots - 1)), totalDots - 1);
      setActiveIndex(index);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cream-white via-soft-pink/30 to-cream-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-rose-gold/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-mint/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-4 md:px-12 relative max-w-[1600px] mx-auto z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-black mb-4">Shop by Category</h2>
          <p className="text-deep-black/60 font-sans max-w-2xl mx-auto">Explore our meticulously crafted collections designed for every occasion.</p>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-3 mb-12">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === idx ? 'w-12 bg-rose-gold shadow-pastel' : 'w-3 bg-rose-gold/30'
              }`}
            />
          ))}
        </div>

        <div className="relative group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex space-x-6 md:space-x-8 overflow-x-auto no-scrollbar pb-8 px-4"
          >
            {categories.map((cat, idx) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-40 md:w-56 text-center cursor-pointer group/card"
              >
                <div className={`aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 p-2 shadow-soft transition-all duration-500 hover:shadow-pastel ${cat.bg}`}>
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-pure-white">
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/10 via-transparent to-transparent z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <span className="text-lg md:text-xl font-serif text-deep-black group-hover/card:text-rose-gold transition-colors duration-300 tracking-wide">{cat.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-pure-white/80 backdrop-blur-md border border-rose-gold/30 shadow-pastel rounded-full p-4 text-rose-gold hover:bg-rose-gold hover:text-pure-white transition-all duration-300 z-20 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-2 md:translate-x-6 bg-pure-white/80 backdrop-blur-md border border-rose-gold/30 shadow-pastel rounded-full p-4 text-rose-gold hover:bg-rose-gold hover:text-pure-white transition-all duration-300 z-20 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
