import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-gradient-to-b from-cream-white to-soft-pink/20 min-h-screen relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-rose-gold/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-rose-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Hero */}
          <div className="text-center space-y-8">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-rose-gold drop-shadow-sm">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-deep-black drop-shadow-sm">Crafting Elegance <br /> Since 1992</h1>
            <p className="text-lg text-deep-black/70 font-sans leading-relaxed tracking-wide">
              AURELIA was born from a passion for timeless beauty and a commitment to exceptional craftsmanship. For over three decades, we have been the silent companion to your most precious moments.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden bg-cream-white rounded-3xl border border-rose-gold/20 shadow-soft relative group">
              <div className="absolute inset-0 bg-deep-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=800" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8 bg-pure-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-rose-gold/20 shadow-pastel">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-black">The Art of Artisanship</h2>
              <p className="text-sm text-deep-black/80 font-sans leading-relaxed tracking-wide">
                Every piece of AURELIA jewellery is a masterpiece of design and engineering. Our master artisans blend traditional techniques with modern innovation to create jewellery that is as durable as it is beautiful.
              </p>
              <p className="text-sm text-deep-black/80 font-sans leading-relaxed tracking-wide">
                We source only the finest materials—ethically mined gold, 925 sterling silver, and conflict-free diamonds—ensuring that your luxury is responsible and pure.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-16 border-y border-rose-gold/20 bg-pure-white/60 backdrop-blur-sm rounded-3xl shadow-soft px-8">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-rose-gold">Purity</h3>
              <p className="text-sm text-deep-black/70 font-sans">Certified 18k gold and 925 sterling silver in every piece.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-rose-gold">Ethics</h3>
              <p className="text-sm text-deep-black/70 font-sans">Conflict-free stones and ethically sourced precious metals.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-rose-gold">Design</h3>
              <p className="text-sm text-deep-black/70 font-sans">Timeless aesthetics designed for the modern woman.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
