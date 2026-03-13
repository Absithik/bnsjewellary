import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-32 bg-pure-white overflow-hidden relative">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-bold text-soft-beige/50 pointer-events-none whitespace-nowrap z-0">
        AURELIA CLUB
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-gold">Join the circle</span>
            <h2 className="text-4xl md:text-6xl font-serif font-light">Get Exclusive Jewellery Updates</h2>
            <p className="text-sm text-royal-black/60 font-light tracking-widest">
              Be the first to know about new collections, private sales, and styling tips.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-grow bg-soft-beige/50 border-b border-royal-black/10 px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-rose-gold transition-colors"
            />
            <button className="btn-premium px-12 whitespace-nowrap">
              Subscribe
            </button>
          </motion.form>

          <p className="text-[10px] text-royal-black/40 uppercase tracking-widest font-medium">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
