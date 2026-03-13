import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    image: string;
    path: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={category.path} className="group block text-center">
      <div className="relative mb-6 aspect-square overflow-hidden rounded-full border border-royal-black/5 p-2 transition-all duration-500 group-hover:border-rose-gold group-hover:shadow-soft">
        <div className="w-full h-full overflow-hidden rounded-full">
          <motion.img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <h3 className="text-xs uppercase tracking-[0.2em] font-bold group-hover:text-rose-gold transition-colors duration-300">
        {category.name}
      </h3>
    </Link>
  );
};

export default CategoryCard;
