import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ChevronRight, Minus, Plus } from 'lucide-react';

const Cart = () => {
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: 'Eternal Gold Band',
      price: 1250,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=200',
      quantity: 1,
      material: '18k Gold'
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-48 pb-32 bg-gradient-to-b from-cream-white to-soft-pink/20 min-h-screen relative"
      >
        <div className="absolute inset-0 bg-rose-gold/5 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-md mx-auto space-y-8 bg-pure-white/80 backdrop-blur-md p-12 rounded-3xl border border-rose-gold/20 shadow-soft">
            <div className="flex justify-center text-rose-gold/50">
              <ShoppingBag size={120} strokeWidth={0.5} />
            </div>
            <h1 className="text-4xl font-serif font-bold text-deep-black drop-shadow-sm">Your Bag is Empty</h1>
            <p className="text-sm text-deep-black/70 font-sans tracking-widest leading-relaxed">
              It looks like you haven't added anything to your bag yet. Discover our collections and find something special.
            </p>
            <Link to="/shop" className="btn-rose px-12 inline-block">
              Start Shopping
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-32 bg-gradient-to-b from-cream-white to-soft-pink/20 min-h-screen relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-rose-gold/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-rose-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <h1 className="text-5xl font-serif font-bold mb-16 text-center text-deep-black drop-shadow-sm tracking-wide">Your Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-8">
            <div className="hidden md:grid grid-cols-12 pb-6 border-b border-rose-gold/20 text-[11px] uppercase tracking-[0.2em] font-bold text-deep-black/60">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 pb-8 border-b border-rose-gold/10">
                <div className="col-span-6 flex items-center space-x-6">
                  <div className="w-24 h-32 bg-pure-white overflow-hidden rounded-xl shrink-0 border border-rose-gold/20 shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-deep-black tracking-wide">{item.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-rose-gold font-bold">{item.material}</p>
                    <button className="text-[10px] uppercase tracking-widest text-red-500/80 font-bold flex items-center space-x-1 pt-2 hover:text-red-500 transition-colors">
                      <Trash2 size={12} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                <div className="col-span-2 text-center font-bold tracking-widest text-deep-black">
                  ${item.price.toLocaleString()}
                </div>

                <div className="col-span-2 flex justify-center">
                  <div className="flex items-center border border-rose-gold/30 px-3 py-1 space-x-4 rounded-full bg-cream-white/50">
                    <button className="text-rose-gold hover:text-deep-black transition-colors"><Minus size={14} /></button>
                    <span className="text-sm font-bold w-4 text-center text-deep-black">{item.quantity}</span>
                    <button className="text-rose-gold hover:text-deep-black transition-colors"><Plus size={14} /></button>
                  </div>
                </div>

                <div className="col-span-2 text-right font-bold tracking-widest text-rose-gold">
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}

            <div className="pt-8">
              <Link to="/shop" className="text-xs uppercase tracking-widest font-bold flex items-center space-x-2 text-deep-black/60 hover:text-rose-gold transition-colors">
                <ChevronRight size={14} className="rotate-180" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-pure-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-rose-gold/20 shadow-pastel sticky top-32">
              <h2 className="text-2xl font-serif font-bold tracking-wide text-deep-black mb-8">Order Summary</h2>
              
              <div className="space-y-4 pt-4 border-t border-rose-gold/10">
                <div className="flex justify-between text-sm font-sans tracking-widest text-deep-black">
                  <span className="text-deep-black/70">Subtotal</span>
                  <span className="font-bold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-sans tracking-widest text-deep-black">
                  <span className="text-deep-black/70">Shipping</span>
                  <span className="text-rose-gold font-bold uppercase text-[10px]">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm font-sans tracking-widest text-deep-black">
                  <span className="text-deep-black/70">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-rose-gold/20 flex justify-between items-center">
                <span className="text-xl font-serif font-bold text-deep-black">Total</span>
                <span className="text-3xl font-bold tracking-widest text-rose-gold drop-shadow-sm">${subtotal.toLocaleString()}</span>
              </div>

              <Link to="/checkout" className="w-full btn-rose py-4 flex items-center justify-center space-x-3 mt-8">
                <span>Proceed to Checkout</span>
                <ChevronRight size={16} />
              </Link>

              <div className="pt-6 text-center">
                <p className="text-[10px] text-deep-black/50 uppercase tracking-[0.2em] font-bold">
                  Secure Checkout Guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
