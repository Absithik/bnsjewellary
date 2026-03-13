import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Pendants', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Anklets', image: 'https://images.unsplash.com/photo-1611085507273-2985f2df5542?auto=format&fit=crop&q=80&w=400' },
  { name: 'Bangle', image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sets', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400' },
  { name: 'Men in Silver', image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mangalsutras', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Silver Chains', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400' },
  { name: 'Personalised', image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Nose Pins', image: 'https://images.unsplash.com/photo-1603561591411-071c4f723918?auto=format&fit=crop&q=80&w=400' },
  { name: 'Toe Rings', image: 'https://images.unsplash.com/photo-1573408301145-b98c46544405?auto=format&fit=crop&q=80&w=400' },
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
    <section className="py-16 bg-pure-white relative">
      <div className="w-full px-4 md:px-12 relative max-w-[1600px] mx-auto">
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mb-10">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-10 bg-gray-400' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        <div className="relative group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex space-x-4 md:space-x-8 overflow-x-auto no-scrollbar pb-4 px-2"
          >
            {categories.map((cat) => (
              <motion.div 
                key={cat.name}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-36 md:w-52 text-center cursor-pointer"
              >
                <div className="aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-lg md:text-xl font-sans text-royal-black block mt-5">{cat.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-[#F5F5F5] shadow-sm rounded-full p-4 text-royal-black/60 hover:text-royal-black hover:bg-white transition-colors z-10 hidden md:block"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-2 md:translate-x-6 bg-[#F5F5F5] shadow-sm rounded-full p-4 text-royal-black/60 hover:text-royal-black hover:bg-white transition-colors z-10 hidden md:block"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
