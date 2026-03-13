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
      <div className="pt-48 pb-32 text-center container-custom">
        <div className="max-w-md mx-auto space-y-8">
          <div className="flex justify-center text-royal-black/10">
            <ShoppingBag size={120} strokeWidth={0.5} />
          </div>
          <h1 className="text-4xl font-serif font-light">Your Bag is Empty</h1>
          <p className="text-sm text-royal-black/60 font-light tracking-widest leading-relaxed">
            It looks like you haven't added anything to your bag yet. Discover our collections and find something special.
          </p>
          <Link to="/shop" className="btn-premium px-12">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-32"
    >
      <div className="container-custom">
        <h1 className="text-5xl font-serif font-light mb-16 text-center">Your Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-8">
            <div className="hidden md:grid grid-cols-12 pb-6 border-b border-royal-black/5 text-[10px] uppercase tracking-[0.2em] font-bold text-royal-black/40">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 pb-8 border-b border-royal-black/5">
                <div className="col-span-6 flex items-center space-x-6">
                  <div className="w-24 h-32 bg-soft-beige overflow-hidden rounded-sm shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-serif tracking-wide">{item.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-royal-black/40 font-bold">{item.material}</p>
                    <button className="text-[10px] uppercase tracking-widest text-rose-gold font-bold flex items-center space-x-1 pt-2 hover:opacity-70 transition-opacity">
                      <Trash2 size={12} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                <div className="col-span-2 text-center font-bold tracking-widest">
                  ${item.price.toLocaleString()}
                </div>

                <div className="col-span-2 flex justify-center">
                  <div className="flex items-center border border-royal-black/10 px-3 py-1 space-x-4">
                    <button className="text-royal-black/40 hover:text-royal-black"><Minus size={14} /></button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button className="text-royal-black/40 hover:text-royal-black"><Plus size={14} /></button>
                  </div>
                </div>

                <div className="col-span-2 text-right font-bold tracking-widest text-rose-gold">
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}

            <div className="pt-8">
              <Link to="/shop" className="text-xs uppercase tracking-widest font-bold flex items-center space-x-2 text-royal-black/60 hover:text-royal-black transition-colors">
                <ChevronRight size={14} className="rotate-180" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-soft-beige p-8 space-y-8 sticky top-32">
              <h2 className="text-2xl font-serif font-light tracking-wide">Order Summary</h2>
              
              <div className="space-y-4 pt-4 border-t border-royal-black/5">
                <div className="flex justify-between text-sm font-light tracking-widest">
                  <span className="text-royal-black/60">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-light tracking-widest">
                  <span className="text-royal-black/60">Shipping</span>
                  <span className="text-rose-gold font-bold uppercase text-[10px]">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm font-light tracking-widest">
                  <span className="text-royal-black/60">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="pt-6 border-t border-royal-black/5 flex justify-between items-center">
                <span className="text-xl font-serif font-light">Total</span>
                <span className="text-2xl font-bold tracking-widest text-rose-gold">${subtotal.toLocaleString()}</span>
              </div>

              <Link to="/checkout" className="w-full btn-rose py-4 flex items-center justify-center space-x-3">
                <span>Proceed to Checkout</span>
                <ChevronRight size={16} />
              </Link>

              <div className="pt-4 text-center">
                <p className="text-[10px] text-royal-black/40 uppercase tracking-[0.2em] font-medium">
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
