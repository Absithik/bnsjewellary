import React from 'react';
import { motion } from 'motion/react';
import { categories } from '../../data/products';
import { ArrowRight } from 'lucide-react';

export const FeaturedCategories = () => {
  return (
    <section className="section-padding bg-luxury-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.6em] text-gold-primary font-bold">The Collections</span>
            <h2 className="text-5xl md:text-7xl font-serif font-light">Curated Excellence</h2>
          </div>
          <p className="max-w-md text-gray-500 text-sm md:text-base leading-relaxed font-light tracking-wide">
            From the timeless brilliance of gold to the ethereal glow of silver, explore our meticulously crafted categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-[#F0F0F0]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-royal-black/5 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif font-light tracking-wide group-hover:text-gold-primary transition-colors duration-500">
                    {category.name}
                  </h3>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">
                    {category.count} Pieces
                  </span>
                </div>
                <div className="w-full h-[1px] bg-black/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-full bg-gold-primary group-hover:w-full transition-all duration-700" />
                </div>
                <button className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.4em] font-bold text-royal-black group-hover:text-gold-primary transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
