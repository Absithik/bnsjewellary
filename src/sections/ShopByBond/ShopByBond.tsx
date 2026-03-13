import React from 'react';
import { motion } from 'framer-motion';

const bonds = [
  { name: 'Wife', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
  { name: 'Husband', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mother', image: 'https://images.unsplash.com/photo-1581404917879-53e19259f5b8?auto=format&fit=crop&q=80&w=400' },
  { name: 'Brothers', image: 'https://images.unsplash.com/photo-1536640712-4d4c36ef0e2c?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sister', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400' },
  { name: 'Friends', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=400' },
];

const ShopByBond = () => {
  return (
    <section className="py-16 bg-pure-white overflow-hidden">
      <div className="w-full px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-10 text-royal-black">Shop by Bond</h2>
        
        <div className="flex space-x-4 md:space-x-6 overflow-x-auto no-scrollbar pb-4 md:justify-center">
          {bonds.map((bond, index) => (
            <motion.div 
              key={bond.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-40 md:w-56 bg-[#EBEBEB] rounded-2xl p-2 cursor-pointer group shadow-sm hover:shadow-md transition-all border border-black/5"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-[#DCD3CB]">
                <img 
                  src={bond.image} 
                  alt={bond.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center py-3">
                <span className="text-lg md:text-xl font-sans text-royal-black">{bond.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBond;
