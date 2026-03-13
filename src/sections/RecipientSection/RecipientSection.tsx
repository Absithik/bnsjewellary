import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const RecipientSection = () => {
  return (
    <section className="py-20 bg-pure-white">
      <div className="container-custom">
        <h2 className="text-3xl font-serif text-center mb-12">Shop by Recipient</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Him */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-[300px] rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#8B2E40] to-[#FCE4EC] flex items-center"
          >
            <div className="absolute left-12 z-10 space-y-4">
              <div className="bg-[#F8E8D8] px-12 py-4 rounded-2xl shadow-inner">
                <h3 className="text-4xl font-serif text-[#8B2E40]">Him</h3>
              </div>
              <Link to="/shop/him" className="flex items-center space-x-2 text-pure-white font-bold text-sm tracking-widest pl-4 hover:underline">
                <span>Shop Now</span>
                <div className="bg-pure-white text-[#8B2E40] rounded-full p-1">
                  <ChevronRight size={12} />
                </div>
              </Link>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" 
              alt="Him" 
              className="absolute right-0 h-full w-1/2 object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Her */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-[300px] rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#FCE4EC] to-[#8B2E40] flex items-center"
          >
            <div className="absolute right-12 z-10 space-y-4 text-right">
              <div className="bg-[#F8E8D8] px-12 py-4 rounded-2xl shadow-inner">
                <h3 className="text-4xl font-serif text-[#8B2E40]">Her</h3>
              </div>
              <Link to="/shop/her" className="flex items-center justify-end space-x-2 text-pure-white font-bold text-sm tracking-widest pr-4 hover:underline">
                <span>Shop Now</span>
                <div className="bg-pure-white text-[#8B2E40] rounded-full p-1">
                  <ChevronRight size={12} />
                </div>
              </Link>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" 
              alt="Her" 
              className="absolute left-0 h-full w-1/2 object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecipientSection;
