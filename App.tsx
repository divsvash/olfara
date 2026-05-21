
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InputModule from './components/InputModule';
import AnalysisDashboard from './components/AnalysisDashboard';
import Footer from './components/Footer';
import { analyzeFragrance } from './lib/analysisService';
if (!("documentPictureInPicture" in document)) {
  Object.defineProperty(document, "documentPictureInPicture", {
    value: null,
  });
}
export type AnalysisData = {
  summary: string;
  qualityScore: number;
  ingredients: Array<{ name: string; role: string; origin: 'Natural' | 'Synthetic' | 'Bio-identical'; quality: string }>;
  sustainability: { index: 'Low' | 'Medium' | 'High'; score: number; summary: string };
  wearability: { longevity: string; projection: string; climate: string; context: string };
  emotions: Array<{ label: string; value: number; icon: string }>;
  volatility: { top: string[]; heart: string[]; base: string[] };
};

const App: React.FC = () => {
  const [analysis, setAnalysis] = useState<AnalysisData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleProcess = async (input: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await analyzeFragrance(input);
      setAnalysis(result);
    } catch (err) {
      setError("Analysis failed. Please ensure the ingredient list is valid and try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-gold/30">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-12 w-full space-y-20">
        {!analysis && (
          <>
            <Hero />
            <InputModule onProcess={handleProcess} isLoading={isLoading} />
          </>
        )}
        
        {error && (
          <div className="p-4 bg-red-50 border border-red-100 text-red-800 rounded-lg text-center italic">
            {error}
          </div>
        )}

        {analysis && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-12 flex justify-between items-center border-b border-taupe pb-6">
              <button 
                onClick={() => setAnalysis(null)}
                className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors uppercase tracking-widest text-xs font-bold"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                New Analysis
              </button>
              <span className="text-charcoal/40 text-xs uppercase tracking-widest font-bold">Molecular Dossier Generated</span>
            </div>
            <AnalysisDashboard data={analysis} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
