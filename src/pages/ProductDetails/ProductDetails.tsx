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
      className="pt-32 pb-24"
    >
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-royal-black/40 mb-12">
          <Link to="/" className="hover:text-royal-black">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-royal-black">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-royal-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-soft-beige rounded-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-soft-beige overflow-hidden rounded-sm cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={product.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-rose-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-xs text-royal-black/40 tracking-widest">({product.rating} / 5.0)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-light">{product.name}</h1>
              <p className="text-2xl font-bold tracking-widest text-rose-gold">${product.price.toLocaleString()}</p>
            </div>

            <p className="text-sm text-royal-black/60 font-light leading-relaxed tracking-wide">
              {product.description}
            </p>

            {/* Selection */}
            <div className="space-y-6 pt-6 border-t border-royal-black/5">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Material: {product.material}</span>
                <div className="flex space-x-3">
                  <button className="w-8 h-8 rounded-full bg-luxury-silver border-2 border-pure-white shadow-soft ring-1 ring-royal-black/10"></button>
                  <button className="w-8 h-8 rounded-full bg-rose-gold border-2 border-pure-white shadow-soft"></button>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-royal-black/10 px-4 py-2 space-x-6">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-lg font-light">-</button>
                  <span className="text-sm font-bold w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-lg font-light">+</button>
                </div>
                <button className="flex-grow btn-rose py-4 flex items-center justify-center space-x-3">
                  <ShoppingBag size={18} />
                  <span>Add to Bag</span>
                </button>
                <button className="p-4 border border-royal-black/10 hover:bg-soft-beige transition-colors">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-royal-black/60">
                <Truck size={18} strokeWidth={1} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-royal-black/60">
                <ShieldCheck size={18} strokeWidth={1} />
                <span>Certified Purity</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-royal-black/60">
                <RotateCcw size={18} strokeWidth={1} />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-royal-black/5">
          <div className="flex justify-center space-x-12 -mt-[1px]">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-6 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 border-t-2 ${
                  activeTab === tab ? 'border-rose-gold text-rose-gold' : 'border-transparent text-royal-black/40 hover:text-royal-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="py-12 max-w-3xl mx-auto text-center">
            {activeTab === 'description' && (
              <p className="text-sm text-royal-black/60 font-light leading-relaxed tracking-wide">
                Indulge in the ultimate luxury with the {product.name}. This exquisite piece is meticulously crafted to elevate your style and celebrate your unique elegance. Whether it's a gift for a loved one or a treat for yourself, this jewellery is designed to be cherished for a lifetime.
              </p>
            )}
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-2 gap-8 text-left max-w-md mx-auto">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-royal-black/40">Material</p>
                  <p className="text-sm font-light">{product.material}</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-royal-black/40">Weight</p>
                  <p className="text-sm font-light">4.5 Grams</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-royal-black/40">Purity</p>
                  <p className="text-sm font-light">18k Gold / 925 Silver</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-royal-black/40">Certification</p>
                  <p className="text-sm font-light">BIS Hallmarked</p>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-8">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex text-rose-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-light">Based on 128 reviews</p>
                </div>
                <button className="btn-premium">Write a Review</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
