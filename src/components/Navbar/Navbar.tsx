import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X, MapPin, ChevronDown, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('silver');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavLinks = [
    { name: 'Shop by Category', path: '/shop' },
    { name: 'Gifts for Him', path: '/shop/him' },
    { name: 'Gifts for Her', path: '/shop/her' },
    { name: 'AURELIA Gift Card', path: '/gift-card' },
    { name: 'Gift Store', path: '/gift-store' },
    { name: 'Exclusive Collections', path: '/collections' },
    { name: 'More at AURELIA', path: '/more' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-cream-white/95 backdrop-blur-md shadow-pastel border-b border-rose-gold/20' : 'bg-transparent border-b border-deep-black/10'}`}>
      {/* Top Header */}
      <div className="container-custom py-4 flex items-center justify-between gap-8">
        <Link to="/" className="text-3xl font-serif font-bold tracking-[0.2em] text-deep-black shrink-0 drop-shadow-sm">
          AURELIA
        </Link>

        {/* Location Selector */}
        <div className="hidden md:flex items-center space-x-2 px-3 py-1 border border-deep-black/20 rounded-sm shrink-0 cursor-pointer hover:bg-rose-gold/10 transition-colors">
          <div className="text-luxury-gold"><MapPin size={16} /></div>
          <div className="text-[10px] leading-tight text-deep-black">
            <p className="font-bold tracking-wider">Where to Deliver?</p>
            <p className="text-deep-black/60 flex items-center">Update Delivery Pincode <ChevronDown size={10} className="ml-1" /></p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-2xl relative hidden md:block group">
          <input 
            type="text" 
            placeholder="Search 'Gifts For Her'"
            className="w-full bg-pure-white border border-rose-gold/30 rounded-full py-2.5 px-6 pr-12 text-sm text-deep-black focus:outline-none focus:border-rose-gold focus:bg-pure-white transition-all duration-300 placeholder-deep-black/40 shadow-sm"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-deep-black/40 group-focus-within:text-luxury-gold transition-colors" size={18} />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 shrink-0">
          <div className="hidden lg:flex flex-col items-center cursor-pointer group">
            <Store size={20} strokeWidth={1.5} className="text-deep-black group-hover:text-luxury-gold transition-colors duration-300" />
            <span className="text-[9px] uppercase tracking-widest mt-1 font-bold text-deep-black/60 group-hover:text-luxury-gold/80 transition-colors">Stores</span>
          </div>
          <Link to="/account" className="flex flex-col items-center group">
            <User size={20} strokeWidth={1.5} className="text-deep-black group-hover:text-luxury-gold transition-colors duration-300" />
            <span className="text-[9px] uppercase tracking-widest mt-1 font-bold text-deep-black/60 group-hover:text-luxury-gold/80 transition-colors">Account</span>
          </Link>
          <Link to="/wishlist" className="flex flex-col items-center group">
            <Heart size={20} strokeWidth={1.5} className="text-deep-black group-hover:text-luxury-gold transition-colors duration-300" />
            <span className="text-[9px] uppercase tracking-widest mt-1 font-bold text-deep-black/60 group-hover:text-luxury-gold/80 transition-colors">Wishlist</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center group relative">
            <ShoppingBag size={20} strokeWidth={1.5} className="text-deep-black group-hover:text-luxury-gold transition-colors duration-300" />
            <span className="text-[9px] uppercase tracking-widest mt-1 font-bold text-deep-black/60 group-hover:text-luxury-gold/80 transition-colors">Cart</span>
            <span className="absolute -top-1 right-0 bg-rose-gold text-pure-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-pure-white shadow-sm">
              1
            </span>
          </Link>
          <button className="md:hidden text-deep-black" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="border-t border-rose-gold/10 hidden md:block bg-cream-white/80 backdrop-blur-sm">
        <div className="container-custom py-3 flex items-center justify-center space-x-8">
          {mainNavLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-[11px] font-medium text-deep-black/80 hover:text-luxury-gold transition-colors flex items-center uppercase tracking-widest">
              {link.name} <ChevronDown size={10} className="ml-1 opacity-50" />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-cream-white z-[60] flex flex-col p-8 border-l border-rose-gold/20 shadow-[-10px_0_30px_rgba(232,180,160,0.2)]"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-serif tracking-[0.2em] font-bold text-deep-black">AURELIA</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-deep-black hover:text-luxury-gold transition-colors">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {mainNavLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-lg font-serif tracking-widest border-b border-rose-gold/10 pb-4 text-deep-black hover:text-luxury-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
