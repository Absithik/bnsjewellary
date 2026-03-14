import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BestsellerCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews?: number;
    isBestSeller?: boolean;
    offer?: string;
  };
}

const BestsellerCard: React.FC<BestsellerCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col bg-pure-white border border-rose-gold/20 rounded-2xl overflow-hidden hover:shadow-pastel hover:border-luxury-gold/50 transition-all duration-500 h-full relative">
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-cream-white/50 overflow-hidden rounded-t-2xl">
        {/* Bestseller Ribbon */}
        {product.isBestSeller && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-gradient-to-r from-luxury-gold to-rose-gold text-pure-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-sm shadow-sm">
              Bestseller
            </div>
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 z-10 bg-pure-white/80 backdrop-blur-md rounded-full p-2 border border-rose-gold/30 text-rose-gold hover:bg-rose-gold hover:text-pure-white transition-all duration-300">
          <Heart size={16} strokeWidth={1.5} />
        </button>

        {/* Product Image */}
        <Link to={`/product/${product.id}`} className="block w-full h-full p-6 flex items-center justify-center relative z-0">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 z-10 bg-pure-white/90 backdrop-blur-md border border-rose-gold/20 px-2.5 py-1 rounded text-[10px] font-medium flex items-center space-x-1 shadow-sm">
          <span className="text-deep-black">{product.rating.toFixed(1)}</span>
          <Star size={10} fill="#D4AF37" stroke="#D4AF37" />
          <span className="text-deep-black/40 mx-0.5">|</span>
          <span className="text-deep-black/70">{product.reviews || Math.floor(Math.random() * 1000) + 100}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow relative z-10">
        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm text-deep-black/90 font-serif tracking-wide truncate mb-3 group-hover:text-luxury-gold transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-lg font-sans font-semibold text-luxury-gold">₹{product.price.toLocaleString('en-IN')}</span>
          {(product.originalPrice || product.price * 1.5) && (
            <span className="text-xs font-sans text-deep-black/40 line-through">
              ₹{(product.originalPrice || Math.floor(product.price * 1.5)).toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Offer */}
        <div className="text-[11px] font-sans font-medium text-rose-gold mb-5 tracking-wide uppercase">
          {product.offer || 'Complimentary Shipping'}
        </div>

        {/* Add to Cart Button */}
        <div className="mt-auto">
          <button className="w-full bg-transparent border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-pure-white text-xs uppercase tracking-[0.15em] font-medium py-3 rounded transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestsellerCard;
