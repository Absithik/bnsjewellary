import React from 'react';
import { motion } from 'framer-motion';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { categories } from '../../data/mockData';

const Categories = () => {
  return (
    <section className="py-24 bg-pure-white overflow-hidden">
      <div className="w-full px-4 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-gold">Explore our world</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light">Shop by Category</h2>
          <div className="w-20 h-[1px] bg-rose-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
