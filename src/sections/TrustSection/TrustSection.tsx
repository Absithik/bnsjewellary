import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export const TrustSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-gold-primary" />,
      title: "Certified Quality",
      desc: "Every piece is hallmarked and certified for purity."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-primary" />,
      title: "Secure Payments",
      desc: "Your transactions are protected with bank-grade security."
    },
    {
      icon: <Truck className="w-8 h-8 text-gold-primary" />,
      title: "Free Shipping",
      desc: "Complimentary insured shipping on all orders."
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-gold-primary" />,
      title: "Easy Returns",
      desc: "30-day hassle-free return policy for your peace of mind."
    }
  ];

  return (
    <section className="py-24 px-6 bg-royal-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 rounded-full bg-white/5 mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
