import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    isNew?: boolean;
    isBestSeller?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group luxury-card p-4 relative"
    >
      {/* Badges */}
      <div className="absolute top-6 left-6 z-10 flex flex-col space-y-2">
        {product.isNew && (
          <span className="bg-rose-gold text-pure-white text-[8px] uppercase tracking-widest px-2 py-1 font-bold">New</span>
        )}
        {product.isBestSeller && (
          <span className="bg-royal-black text-pure-white text-[8px] uppercase tracking-widest px-2 py-1 font-bold">Best Seller</span>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-6 right-6 z-10 text-royal-black/30 hover:text-rose-gold transition-colors duration-300">
        <Heart size={20} strokeWidth={1.5} />
      </button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden mb-6 aspect-[4/5] bg-soft-beige">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </Link>

      {/* Product Info */}
      <div className="space-y-2 text-center">
        <div className="flex items-center justify-center space-x-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={10} 
              fill={i < Math.floor(product.rating) ? "#E6B7A9" : "none"} 
              stroke={i < Math.floor(product.rating) ? "#E6B7A9" : "#C0C0C0"} 
            />
          ))}
          <span className="text-[10px] text-royal-black/40 ml-1">({product.rating})</span>
        </div>
        <h3 className="text-sm font-serif tracking-wide group-hover:text-rose-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm font-bold tracking-widest">${product.price.toLocaleString()}</p>
      </div>

      {/* Add to Cart Overlay */}
      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button className="w-full btn-premium flex items-center justify-center space-x-2">
          <ShoppingBag size={14} />
          <span>Add to Bag</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
