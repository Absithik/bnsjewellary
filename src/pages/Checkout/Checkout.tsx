import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Lock } from 'lucide-react';

const Checkout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-32 px-8 md:px-16 bg-gradient-to-b from-cream-white to-soft-pink/20 min-h-screen relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-rose-gold/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-rose-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.6em] text-rose-gold font-bold drop-shadow-sm">Secure Checkout</span>
          <h1 className="text-5xl font-serif font-bold text-deep-black drop-shadow-sm">Complete Your Order</h1>
          <div className="w-24 h-[1px] bg-rose-gold/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-16">
            <section className="space-y-10 bg-pure-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-rose-gold/20 shadow-pastel">
              <div className="flex items-center justify-between border-b border-rose-gold/10 pb-6">
                <h2 className="text-2xl font-serif font-bold tracking-wide text-deep-black">1. Shipping Information</h2>
                <Link to="/cart" className="text-[10px] uppercase tracking-widest font-bold text-deep-black/50 hover:text-rose-gold transition-colors flex items-center space-x-2">
                  <ChevronLeft size={12} />
                  <span>Back to Bag</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">First Name</label>
                  <input type="text" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">Last Name</label>
                  <input type="text" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" />
                </div>
                <div className="col-span-full space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">Address</label>
                  <input type="text" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">City</label>
                  <input type="text" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">Postal Code</label>
                  <input type="text" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" />
                </div>
              </div>
            </section>

            <section className="space-y-10 bg-pure-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-rose-gold/20 shadow-pastel">
              <h2 className="text-2xl font-serif font-bold tracking-wide text-deep-black border-b border-rose-gold/10 pb-6">2. Payment Method</h2>
              <div className="space-y-8">
                <div className="p-8 border border-rose-gold/30 rounded-2xl bg-rose-gold/5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 rounded-full border-4 border-rose-gold bg-pure-white" />
                    <span className="text-sm tracking-widest uppercase font-bold text-deep-black">Credit / Debit Card</span>
                  </div>
                  <div className="flex space-x-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-full space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">Card Number</label>
                    <input type="text" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" placeholder="•••• •••• •••• ••••" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">Expiry Date</label>
                    <input type="text" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" placeholder="MM / YY" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/60">CVV</label>
                    <input type="text" className="w-full bg-cream-white/50 border border-rose-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all text-sm tracking-widest text-deep-black placeholder-deep-black/30" placeholder="•••" />
                  </div>
                </div>
              </div>
            </section>

            <button className="btn-rose w-full flex items-center justify-center space-x-4 py-5 text-sm">
              <Lock size={16} />
              <span>Complete Purchase • $1,250.00</span>
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-pure-white/80 backdrop-blur-md p-10 rounded-3xl border border-rose-gold/20 shadow-pastel space-y-10 sticky top-48">
              <h3 className="text-3xl font-serif font-bold tracking-wide text-deep-black border-b border-rose-gold/10 pb-6">Order Summary</h3>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-24 h-28 overflow-hidden rounded-2xl border border-rose-gold/20 shrink-0 relative shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/10 to-transparent z-10" />
                    <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=90&w=200" alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col justify-center space-y-2">
                    <h4 className="text-lg font-serif font-bold text-deep-black">Eternal Gold Band</h4>
                    <p className="text-[10px] text-deep-black/60 uppercase tracking-widest font-bold">18k Yellow Gold • Size 7</p>
                    <p className="text-sm font-bold text-rose-gold">$1,250.00</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-rose-gold/10 space-y-6 text-sm font-sans tracking-widest">
                <div className="flex justify-between text-deep-black/80">
                  <span className="uppercase text-[10px] font-bold">Subtotal</span>
                  <span>$1,250.00</span>
                </div>
                <div className="flex justify-between text-deep-black/80">
                  <span className="uppercase text-[10px] font-bold">Shipping</span>
                  <span className="text-rose-gold font-bold">Complimentary</span>
                </div>
                <div className="pt-6 border-t border-rose-gold/10 flex justify-between items-center">
                  <span className="text-xl font-serif font-bold text-deep-black">Total</span>
                  <span className="text-2xl font-serif font-bold text-rose-gold drop-shadow-sm">$1,250.00</span>
                </div>
              </div>
              <div className="p-6 bg-cream-white/40 rounded-2xl space-y-4 border border-rose-gold/10">
                <p className="text-[10px] text-rose-gold uppercase tracking-widest font-bold flex items-center space-x-2">
                  <Lock size={12} />
                  <span>Secure Checkout</span>
                </p>
                <p className="text-[10px] text-deep-black/60 leading-relaxed font-sans">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
