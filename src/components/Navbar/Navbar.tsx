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
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-pure-white ${isScrolled ? 'shadow-soft' : ''}`}>
      {/* Top Header */}
      <div className="container-custom py-4 flex items-center justify-between gap-8">
        <Link to="/" className="text-3xl font-bold tracking-tighter shrink-0">
          AURELIA
        </Link>

        {/* Location Selector */}
        <div className="hidden md:flex items-center space-x-2 px-3 py-1 border border-royal-black/10 rounded-sm shrink-0 cursor-pointer hover:bg-soft-beige transition-colors">
          <div className="text-rose-gold"><MapPin size={16} /></div>
          <div className="text-[10px] leading-tight">
            <p className="font-bold">Where to Deliver?</p>
            <p className="text-royal-black/60 flex items-center">Update Delivery Pincode <ChevronDown size={10} className="ml-1" /></p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-2xl relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search 'Gifts For Her'"
            className="w-full bg-soft-beige/30 border border-royal-black/10 rounded-sm py-2 px-4 pr-10 text-sm focus:outline-none focus:border-rose-gold transition-colors"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-royal-black/40" size={18} />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 shrink-0">
          <div className="hidden lg:flex flex-col items-center cursor-pointer group">
            <Store size={20} strokeWidth={1.5} className="group-hover:text-rose-gold transition-colors" />
            <span className="text-[9px] uppercase tracking-widest mt-1 font-bold text-royal-black/60">Stores</span>
          </div>
          <Link to="/account" className="flex flex-col items-center group">
            <User size={20} strokeWidth={1.5} className="group-hover:text-rose-gold transition-colors" />
            <span className="text-[9px] uppercase tracking-widest mt-1 font-bold text-royal-black/60">Account</span>
          </Link>
          <Link to="/wishlist" className="flex flex-col items-center group">
            <Heart size={20} strokeWidth={1.5} className="group-hover:text-rose-gold transition-colors" />
            <span className="text-[9px] uppercase tracking-widest mt-1 font-bold text-royal-black/60">Wishlist</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center group relative">
            <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-rose-gold transition-colors" />
            <span className="text-[9px] uppercase tracking-widest mt-1 font-bold text-royal-black/60">Cart</span>
            <span className="absolute -top-1 right-0 bg-rose-gold text-pure-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-pure-white">
              1
            </span>
          </Link>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="border-t border-royal-black/5 hidden md:block">
        <div className="container-custom py-3 flex items-center justify-center space-x-8">
          {mainNavLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-[11px] font-medium text-royal-black/80 hover:text-rose-gold transition-colors flex items-center">
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
            className="fixed inset-0 bg-pure-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-serif tracking-widest font-bold">AURELIA</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {mainNavLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-lg font-serif tracking-widest border-b border-royal-black/5 pb-2"
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
