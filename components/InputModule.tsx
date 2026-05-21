
import React, { useState } from 'react';

interface Props {
  onProcess: (input: string) => void;
  isLoading: boolean;
}

const InputModule: React.FC<Props> = ({ onProcess, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onProcess(text);
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative group">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your fragrance ingredient list here (e.g., Alcohol Denat, Parfum, Aqua, Linalool...)"
            className="w-full h-48 bg-white/40 border border-taupe focus:border-gold focus:ring-1 focus:ring-gold/20 rounded-xl p-8 text-lg placeholder:text-charcoal/20 transition-all resize-none italic leading-relaxed"
            disabled={isLoading}
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button 
              type="button"
              className="p-2 text-charcoal/30 hover:text-gold transition-colors"
              title="Upload Label (Simulated)"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button
            type="submit"
            disabled={isLoading || !text.trim()}
            className="px-12 py-4 bg-gold hover:bg-gold-dark disabled:bg-taupe text-white font-bold uppercase tracking-[0.2em] rounded-full transition-all shadow-lg shadow-gold/10 active:scale-95 flex items-center gap-3"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Decoding Molecular Structure...
              </>
            ) : (
              'Decode Fragrance'
            )}
          </button>
          <p className="text-[10px] text-charcoal/40 uppercase tracking-widest text-center max-w-sm">
            Powered by OLFÄRA Intelligence Engine. By decoding, you agree to our science-first methodology.
          </p>
        </div>
      </form>
    </div>
  );
};

export default InputModule;
