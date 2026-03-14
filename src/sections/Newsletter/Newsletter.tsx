import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-32 bg-cream-white overflow-hidden relative">
      {/* Decorative Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=2000" 
          alt="Jewelry Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-white via-soft-pink/40 to-cream-white" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-pure-white/60 backdrop-blur-xl border border-rose-gold/20 p-10 md:p-16 rounded-3xl shadow-pastel"
          >
            <div className="space-y-6 mb-10">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-rose-gold">Join the Inner Circle</span>
              <h2 className="text-4xl md:text-5xl font-serif text-deep-black">Exclusive Access</h2>
              <p className="text-sm text-deep-black/70 font-sans tracking-wide max-w-lg mx-auto">
                Be the first to know about new collections, private sales, and styling tips from our master jewelers.
              </p>
            </div>

            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-grow bg-pure-white/80 border border-rose-gold/30 rounded-full px-6 py-4 text-sm text-deep-black placeholder-deep-black/40 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-all duration-300"
              />
              <button className="btn-premium rounded-full px-10 whitespace-nowrap bg-gradient-to-r from-luxury-gold to-rose-gold text-pure-white hover:opacity-90 border-none">
                Subscribe
              </button>
            </motion.form>

            <p className="text-[10px] text-deep-black/40 uppercase tracking-widest font-medium mt-8">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
