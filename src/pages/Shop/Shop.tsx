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
      className="pt-32 pb-24"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-light">The Collection</h1>
          <p className="text-sm text-royal-black/60 tracking-[0.2em] font-light max-w-2xl mx-auto uppercase">
            Explore our curated selection of gold and silver masterpieces, designed for timeless elegance.
          </p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-royal-black/5 py-6 mb-12 space-y-6 md:space-y-0">
          <div className="flex items-center space-x-8 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto no-scrollbar">
            {['all', 'rings', 'necklaces', 'earrings', 'gold', 'silver'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap transition-colors duration-300 ${
                  activeCategory === cat ? 'text-rose-gold border-b border-rose-gold' : 'text-royal-black/40 hover:text-royal-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-bold text-royal-black/60 hover:text-royal-black">
              <Filter size={14} />
              <span>Filter</span>
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-bold text-royal-black/60 hover:text-royal-black">
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
          <button className="btn-premium px-16">
            Load More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
