import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/mockData';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory || p.material.toLowerCase() === activeCategory);

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
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-deep-black drop-shadow-sm tracking-wide">The Collection</h1>
          <p className="text-sm text-deep-black/70 tracking-[0.2em] font-sans max-w-2xl mx-auto uppercase">
            Explore our curated selection of gold and silver masterpieces, designed for timeless elegance.
          </p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-rose-gold/20 py-6 mb-12 space-y-6 md:space-y-0 bg-pure-white/60 backdrop-blur-sm px-6 rounded-2xl shadow-soft">
          <div className="flex items-center space-x-8 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto no-scrollbar">
            {['all', 'rings', 'necklaces', 'earrings', 'gold', 'silver'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold whitespace-nowrap transition-all duration-300 pb-2 ${
                  activeCategory === cat ? 'text-rose-gold border-b-2 border-rose-gold drop-shadow-sm' : 'text-deep-black/50 hover:text-rose-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
            <button className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-bold text-deep-black/70 hover:text-rose-gold transition-colors">
              <Filter size={14} />
              <span>Filter</span>
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-bold text-deep-black/70 hover:text-rose-gold transition-colors">
                <span>Sort By: {sortBy}</span>
                <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 text-center">
          <button className="btn-rose px-16">
            Load More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
