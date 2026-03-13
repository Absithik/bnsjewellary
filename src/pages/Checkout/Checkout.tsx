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
      className="pt-48 pb-32 px-8 md:px-16 bg-luxury-white min-h-screen"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.6em] text-gold-primary font-bold">Secure Checkout</span>
          <h1 className="text-5xl font-serif font-light">Complete Your Order</h1>
          <div className="w-24 h-[1px] bg-gold-primary/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-16">
            <section className="space-y-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif font-light tracking-wide">1. Shipping Information</h2>
                <Link to="/cart" className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-royal-black transition-colors flex items-center space-x-2">
                  <ChevronLeft size={12} />
                  <span>Back to Bag</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-gold-primary transition-colors text-sm tracking-widest" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-gold-primary transition-colors text-sm tracking-widest" />
                </div>
                <div className="col-span-full space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Address</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-gold-primary transition-colors text-sm tracking-widest" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">City</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-gold-primary transition-colors text-sm tracking-widest" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Postal Code</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-gold-primary transition-colors text-sm tracking-widest" />
                </div>
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="text-2xl font-serif font-light tracking-wide">2. Payment Method</h2>
              <div className="space-y-8">
                <div className="p-8 border border-gold-primary/30 rounded-2xl bg-gold-primary/5 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 rounded-full border-4 border-gold-primary bg-white" />
                    <span className="text-sm tracking-widest uppercase font-bold">Credit / Debit Card</span>
                  </div>
                  <div className="flex space-x-4 opacity-50 grayscale scale-75">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-full space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Card Number</label>
                    <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-gold-primary transition-colors text-sm tracking-widest" placeholder="•••• •••• •••• ••••" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Expiry Date</label>
                    <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-gold-primary transition-colors text-sm tracking-widest" placeholder="MM / YY" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">CVV</label>
                    <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-gold-primary transition-colors text-sm tracking-widest" placeholder="•••" />
                  </div>
                </div>
              </div>
            </section>

            <button className="luxury-button luxury-button-filled w-full flex items-center justify-center space-x-4">
              <Lock size={16} />
              <span>Complete Purchase • $1,250.00</span>
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-12 luxury-card space-y-10 sticky top-48">
              <h3 className="text-3xl font-serif font-light tracking-wide">Order Summary</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-20 h-24 overflow-hidden rounded-xl bg-gray-50 shrink-0">
                    <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=90&w=200" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center space-y-1">
                    <h4 className="text-lg font-serif font-light">Eternal Gold Band</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">18k Yellow Gold • Size 7</p>
                    <p className="text-sm font-bold text-gold-primary">$1,250.00</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-black/5 space-y-6 text-sm font-light tracking-widest">
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase text-[10px] font-bold">Subtotal</span>
                  <span>$1,250.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase text-[10px] font-bold">Shipping</span>
                  <span className="text-gold-primary font-bold">Complimentary</span>
                </div>
                <div className="pt-6 border-t border-black/5 flex justify-between items-center">
                  <span className="text-xl font-serif font-light">Total</span>
                  <span className="text-2xl font-serif font-bold text-gold-primary">$1,250.00</span>
                </div>
              </div>
              <div className="p-6 bg-luxury-white rounded-2xl space-y-4">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold flex items-center space-x-2">
                  <Lock size={12} />
                  <span>Secure Checkout</span>
                </p>
                <p className="text-[10px] text-gray-400 leading-relaxed font-light">
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
