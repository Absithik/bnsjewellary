import React from 'react';
import { Link } from 'react-router-dom';

const pricePoints = [
  { label: 'Under', price: '₹999', link: '/shop?price=under-999' },
  { label: 'Under', price: '₹1499', link: '/shop?price=under-1499' },
  { label: 'Under', price: '₹1999', link: '/shop?price=under-1999' },
  { label: 'Under', price: '₹2999', link: '/shop?price=under-2999' },
];

const PricePointSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-sans text-center text-gray-900 mb-8">Shop by Price</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {pricePoints.map((item, index) => (
            <Link 
              key={index}
              to={item.link}
              className="group flex flex-col items-center justify-center py-8 px-4 bg-[#F9F9F9] rounded-2xl hover:bg-[#FCE4EC] transition-colors duration-300"
            >
              <span className="text-sm text-gray-500 mb-1 group-hover:text-[#D15C7A] transition-colors">{item.label}</span>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-[#8B2E40] transition-colors">{item.price}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricePointSection;
