import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const newItems = [
  { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=300' },
  { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=300' },
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=300' },
  { name: 'Pendants', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=300' },
  { name: 'Mens', image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300' },
  { name: 'Personalised', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=300' },
  { name: 'Sets', image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=300' },
  { name: 'Anklets', image: 'https://images.unsplash.com/photo-1611085507273-2985f2df5542?auto=format&fit=crop&q=80&w=300' },
];

const NewLaunch = () => {
  return (
    <section className="py-16 bg-[#FDF2F0] overflow-hidden">
      <div className="w-full px-4 md:px-12">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
          {/* Ribbon Banner */}
          <div className="relative">
            <div className="bg-[#8B2E40] text-pure-white px-10 py-3 font-bold text-2xl tracking-tighter rounded-l-lg relative z-10">
              NEW LAUNCH
              {/* Ribbon Tail */}
              <div className="absolute top-0 -right-4 h-full w-8 bg-[#8B2E40] clip-path-ribbon"></div>
            </div>
          </div>

          {/* Offer Text */}
          <div className="text-royal-black text-xl">
            Upto <span className="font-bold text-2xl">15%</span> Off
          </div>

          {/* Explore Button */}
          <Link to="/new-arrivals" className="flex items-center space-x-2 bg-[#C68B8B] text-pure-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all group">
            <span className="font-bold text-sm tracking-widest">Explore</span>
            <div className="bg-pure-white text-[#C68B8B] rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <ChevronRight size={14} />
            </div>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-4 md:justify-center">
          {newItems.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-36 md:w-44 text-center space-y-4 cursor-pointer group"
            >
              <div className="aspect-square rounded-[2.5rem] overflow-hidden relative shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* New Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#E6B8B8]/90 backdrop-blur-sm px-4 py-1 rounded-b-xl flex items-center space-x-1">
                  <Sparkles size={10} className="text-pure-white" />
                  <span className="text-[10px] font-bold text-pure-white uppercase tracking-widest">New</span>
                </div>
              </div>
              <span className="text-sm font-bold tracking-tight text-royal-black block pt-2">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .clip-path-ribbon {
          clip-path: polygon(0 0, 100% 0, 70% 50%, 100% 100%, 0 100%);
        }
      `}} />
    </section>
  );
};

export default NewLaunch;
