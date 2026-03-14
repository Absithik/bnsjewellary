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
    <section className="py-16 bg-gradient-to-b from-cream-white to-soft-pink/20 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-4 md:px-12 relative z-10">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-12">
          {/* Ribbon Banner */}
          <div className="relative">
            <div className="bg-gradient-to-r from-luxury-gold to-rose-gold text-pure-white px-10 py-3 font-serif font-bold text-2xl tracking-widest rounded-l-lg relative z-10 shadow-pastel">
              NEW LAUNCH
              {/* Ribbon Tail */}
              <div className="absolute top-0 -right-4 h-full w-8 bg-rose-gold clip-path-ribbon"></div>
            </div>
          </div>

          {/* Offer Text */}
          <div className="text-deep-black text-xl font-sans tracking-wide">
            Upto <span className="font-bold text-2xl text-rose-gold drop-shadow-sm">15%</span> Off
          </div>

          {/* Explore Button */}
          <Link to="/new-arrivals" className="flex items-center space-x-2 bg-pure-white/80 backdrop-blur-md border border-rose-gold/50 text-rose-gold px-8 py-2.5 rounded-full hover:bg-rose-gold hover:text-pure-white transition-all duration-300 group shadow-soft hover:shadow-pastel">
            <span className="font-bold text-sm tracking-widest uppercase">Explore</span>
            <div className="bg-rose-gold text-pure-white rounded-full p-1 group-hover:bg-pure-white group-hover:text-rose-gold transition-colors">
              <ChevronRight size={14} strokeWidth={2} />
            </div>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-8 md:justify-center">
          {newItems.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-36 md:w-44 text-center space-y-4 cursor-pointer group"
            >
              <div className="aspect-square rounded-[2.5rem] overflow-hidden relative shadow-soft border border-rose-gold/20 group-hover:border-rose-gold/50 transition-colors duration-500 bg-pure-white">
                <div className="absolute inset-0 bg-deep-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                {/* New Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-pure-white/90 backdrop-blur-md border border-rose-gold/30 px-4 py-1.5 rounded-b-xl flex items-center space-x-1.5 shadow-pastel z-20">
                  <Sparkles size={10} className="text-rose-gold" />
                  <span className="text-[10px] font-bold text-rose-gold uppercase tracking-widest">New</span>
                </div>
              </div>
              <span className="text-sm font-serif tracking-widest text-deep-black group-hover:text-rose-gold transition-colors duration-300 block pt-2">{item.name}</span>
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
