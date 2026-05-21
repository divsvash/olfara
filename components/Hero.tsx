
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto py-12">
      <div className="flex flex-col items-center mb-6">
        <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4">Precision Intelligence Platform</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
      </div>
      <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 text-charcoal tracking-tight">
        Decode Your <span className="text-gold italic font-normal">Scent</span>
      </h1>
      <p className="text-charcoal/60 text-lg md:text-xl leading-relaxed italic max-w-2xl mx-auto">
        Transforming complex molecular fragrance science into transparent, emotionally intelligent insights for the modern connoisseur.
      </p>
    </div>
  );
};

export default Hero;
