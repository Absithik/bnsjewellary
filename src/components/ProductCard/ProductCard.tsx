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
      className="group bg-pure-white border border-rose-gold/20 rounded-2xl p-4 relative hover:shadow-pastel hover:border-rose-gold/50 transition-all duration-500"
    >
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

      {/* Badges */}
      <div className="absolute top-6 left-6 z-10 flex flex-col space-y-2">
        {product.isNew && (
          <span className="bg-rose-gold text-pure-white text-[10px] uppercase tracking-widest px-2 py-1 font-bold rounded-sm shadow-sm">New</span>
        )}
        {product.isBestSeller && (
          <span className="bg-mint text-deep-black border border-mint/30 text-[10px] uppercase tracking-widest px-2 py-1 font-bold rounded-sm shadow-sm">Best Seller</span>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-6 right-6 z-10 bg-pure-white/80 backdrop-blur-md rounded-full p-2 border border-rose-gold/30 text-rose-gold hover:bg-rose-gold hover:text-pure-white transition-all duration-300 shadow-sm">
        <Heart size={16} strokeWidth={1.5} />
      </button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden mb-6 aspect-[4/5] bg-cream-white rounded-xl relative z-0">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
      </Link>

      {/* Product Info */}
      <div className="space-y-2 text-center relative z-10">
        <div className="flex items-center justify-center space-x-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              fill={i < Math.floor(product.rating) ? "#D4AF37" : "none"} 
              stroke={i < Math.floor(product.rating) ? "#D4AF37" : "#D4AF37"} 
              className={i >= Math.floor(product.rating) ? "opacity-30" : ""}
            />
          ))}
          <span className="text-[10px] text-deep-black/60 ml-1">({product.rating})</span>
        </div>
        <h3 className="text-sm font-serif tracking-wide text-deep-black/90 group-hover:text-rose-gold transition-colors duration-300 truncate">
          {product.name}
        </h3>
        <p className="text-sm font-sans font-semibold text-rose-gold tracking-widest">₹{product.price.toLocaleString('en-IN')}</p>
      </div>

      {/* Add to Cart Overlay */}
      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative z-10">
        <button className="w-full bg-transparent border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-pure-white text-xs uppercase tracking-[0.15em] font-medium py-3 rounded transition-all duration-300 flex items-center justify-center space-x-2">
          <ShoppingBag size={14} />
          <span>Add to Bag</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
