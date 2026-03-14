import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../../data/mockData';
import { Heart, ShoppingBag, Star, Truck, ShieldCheck, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id)) || products[0];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-gradient-to-b from-cream-white to-soft-pink/20 min-h-screen relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-rose-gold/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-rose-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-deep-black/50 mb-12 font-bold">
          <Link to="/" className="hover:text-rose-gold transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-rose-gold transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-rose-gold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-pure-white rounded-2xl border border-rose-gold/20 shadow-soft relative group">
              <div className="absolute inset-0 bg-deep-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-pure-white overflow-hidden rounded-xl cursor-pointer hover:border-rose-gold/50 border border-rose-gold/20 transition-all duration-300 shadow-sm relative group">
                  <div className="absolute inset-0 bg-deep-black/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8 bg-pure-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-rose-gold/20 shadow-pastel">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-luxury-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-xs text-deep-black/60 tracking-widest font-bold">({product.rating} / 5.0)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-black drop-shadow-sm">{product.name}</h1>
              <p className="text-3xl font-sans font-bold tracking-wide text-rose-gold">${product.price.toLocaleString()}</p>
            </div>

            <p className="text-sm text-deep-black/80 font-sans leading-relaxed tracking-wide">
              {product.description}
            </p>

            {/* Selection */}
            <div className="space-y-6 pt-6 border-t border-rose-gold/20">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-rose-gold">Material: {product.material}</span>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 border border-rose-gold/30 shadow-sm hover:scale-110 transition-transform"></button>
                  <button className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 border-2 border-rose-gold shadow-pastel"></button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center border border-rose-gold/30 px-6 py-3 space-x-8 rounded-full bg-cream-white/50 w-full sm:w-auto justify-between">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl font-light text-rose-gold hover:text-deep-black transition-colors">-</button>
                  <span className="text-sm font-bold w-4 text-center text-deep-black">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-xl font-light text-rose-gold hover:text-deep-black transition-colors">+</button>
                </div>
                <button className="flex-grow btn-rose w-full sm:w-auto py-4 flex items-center justify-center space-x-3">
                  <ShoppingBag size={18} />
                  <span>Add to Bag</span>
                </button>
                <button className="p-4 border border-rose-gold/30 rounded-full hover:bg-rose-gold hover:text-pure-white text-rose-gold transition-all duration-300 shadow-sm hover:shadow-pastel">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-rose-gold/20">
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-deep-black/70">
                <Truck size={18} className="text-rose-gold" strokeWidth={1.5} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-deep-black/70">
                <ShieldCheck size={18} className="text-rose-gold" strokeWidth={1.5} />
                <span>Certified Purity</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-deep-black/70">
                <RotateCcw size={18} className="text-rose-gold" strokeWidth={1.5} />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-rose-gold/20 bg-pure-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
          <div className="flex flex-wrap justify-center gap-4 md:space-x-12 -mt-[1px] mb-8">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 rounded-full ${
                  activeTab === tab ? 'bg-rose-gold text-pure-white shadow-pastel' : 'border border-rose-gold/20 text-deep-black/60 hover:text-rose-gold hover:border-rose-gold/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="py-8 max-w-3xl mx-auto text-center">
            {activeTab === 'description' && (
              <p className="text-sm text-deep-black/80 font-sans leading-relaxed tracking-wide">
                Indulge in the ultimate luxury with the {product.name}. This exquisite piece is meticulously crafted to elevate your style and celebrate your unique elegance. Whether it's a gift for a loved one or a treat for yourself, this jewellery is designed to be cherished for a lifetime.
              </p>
            )}
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-2 gap-8 text-left max-w-md mx-auto bg-cream-white/40 p-8 rounded-2xl border border-rose-gold/10">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-rose-gold">Material</p>
                  <p className="text-sm font-sans text-deep-black">{product.material}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-rose-gold">Weight</p>
                  <p className="text-sm font-sans text-deep-black">4.5 Grams</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-rose-gold">Purity</p>
                  <p className="text-sm font-sans text-deep-black">18k Gold / 925 Silver</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-rose-gold">Certification</p>
                  <p className="text-sm font-sans text-deep-black">BIS Hallmarked</p>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-8 bg-cream-white/40 p-8 rounded-2xl border border-rose-gold/10">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex text-luxury-gold drop-shadow-sm">
                    {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-sans text-deep-black/80 tracking-wide">Based on 128 reviews</p>
                </div>
                <button className="btn-rose">Write a Review</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
