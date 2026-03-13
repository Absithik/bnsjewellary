import React from 'react';
import { ShieldCheck, Truck, CreditCard, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1} />,
    title: '925 Silver Certified',
    description: 'Authenticity guaranteed with every piece of jewellery.'
  },
  {
    icon: <Truck size={32} strokeWidth={1} />,
    title: 'Free Shipping',
    description: 'Complimentary shipping on all orders above $500.'
  },
  {
    icon: <CreditCard size={32} strokeWidth={1} />,
    title: 'Secure Payment',
    description: 'Your transactions are protected with industry-standard encryption.'
  },
  {
    icon: <RotateCcw size={32} strokeWidth={1} />,
    title: 'Easy Returns',
    description: 'Hassle-free 30-day returns for your peace of mind.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-soft-beige">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="text-rose-gold flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold">{feature.title}</h3>
              <p className="text-sm text-royal-black/60 font-light leading-relaxed">
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
