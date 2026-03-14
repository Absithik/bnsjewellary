import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: 'Wedding Collection',
    subtitle: 'Timeless gold pieces for your special day.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    path: '/collections/wedding',
    size: 'large',
    overlay: 'bg-gradient-to-t from-soft-pink/90 via-rose-gold/40 to-transparent'
  },
  {
    title: 'Everyday Elegance',
    subtitle: 'Everyday luxury for the modern woman.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
    path: '/collections/minimal',
    size: 'small',
    overlay: 'bg-gradient-to-t from-mint/90 via-mint/40 to-transparent'
  },
  {
    title: 'Statement Party',
    subtitle: 'Bold designs that command attention.',
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=800',
    path: '/collections/party',
    size: 'small',
    overlay: 'bg-gradient-to-t from-peach/90 via-peach/40 to-transparent'
  }
];

const Collections = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-champagne via-cream-white to-soft-pink/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-rose-gold">Curated for you</span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-black">The Collections</h2>
          <div className="w-20 h-[1px] bg-rose-gold/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large Collection */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[600px] rounded-2xl overflow-hidden md:col-span-2 border border-rose-gold/20 shadow-soft hover:shadow-pastel transition-all duration-500"
          >
            <img 
              src={collections[0].image} 
              alt={collections[0].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 ${collections[0].overlay} group-hover:opacity-90 transition-opacity duration-500`} />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-12 text-deep-black">
              <h3 className="text-5xl md:text-7xl font-serif mb-4 text-deep-black drop-shadow-sm">{collections[0].title}</h3>
              <p className="text-lg font-sans tracking-wide mb-8 opacity-90">{collections[0].subtitle}</p>
              <Link to={collections[0].path} className="btn-premium bg-pure-white/80 backdrop-blur-md text-deep-black hover:text-pure-white">
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
              className="group relative h-[450px] rounded-2xl overflow-hidden border border-rose-gold/20 shadow-soft hover:shadow-pastel transition-all duration-500"
            >
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 ${collection.overlay} group-hover:opacity-90 transition-opacity duration-500`} />
              <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8 text-deep-black">
                <h3 className="text-3xl md:text-4xl font-serif mb-3 text-deep-black drop-shadow-sm">{collection.title}</h3>
                <p className="text-sm font-sans tracking-wide mb-8 opacity-90">{collection.subtitle}</p>
                <Link to={collection.path} className="btn-premium bg-pure-white/80 backdrop-blur-md px-8 py-3 text-deep-black hover:text-pure-white">
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
