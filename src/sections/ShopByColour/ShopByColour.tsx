import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const colorOptions = [
  {
    name: 'Silver',
    badge: 'Pure 925 Silver',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600',
    swatchColor: 'bg-gradient-to-br from-[#E5E7EB] via-[#9CA3AF] to-[#D1D5DB]',
    badgeBg: 'bg-pure-white/90 border border-rose-gold/30'
  },
  {
    name: 'Gold Plated',
    badge: '18 KT Gold Plated',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
    swatchColor: 'bg-gradient-to-br from-[#FDE68A] via-[#F59E0B] to-[#FEF3C7]',
    badgeBg: 'bg-pure-white/90 border border-rose-gold/30'
  }
];

const ShopByColour = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cream-white via-soft-pink/10 to-cream-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-4 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-deep-black mb-4 drop-shadow-sm">Shop by Colour</h2>
          <p className="text-deep-black/70 font-sans tracking-wide max-w-2xl mx-auto">Choose your perfect shade of elegance.</p>
        </div>
        
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
                <div className="w-full h-full rounded-[4rem] overflow-hidden shadow-soft relative border border-rose-gold/20 group-hover:border-rose-gold/50 transition-colors duration-500 bg-pure-white">
                  <div className="absolute inset-0 bg-deep-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={option.image} 
                    alt={option.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Top Badge */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${option.badgeBg} backdrop-blur-md px-8 py-3 rounded-b-3xl flex items-center space-x-3 shadow-pastel z-20`}>
                    <Sparkles size={14} className="text-rose-gold" />
                    <span className="text-xs font-bold text-rose-gold uppercase tracking-[0.2em] whitespace-nowrap">
                      {option.badge}
                    </span>
                  </div>
                </div>

                {/* Bottom Swatch */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full p-1.5 bg-pure-white border border-rose-gold/30 shadow-soft z-20 group-hover:shadow-pastel transition-shadow duration-500">
                  <div className={`w-full h-full rounded-full ${option.swatchColor} border border-black/10`}></div>
                </div>
              </div>

              {/* Label */}
              <span className="text-3xl md:text-4xl font-serif text-deep-black group-hover:text-rose-gold transition-colors duration-300 pt-6 tracking-wide drop-shadow-sm">{option.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByColour;
