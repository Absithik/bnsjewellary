import React from 'react';
import { motion } from 'framer-motion';
import BestsellerCard from '../../components/BestsellerCard/BestsellerCard';
import { products } from '../../data/mockData';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  // We need 4 products for the grid, let's just take the first 4 or filter by bestSeller
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);
  
  // If we don't have 4 bestsellers, just pad with other products
  if (bestSellers.length < 4) {
    const remaining = products.filter(p => !p.isBestSeller).slice(0, 4 - bestSellers.length);
    bestSellers.push(...remaining);
  }

  return (
    <section className="py-16 bg-[#FCF9F9] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-sans text-gray-900 mb-2">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {bestSellers.map((product) => (
            <BestsellerCard 
              key={product.id} 
              product={{
                ...product,
                isBestSeller: true, // Force true for this section to match screenshot
                originalPrice: Math.floor(product.price * 1.5),
                reviews: Math.floor(Math.random() * 500) + 100
              }} 
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/best-sellers" 
            className="px-8 py-2 border border-gray-400 rounded text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-300 bg-white"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
