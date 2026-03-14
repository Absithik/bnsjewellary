import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pricePoints = [
  { label: 'Under', price: '₹999', link: '/shop?price=under-999' },
  { label: 'Under', price: '₹1499', link: '/shop?price=under-1499' },
  { label: 'Under', price: '₹1999', link: '/shop?price=under-1999' },
  { label: 'Under', price: '₹2999', link: '/shop?price=under-2999' },
];

const PricePointSection = () => {
  return (
    <section className="py-8 bg-cream-white relative overflow-hidden border-y border-rose-gold/10">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="text-center md:text-right shrink-0">
            <h2 className="text-lg font-serif text-deep-black tracking-wide">Shop by Price</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {pricePoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link 
                  to={item.link}
                  className="group flex items-center space-x-2 py-2 px-5 bg-pure-white/80 backdrop-blur-md border border-rose-gold/20 rounded-full hover:bg-rose-gold/5 hover:border-rose-gold/50 transition-all duration-300 hover:shadow-pastel"
                >
                  <span className="text-[10px] text-deep-black/50 uppercase tracking-widest font-medium group-hover:text-rose-gold/80 transition-colors">{item.label}</span>
                  <span className="text-sm font-sans font-semibold text-deep-black group-hover:text-rose-gold transition-colors">{item.price}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePointSection;
