import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Hero */}
          <div className="text-center space-y-8">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-rose-gold">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight">Crafting Elegance <br /> Since 1992</h1>
            <p className="text-lg text-royal-black/60 font-light leading-relaxed tracking-wide">
              AURELIA was born from a passion for timeless beauty and a commitment to exceptional craftsmanship. For over three decades, we have been the silent companion to your most precious moments.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden bg-soft-beige">
              <img 
                src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=800" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-light">The Art of Artisanship</h2>
              <p className="text-sm text-royal-black/60 font-light leading-relaxed tracking-wide">
                Every piece of AURELIA jewellery is a masterpiece of design and engineering. Our master artisans blend traditional techniques with modern innovation to create jewellery that is as durable as it is beautiful.
              </p>
              <p className="text-sm text-royal-black/60 font-light leading-relaxed tracking-wide">
                We source only the finest materials—ethically mined gold, 925 sterling silver, and conflict-free diamonds—ensuring that your luxury is responsible and pure.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-16 border-y border-royal-black/5">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold">Purity</h3>
              <p className="text-sm text-royal-black/60 font-light">Certified 18k gold and 925 sterling silver in every piece.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold">Ethics</h3>
              <p className="text-sm text-royal-black/60 font-light">Conflict-free stones and ethically sourced precious metals.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold">Design</h3>
              <p className="text-sm text-royal-black/60 font-light">Timeless aesthetics designed for the modern woman.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
