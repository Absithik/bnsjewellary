import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-rose-gold">Concierge Service</span>
            <h1 className="text-5xl md:text-7xl font-serif font-light">How Can We Assist?</h1>
            <p className="text-sm text-royal-black/60 tracking-[0.2em] font-light max-w-2xl mx-auto uppercase">
              Our dedicated concierge team is here to provide personalized assistance for all your jewellery needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <div className="space-y-12">
              <h2 className="text-3xl font-serif font-light">Send a Message</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-royal-black/40">Full Name</label>
                    <input type="text" className="w-full bg-soft-beige/30 border-b border-royal-black/10 py-3 focus:outline-none focus:border-rose-gold transition-colors text-sm tracking-widest" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-royal-black/40">Email Address</label>
                    <input type="email" className="w-full bg-soft-beige/30 border-b border-royal-black/10 py-3 focus:outline-none focus:border-rose-gold transition-colors text-sm tracking-widest" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-royal-black/40">Subject</label>
                  <select className="w-full bg-soft-beige/30 border-b border-royal-black/10 py-3 focus:outline-none focus:border-rose-gold transition-colors text-sm tracking-widest appearance-none">
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Custom Design</option>
                    <option>Repair Service</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-royal-black/40">Message</label>
                  <textarea rows={4} className="w-full bg-soft-beige/30 border-b border-royal-black/10 py-3 focus:outline-none focus:border-rose-gold transition-colors text-sm tracking-widest resize-none"></textarea>
                </div>
                <button className="btn-premium px-16 w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-light">Visit Our Boutique</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="text-rose-gold pt-1"><MapPin size={24} strokeWidth={1} /></div>
                    <div className="space-y-2">
                      <h3 className="text-xs uppercase tracking-widest font-bold">Flagship Store</h3>
                      <p className="text-sm text-royal-black/60 font-light leading-relaxed">
                        754 5th Avenue, New York, NY 10019<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="text-rose-gold pt-1"><Phone size={24} strokeWidth={1} /></div>
                    <div className="space-y-2">
                      <h3 className="text-xs uppercase tracking-widest font-bold">Call Us</h3>
                      <p className="text-sm text-royal-black/60 font-light leading-relaxed">
                        Concierge: +1 (800) AURELIA<br />
                        Support: +1 (212) 555-0198
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="text-rose-gold pt-1"><Mail size={24} strokeWidth={1} /></div>
                    <div className="space-y-2">
                      <h3 className="text-xs uppercase tracking-widest font-bold">Email Us</h3>
                      <p className="text-sm text-royal-black/60 font-light leading-relaxed">
                        concierge@aurelia.com<br />
                        press@aurelia.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-soft-beige p-8 space-y-6">
                <div className="flex items-center space-x-3 text-rose-gold">
                  <MessageSquare size={20} />
                  <h3 className="text-xs uppercase tracking-widest font-bold">Live Concierge</h3>
                </div>
                <p className="text-sm text-royal-black/60 font-light leading-relaxed">
                  Our experts are available for a live video consultation to help you find the perfect piece.
                </p>
                <button className="text-xs uppercase tracking-widest font-bold border-b border-royal-black pb-1 hover:text-rose-gold hover:border-rose-gold transition-all">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
