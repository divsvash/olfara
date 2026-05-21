
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-taupe px-6 md:px-20 py-6 bg-background-base/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3 text-charcoal">
          <span className="material-symbols-outlined text-gold text-3xl">flare</span>
          <h2 className="text-charcoal text-2xl font-bold tracking-tight italic">OLFÄRA</h2>
        </div>
        <nav className="hidden lg:flex items-center gap-10">
          <a className="text-charcoal/70 hover:text-gold text-sm font-medium transition-colors uppercase tracking-widest" href="#">Intelligence</a>
          <a className="text-charcoal/70 hover:text-gold text-sm font-medium transition-colors uppercase tracking-widest" href="#">Sustainability</a>
          <a className="text-charcoal/70 hover:text-gold text-sm font-medium transition-colors uppercase tracking-widest" href="#">Wearability</a>
          <a className="text-charcoal/70 hover:text-gold text-sm font-medium transition-colors uppercase tracking-widest" href="#">Olfactory</a>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <div className="hidden md:flex items-center bg-white/40 border border-taupe px-3 py-1.5 rounded">
          <span className="material-symbols-outlined text-charcoal/40 text-sm">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-32 placeholder:text-charcoal/40" 
            placeholder="Archive Search" 
          />
        </div>
        <div className="flex gap-4">
          <button className="text-charcoal hover:text-gold transition-colors">
            <span className="material-symbols-outlined">person</span>
          </button>
          <button className="text-charcoal hover:text-gold transition-colors">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
