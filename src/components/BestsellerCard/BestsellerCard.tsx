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
    <div className="group flex flex-col bg-white overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[#F9F9F9] overflow-hidden">
        {/* Bestseller Ribbon */}
        {product.isBestSeller && (
          <div className="absolute top-0 left-0 z-10">
            <div 
              className="bg-[#F17B9A] text-white text-[11px] font-medium pl-3 pr-5 py-1.5 shadow-sm relative z-10"
              style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 8px) 50%, 100% 100%, 0 100%)' }}
            >
              Bestseller
            </div>
            {/* Fold effect */}
            <div className="absolute top-full left-0 w-0 h-0 border-t-[6px] border-t-[#D15C7A] border-l-[6px] border-l-transparent z-0"></div>
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow-sm text-[#F17B9A] hover:bg-gray-50 transition-colors duration-300">
          <Heart size={18} strokeWidth={1.5} />
        </button>

        {/* Product Image */}
        <Link to={`/product/${product.id}`} className="block w-full h-full p-4 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 z-10 bg-white px-2 py-1 rounded text-[10px] font-medium flex items-center space-x-1 shadow-sm">
          <span className="text-gray-700">{product.rating.toFixed(1)}</span>
          <Star size={10} fill="#F59E0B" stroke="#F59E0B" />
          <span className="text-gray-400 mx-0.5">|</span>
          <span className="text-gray-600">{product.reviews || Math.floor(Math.random() * 1000) + 100}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Price */}
        <div className="flex items-center space-x-2 mb-1.5">
          <span className="text-[15px] font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
          {(product.originalPrice || product.price * 1.5) && (
            <span className="text-xs text-gray-400 line-through">
              ₹{(product.originalPrice || Math.floor(product.price * 1.5)).toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-[13px] text-gray-500 font-normal truncate mb-2 hover:text-gray-900 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Offer */}
        <div className="text-[11px] font-bold text-[#28519E] mb-4">
          {product.offer || 'EXTRA 15% OFF with coupon'}
        </div>

        {/* Add to Cart Button */}
        <div className="mt-auto">
          <button className="w-full bg-[#FCE4EC] hover:bg-[#F8BBD0] text-gray-900 text-[13px] font-medium py-2.5 rounded transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestsellerCard;
