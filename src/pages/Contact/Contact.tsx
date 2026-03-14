import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-rose-gold drop-shadow-sm">Concierge Service</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-deep-black drop-shadow-sm">How Can We Assist?</h1>
            <p className="text-sm text-deep-black/70 tracking-[0.2em] font-sans max-w-2xl mx-auto uppercase">
              Our dedicated concierge team is here to provide personalized assistance for all your jewellery needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <div className="space-y-12 bg-pure-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-rose-gold/20 shadow-soft">
              <h2 className="text-3xl font-serif font-bold text-deep-black">Send a Message</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">Full Name</label>
                    <input type="text" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">Email Address</label>
                    <input type="email" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">Subject</label>
                  <select className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black appearance-none">
                    <option className="bg-pure-white text-deep-black">General Inquiry</option>
                    <option className="bg-pure-white text-deep-black">Order Status</option>
                    <option className="bg-pure-white text-deep-black">Custom Design</option>
                    <option className="bg-pure-white text-deep-black">Repair Service</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">Message</label>
                  <textarea rows={4} className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black resize-none placeholder-deep-black/30" placeholder="How can we help you?"></textarea>
                </div>
                <button className="btn-rose px-16 w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-deep-black">Visit Our Boutique</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6 bg-pure-white/60 p-6 rounded-2xl border border-rose-gold/10 hover:border-rose-gold/30 transition-colors shadow-sm">
                    <div className="text-rose-gold pt-1"><MapPin size={24} strokeWidth={1.5} /></div>
                    <div className="space-y-2">
                      <h3 className="text-xs uppercase tracking-widest font-bold text-deep-black">Flagship Store</h3>
                      <p className="text-sm text-deep-black/70 font-sans leading-relaxed">
                        754 5th Avenue, New York, NY 10019<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 bg-pure-white/60 p-6 rounded-2xl border border-rose-gold/10 hover:border-rose-gold/30 transition-colors shadow-sm">
                    <div className="text-rose-gold pt-1"><Phone size={24} strokeWidth={1.5} /></div>
                    <div className="space-y-2">
                      <h3 className="text-xs uppercase tracking-widest font-bold text-deep-black">Call Us</h3>
                      <p className="text-sm text-deep-black/70 font-sans leading-relaxed">
                        Concierge: +1 (800) AURELIA<br />
                        Support: +1 (212) 555-0198
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 bg-pure-white/60 p-6 rounded-2xl border border-rose-gold/10 hover:border-rose-gold/30 transition-colors shadow-sm">
                    <div className="text-rose-gold pt-1"><Mail size={24} strokeWidth={1.5} /></div>
                    <div className="space-y-2">
                      <h3 className="text-xs uppercase tracking-widest font-bold text-deep-black">Email Us</h3>
                      <p className="text-sm text-deep-black/70 font-sans leading-relaxed">
                        concierge@aurelia.com<br />
                        press@aurelia.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-rose-gold/10 backdrop-blur-sm p-8 space-y-6 rounded-3xl border border-rose-gold/30 shadow-pastel">
                <div className="flex items-center space-x-3 text-rose-gold">
                  <MessageSquare size={20} />
                  <h3 className="text-xs uppercase tracking-widest font-bold">Live Concierge</h3>
                </div>
                <p className="text-sm text-deep-black/80 font-sans leading-relaxed">
                  Our experts are available for a live video consultation to help you find the perfect piece.
                </p>
                <button className="text-xs uppercase tracking-widest font-bold border-b border-rose-gold pb-1 text-rose-gold hover:text-deep-black hover:border-deep-black transition-all">
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
