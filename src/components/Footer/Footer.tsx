import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-soft-beige pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-[0.2em] font-bold">AURELIA</h2>
            <p className="text-sm text-royal-black/60 leading-relaxed font-light">
              Crafting timeless elegance for the modern woman. Every piece tells a story of luxury, purity, and artisanal excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-royal-black/60 hover:text-rose-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-royal-black/60 hover:text-rose-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-royal-black/60 hover:text-rose-gold transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/shop/gold" className="text-sm text-royal-black/60 hover:text-royal-black transition-colors font-light">Gold Jewellery</Link></li>
              <li><Link to="/shop/silver" className="text-sm text-royal-black/60 hover:text-royal-black transition-colors font-light">Silver Jewellery</Link></li>
              <li><Link to="/collections" className="text-sm text-royal-black/60 hover:text-royal-black transition-colors font-light">Collections</Link></li>
              <li><Link to="/new-arrivals" className="text-sm text-royal-black/60 hover:text-royal-black transition-colors font-light">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold">Customer Care</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-sm text-royal-black/60 hover:text-royal-black transition-colors font-light">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-sm text-royal-black/60 hover:text-royal-black transition-colors font-light">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-sm text-royal-black/60 hover:text-royal-black transition-colors font-light">FAQs</Link></li>
              <li><Link to="/privacy" className="text-sm text-royal-black/60 hover:text-royal-black transition-colors font-light">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-royal-black/60 font-light">
                <Mail size={16} />
                <span>concierge@aurelia.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-royal-black/60 font-light">
                <Phone size={16} />
                <span>+1 (800) AURELIA</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-royal-black/60 font-light">
                <MapPin size={16} />
                <span>5th Avenue, New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-black/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest text-royal-black/40 font-medium">
            © 2026 AURELIA JEWELLERY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 grayscale opacity-50">
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
