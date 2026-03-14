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
    <section className="py-20 bg-gradient-to-b from-cream-white to-champagne relative overflow-hidden border-t border-rose-gold/20">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-black mb-4">Featured Excellence</h2>
          <p className="text-deep-black/60 font-sans max-w-2xl mx-auto">Our most coveted pieces, beloved by connoisseurs of fine jewelry.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <BestsellerCard 
                product={{
                  ...product,
                  isBestSeller: true, // Force true for this section to match screenshot
                  originalPrice: Math.floor(product.price * 1.5),
                  reviews: Math.floor(Math.random() * 500) + 100
                }} 
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/best-sellers" 
            className="btn-premium"
          >
            View All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
