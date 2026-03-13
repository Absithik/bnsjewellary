import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: 'Wedding Collection',
    subtitle: 'Timeless pieces for your special day.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    path: '/collections/wedding',
    description: 'Our wedding collection is designed to capture the magic of your most cherished moments. From classic bands to intricate necklaces, find the perfect piece to celebrate your love.'
  },
  {
    title: 'Minimalist Daily',
    subtitle: 'Everyday luxury for the modern woman.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=1200',
    path: '/collections/minimal',
    description: 'Sophisticated yet simple, our minimalist collection is crafted for the woman who appreciates understated elegance. Perfect for layering or wearing alone.'
  },
  {
    title: 'Statement Party',
    subtitle: 'Bold designs that command attention.',
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=1200',
    path: '/collections/party',
    description: 'Make an entrance with our statement collection. Bold shapes, vibrant stones, and exquisite craftsmanship come together to create pieces that are as unique as you are.'
  }
];

const Collections = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="container-custom">
        <div className="text-center mb-24 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-light">The Collections</h1>
          <p className="text-sm text-royal-black/60 tracking-[0.2em] font-light max-w-2xl mx-auto uppercase">
            Discover our curated worlds of gold and silver, each with its own unique story and aesthetic.
          </p>
        </div>

        <div className="space-y-32">
          {collections.map((collection, index) => (
            <motion.div 
              key={collection.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-3/5 relative overflow-hidden aspect-[16/9] group">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-royal-black/10 group-hover:bg-royal-black/20 transition-colors duration-500" />
              </div>
              <div className="lg:w-2/5 space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-gold">Chapter {index + 1}</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-light">{collection.title}</h2>
                </div>
                <p className="text-sm text-royal-black/60 font-light leading-relaxed tracking-wide">
                  {collection.description}
                </p>
                <Link to={collection.path} className="btn-premium px-12">
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Collections;
