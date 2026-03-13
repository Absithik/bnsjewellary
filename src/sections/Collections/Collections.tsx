import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: 'Wedding Collection',
    subtitle: 'Timeless pieces for your special day.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    path: '/collections/wedding',
    size: 'large'
  },
  {
    title: 'Minimalist Daily',
    subtitle: 'Everyday luxury for the modern woman.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
    path: '/collections/minimal',
    size: 'small'
  },
  {
    title: 'Statement Party',
    subtitle: 'Bold designs that command attention.',
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=800',
    path: '/collections/party',
    size: 'small'
  }
];

const Collections = () => {
  return (
    <section className="py-24 bg-pure-white overflow-hidden">
      <div className="w-full px-4 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-gold">Curated for you</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light">The Collections</h2>
          <div className="w-20 h-[1px] bg-rose-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large Collection */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[600px] overflow-hidden md:col-span-2"
          >
            <img 
              src={collections[0].image} 
              alt={collections[0].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-royal-black/20 group-hover:bg-royal-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-pure-white">
              <h3 className="text-5xl md:text-7xl font-serif mb-4">{collections[0].title}</h3>
              <p className="text-lg font-light tracking-widest mb-8 opacity-90">{collections[0].subtitle}</p>
              <Link to={collections[0].path} className="btn-premium border-pure-white text-pure-white hover:bg-pure-white hover:text-royal-black">
                Explore Collection
              </Link>
            </div>
          </motion.div>

          {/* Small Collections */}
          {collections.slice(1).map((collection, index) => (
            <motion.div 
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[400px] overflow-hidden"
            >
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-royal-black/20 group-hover:bg-royal-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-pure-white">
                <h3 className="text-3xl md:text-4xl font-serif mb-2">{collection.title}</h3>
                <p className="text-sm font-light tracking-widest mb-6 opacity-90">{collection.subtitle}</p>
                <Link to={collection.path} className="btn-premium border-pure-white text-pure-white hover:bg-pure-white hover:text-royal-black px-8 py-2">
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
