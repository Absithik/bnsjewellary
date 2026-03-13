import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden bg-[#FDF2F0] pt-40">
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-7xl md:text-9xl font-serif text-[#4A2C2A] leading-none">
            Fresh Drop
          </h1>
          <p className="text-2xl md:text-3xl text-[#4A2C2A] font-light">
            Consider this your <span className="font-bold underline decoration-rose-gold/30">new silver update</span>
          </p>
          <div className="pt-4">
            <Link to="/shop" className="inline-block bg-[#2D0A11] text-pure-white px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all shadow-lg">
              SHOP NOW
            </Link>
          </div>
        </motion.div>

        {/* Product Images */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] lg:h-[500px] hidden md:block"
        >
          {/* Ring */}
          <motion.img 
            animate={{ y: [0, -10, 0], rotate: [12, 10, 12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800" 
            alt="Jewellery" 
            className="absolute top-0 right-0 w-56 h-56 object-contain drop-shadow-2xl z-20"
            referrerPolicy="no-referrer"
          />
          {/* Necklace */}
          <motion.img 
            animate={{ y: [0, 10, 0], rotate: [-6, -8, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800" 
            alt="Jewellery" 
            className="absolute top-1/4 left-1/4 w-72 h-72 object-contain drop-shadow-2xl z-10"
            referrerPolicy="no-referrer"
          />
          {/* Bracelet */}
          <motion.img 
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800" 
            alt="Jewellery" 
            className="absolute bottom-0 right-1/4 w-80 h-80 object-contain drop-shadow-2xl z-0"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-3">
        <div className="w-2 h-2 rounded-full bg-royal-black/20"></div>
        <div className="w-10 h-1.5 rounded-full bg-[#8B2E40]"></div>
        <div className="w-2 h-2 rounded-full bg-royal-black/20"></div>
        <div className="w-2 h-2 rounded-full bg-royal-black/20"></div>
        <div className="w-2 h-2 rounded-full bg-royal-black/20"></div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-bold text-royal-black/[0.02] pointer-events-none whitespace-nowrap z-0">
        AURELIA
      </div>
    </section>
  );
};

export default HomeHero;
