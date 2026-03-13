import React from 'react';
import { motion } from 'framer-motion';

const pricePoints = [
  { label: 'Under', price: '₹1299' },
  { label: 'Under', price: '₹1499' },
  { label: 'Under', price: '₹1999' },
];

const PricePointSection = () => {
  return (
    <section className="py-24 bg-pure-white overflow-hidden">
      <div className="w-full px-4 md:px-12">
        <h2 className="text-4xl font-serif text-center mb-16">Luxury within Reach</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pricePoints.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative h-[350px] md:h-[450px] rounded-[4rem] overflow-hidden bg-gradient-to-b from-[#4A0E0E] to-[#2D0A11] flex flex-col items-center justify-center text-pure-white space-y-4 shadow-2xl group"
            >
              <span className="text-4xl font-light tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity">{item.label}</span>
              <span className="text-7xl md:text-8xl font-bold tracking-tighter group-hover:scale-110 transition-transform duration-500">{item.price}</span>
              
              {/* Decorative Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pure-white/0 via-pure-white/10 to-pure-white/0 pointer-events-none group-hover:via-pure-white/20 transition-all duration-700"></div>
              
              {/* Subtle Glow */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-rose-gold/10 rounded-full blur-[80px] pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricePointSection;
