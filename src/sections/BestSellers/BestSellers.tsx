import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/mockData';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <section className="py-24 bg-soft-beige overflow-hidden">
      <div className="w-full px-4 md:px-12">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-gold">Most Loved Pieces</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light">Our Best Sellers</h2>
          <div className="pt-4">
            <Link to="/best-sellers" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-royal-black pb-1 hover:text-rose-gold hover:border-rose-gold transition-all duration-300">
              View All Best Sellers
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
