
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-taupe py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8 bg-background-base/50">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-gold">flare</span>
        <span className="text-xl italic font-bold text-charcoal tracking-tight">OLFÄRA <span className="font-light text-sm opacity-60 ml-2">Intelligence Platform</span></span>
      </div>
      <div className="flex gap-10">
        <a className="text-xs uppercase tracking-widest hover:text-gold transition-colors font-medium" href="#">Privacy Policy</a>
        <a className="text-xs uppercase tracking-widest hover:text-gold transition-colors font-medium" href="#">Methodology</a>
        <a className="text-xs uppercase tracking-widest hover:text-gold transition-colors font-medium" href="#">Contact Archive</a>
      </div>
      <div className="text-[10px] text-charcoal/40 uppercase tracking-widest font-bold">
        © 2024 OLFÄRA Laboratory — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
