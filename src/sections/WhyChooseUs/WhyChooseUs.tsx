import React from 'react';
import { ShieldCheck, Truck, CreditCard, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <ShieldCheck size={40} strokeWidth={1} />,
    title: '925 Silver Certified',
    description: 'Authenticity guaranteed with every piece of jewellery.'
  },
  {
    icon: <Truck size={40} strokeWidth={1} />,
    title: 'Free Shipping',
    description: 'Complimentary shipping on all orders above $500.'
  },
  {
    icon: <CreditCard size={40} strokeWidth={1} />,
    title: 'Secure Payment',
    description: 'Your transactions are protected with industry-standard encryption.'
  },
  {
    icon: <RotateCcw size={40} strokeWidth={1} />,
    title: 'Easy Returns',
    description: 'Hassle-free 30-day returns for your peace of mind.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cream-white to-soft-pink/20 relative overflow-hidden border-y border-rose-gold/20">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,180,160,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-black mb-4 drop-shadow-sm">The Aurelia Promise</h2>
          <div className="w-16 h-[1px] bg-rose-gold/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-4 p-8 rounded-2xl bg-pure-white/80 backdrop-blur-md border border-rose-gold/20 shadow-soft hover:shadow-pastel transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="text-rose-gold flex justify-center mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(232,180,160,0.8)] transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-deep-black group-hover:text-rose-gold transition-colors duration-300">{feature.title}</h3>
              <p className="text-sm text-deep-black/70 font-sans leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
