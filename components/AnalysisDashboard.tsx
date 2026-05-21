
import React from 'react';
import { AnalysisData } from '../App';

interface Props {
  data: AnalysisData;
}

const AnalysisDashboard: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-20">
      {/* 1. Summary & Quality Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-light leading-tight text-charcoal">
            Molecular <span className="text-gold italic font-normal">Synthesis</span> Report
          </h2>
          <p className="text-xl text-charcoal/70 italic leading-relaxed">
            {data.summary}
          </p>
        </div>
        <div className="bg-white/50 border border-gold/20 p-8 rounded-2xl flex flex-col items-center text-center backdrop-blur-sm">
          <div className="relative w-32 h-32 flex items-center justify-center mb-4">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="64" cy="64" r="60" fill="none" stroke="#d8d2c2" strokeWidth="4" />
              <circle 
                cx="64" cy="64" r="60" fill="none" stroke="#C5A02E" strokeWidth="4" 
                strokeDasharray="377" 
                strokeDashoffset={377 - (377 * data.qualityScore / 100)} 
                className="transition-all duration-1000"
              />
            </svg>
            <span className="text-4xl font-light text-gold">{data.qualityScore}</span>
          </div>
          <span className="text-xs uppercase tracking-widest font-bold text-charcoal/40">Ingredient Quality Score</span>
        </div>
      </section>

      {/* 2. Volatility Curve Visualization */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold tracking-tight uppercase text-gold">Volatility Curve</h2>
          <div className="h-[1px] flex-1 bg-gold/20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VolatilityCard title="Top Notes" items={data.volatility.top} delay="0" />
          <VolatilityCard title="Heart Notes" items={data.volatility.heart} delay="100" />
          <VolatilityCard title="Base Notes" items={data.volatility.base} delay="200" />
        </div>
      </section>

      {/* 3. Detailed Ingredient List */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold tracking-tight uppercase text-gold">Molecular Breakdown</h2>
          <div className="h-[1px] flex-1 bg-gold/20"></div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white/30 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gold/5 border-b border-taupe">
                <th className="p-4 text-xs uppercase tracking-widest font-bold text-gold">Molecule / Extract</th>
                <th className="p-4 text-xs uppercase tracking-widest font-bold text-charcoal/60">Functional Role</th>
                <th className="p-4 text-xs uppercase tracking-widest font-bold text-charcoal/60">Origin</th>
                <th className="p-4 text-xs uppercase tracking-widest font-bold text-gold text-right">Insight</th>
              </tr>
            </thead>
            <tbody>
              {data.ingredients.map((ing, idx) => (
                <tr key={idx} className="border-b border-taupe/30 hover:bg-gold/5 transition-colors">
                  <td className="p-4 font-bold italic text-charcoal">{ing.name}</td>
                  <td className="p-4 text-sm text-charcoal/70">{ing.role}</td>
                  <td className="p-4 text-sm text-charcoal/70">
                    <span className="px-2 py-0.5 rounded-full border border-taupe text-[10px] font-bold uppercase tracking-widest">
                      {ing.origin}
                    </span>
                  </td>
                  <td className="p-4 text-right italic text-gold text-sm">{ing.quality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Wearability & Sustainability */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight uppercase text-gold">Wearability</h2>
            <div className="h-[1px] flex-1 bg-gold/20"></div>
          </div>
          <div className="bg-white/40 border border-taupe p-8 rounded-xl space-y-6">
            <StatRow label="Longevity" value={data.wearability.longevity} />
            <StatRow label="Projection" value={data.wearability.projection} />
            <StatRow label="Ideal Climate" value={data.wearability.climate} />
            <p className="pt-4 border-t border-taupe/30 italic text-sm text-charcoal/60">
              {data.wearability.context}
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight uppercase text-gold">Sustainability</h2>
            <div className="h-[1px] flex-1 bg-gold/20"></div>
          </div>
          <div className="bg-gold/5 border border-gold/20 p-8 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest font-bold text-charcoal/40">Sustainability Index</span>
              <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] ${
                data.sustainability.index === 'Low' ? 'bg-orange-100 text-orange-800' :
                data.sustainability.index === 'Medium' ? 'bg-gold/20 text-gold' : 'bg-green-100 text-green-800'
              }`}>
                {data.sustainability.index} Impact
              </span>
            </div>
            <div className="w-full bg-taupe/40 h-2 rounded-full overflow-hidden mb-6">
              <div className="bg-gold h-full" style={{ width: `${data.sustainability.score}%` }}></div>
            </div>
            <p className="italic text-sm text-charcoal/70 leading-relaxed">
              {data.sustainability.summary}
            </p>
          </div>
        </section>
      </div>

      {/* 5. Emotion Map */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold tracking-tight uppercase text-gold">Neuro-Olfactory Mapping</h2>
          <div className="h-[1px] flex-1 bg-gold/20"></div>
        </div>
        <div className="bg-white/40 border border-gold/10 p-12 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-8 backdrop-blur-sm">
          {data.emotions.map((emo, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <span className="material-symbols-outlined text-gold text-2xl">{emo.icon}</span>
              </div>
              <span className="text-xs uppercase tracking-widest font-bold mb-1 text-charcoal/50">{emo.label}</span>
              <span className="text-xl italic font-bold text-gold">{emo.value}%</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const VolatilityCard: React.FC<{ title: string; items: string[]; delay: string }> = ({ title, items, delay }) => (
  <div className={`bg-white/50 border border-taupe p-8 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-500 delay-${delay}`}>
    <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-6 text-center border-b border-gold/10 pb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm italic text-charcoal/80 flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const StatRow: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-end border-b border-taupe/30 pb-2">
    <span className="text-sm uppercase tracking-widest text-charcoal/60">{label}</span>
    <span className="text-xl italic font-medium text-gold">{value}</span>
  </div>
);

export default AnalysisDashboard;
