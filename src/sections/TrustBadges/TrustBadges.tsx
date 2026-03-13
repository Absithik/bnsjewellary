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
    <section className="bg-[#FCE4EC] py-4 overflow-hidden">
      <div className="w-full px-4 md:px-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-pure-white px-6 py-2 rounded-sm shadow-sm flex items-center justify-center min-w-[150px]"
            >
              <p className="text-[10px] md:text-xs tracking-tight text-royal-black">
                <span className="font-bold">{badge.bold}</span> {badge.text.replace(badge.bold, '')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
