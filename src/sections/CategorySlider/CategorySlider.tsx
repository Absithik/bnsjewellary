import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Pendants', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=300' },
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=300' },
  { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=300' },
  { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=300' },
  { name: 'Anklets', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=300' },
  { name: 'Bangle', image: 'https://images.unsplash.com/photo-1611085507273-2985f2df5542?auto=format&fit=crop&q=80&w=300' },
  { name: 'Sets', image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=300' },
  { name: 'Men in Silver', image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300' },
];

const CategorySlider = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-pure-white relative group">
      <div className="w-full px-4 md:px-12 relative">
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar pb-4 md:justify-center"
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.name}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-32 md:w-40 text-center space-y-3 cursor-pointer"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-[#8B2E40] p-1">
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <span className="text-xs font-medium tracking-wide text-royal-black">{cat.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-pure-white shadow-lg rounded-full p-2 text-royal-black/40 hover:text-royal-black transition-colors z-10 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-pure-white shadow-lg rounded-full p-2 text-royal-black/40 hover:text-royal-black transition-colors z-10 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CategorySlider;
