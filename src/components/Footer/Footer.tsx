import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cream-white pt-24 pb-12 border-t border-rose-gold/20 relative overflow-hidden">
      {/* Subtle gold glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-gold/10 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-[0.2em] font-bold text-luxury-gold">AURELIA</h2>
            <p className="text-sm text-deep-black/70 leading-relaxed font-sans tracking-wide">
              Crafting timeless elegance for the modern woman. Every piece tells a story of luxury, purity, and artisanal excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-luxury-gold hover:text-rose-gold transition-colors duration-300"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-luxury-gold hover:text-rose-gold transition-colors duration-300"><Facebook size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-luxury-gold hover:text-rose-gold transition-colors duration-300"><Twitter size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gold">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/shop/gold" className="text-sm text-deep-black/70 hover:text-luxury-gold transition-colors font-sans tracking-wide">Gold Jewellery</Link></li>
              <li><Link to="/shop/silver" className="text-sm text-deep-black/70 hover:text-luxury-gold transition-colors font-sans tracking-wide">Silver Jewellery</Link></li>
              <li><Link to="/collections" className="text-sm text-deep-black/70 hover:text-luxury-gold transition-colors font-sans tracking-wide">Collections</Link></li>
              <li><Link to="/new-arrivals" className="text-sm text-deep-black/70 hover:text-luxury-gold transition-colors font-sans tracking-wide">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gold">Customer Care</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-sm text-deep-black/70 hover:text-luxury-gold transition-colors font-sans tracking-wide">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-sm text-deep-black/70 hover:text-luxury-gold transition-colors font-sans tracking-wide">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-sm text-deep-black/70 hover:text-luxury-gold transition-colors font-sans tracking-wide">FAQs</Link></li>
              <li><Link to="/privacy" className="text-sm text-deep-black/70 hover:text-luxury-gold transition-colors font-sans tracking-wide">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gold">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-deep-black/70 font-sans tracking-wide">
                <Mail size={18} className="text-luxury-gold" strokeWidth={1.5} />
                <span className="hover:text-luxury-gold transition-colors cursor-pointer">concierge@aurelia.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-deep-black/70 font-sans tracking-wide">
                <Phone size={18} className="text-luxury-gold" strokeWidth={1.5} />
                <span className="hover:text-luxury-gold transition-colors cursor-pointer">+1 (800) AURELIA</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-deep-black/70 font-sans tracking-wide">
                <MapPin size={18} className="text-luxury-gold" strokeWidth={1.5} />
                <span className="hover:text-luxury-gold transition-colors cursor-pointer">5th Avenue, New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rose-gold/20 pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest text-deep-black/50 font-medium">
            © 2026 AURELIA JEWELLERY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
