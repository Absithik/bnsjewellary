import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const colorOptions = [
  {
    name: 'Silver',
    badge: 'Pure 925 Silver',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600',
    swatchColor: 'bg-gradient-to-br from-[#E5E7EB] via-[#9CA3AF] to-[#D1D5DB]',
    badgeBg: 'bg-[#E5E7EB]/90'
  },
  {
    name: 'Gold Plated',
    badge: '18 KT Gold Plated',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
    swatchColor: 'bg-gradient-to-br from-[#FDE68A] via-[#F59E0B] to-[#FEF3C7]',
    badgeBg: 'bg-[#FEF3C7]/90'
  }
];

const ShopByColour = () => {
  return (
    <section className="py-24 bg-pure-white overflow-hidden">
      <div className="w-full px-4 md:px-12">
        <h2 className="text-4xl font-serif text-center mb-16">Shop by Colour</h2>
        
        <div className="flex flex-wrap justify-center gap-16 md:gap-24">
          {colorOptions.map((option, index) => (
            <motion.div 
              key={option.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center space-y-8 group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                <div className="w-full h-full rounded-[4rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src={option.image} 
                    alt={option.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Top Badge */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${option.badgeBg} backdrop-blur-md px-8 py-3 rounded-b-3xl flex items-center space-x-3 shadow-sm`}>
                    <Sparkles size={14} className="text-royal-black/60" />
                    <span className="text-xs font-bold text-royal-black uppercase tracking-[0.2em] whitespace-nowrap">
                      {option.badge}
                    </span>
                  </div>
                </div>

                {/* Bottom Swatch */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full p-1.5 bg-pure-white shadow-2xl z-10">
                  <div className={`w-full h-full rounded-full ${option.swatchColor} border border-black/5`}></div>
                </div>
              </div>

              {/* Label */}
              <span className="text-3xl md:text-4xl font-serif text-royal-black pt-6">{option.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByColour;
