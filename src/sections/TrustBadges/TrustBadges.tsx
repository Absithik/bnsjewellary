import React from 'react';

const badges = [
  { text: '925 Fine Silver', bold: '925' },
  { text: '6 - Month Warranty', bold: '6 - Month' },
  { text: 'BIS Hallmark', bold: 'BIS' },
  { text: 'Lifetime Plating', bold: 'Lifetime' },
  { text: 'Easy 15 Days Return', bold: 'Easy 15 Days' },
];

const TrustBadges = () => {
  return (
    <section className="bg-cream-white py-6 overflow-hidden border-y border-rose-gold/20 relative">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-gold/10 to-transparent pointer-events-none" />
      
      <div className="w-full px-4 md:px-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-pure-white/80 backdrop-blur-sm border border-rose-gold/30 px-6 py-2.5 rounded-full shadow-soft flex items-center justify-center min-w-[150px] hover:bg-rose-gold/10 hover:border-rose-gold/60 transition-all duration-300 hover:shadow-pastel cursor-default"
            >
              <p className="text-[11px] md:text-xs tracking-widest text-deep-black uppercase">
                <span className="font-bold text-rose-gold">{badge.bold}</span> {badge.text.replace(badge.bold, '')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
