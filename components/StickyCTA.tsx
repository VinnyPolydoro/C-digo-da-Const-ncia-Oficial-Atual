
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra a barra após rolar 600px
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-6 md:pb-8 flex justify-center pointer-events-none animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="w-full max-w-2xl pointer-events-auto">
        <button 
          onClick={scrollToOffer}
          className="relative group w-full py-6 md:py-7 px-8 gradient-bg text-slate-950 font-black rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-4 group"
        >
          {/* Efeito de brilho pulsante atrás do botão */}
          <div className="absolute inset-0 rounded-2xl bg-emerald-400/20 animate-ping -z-10 group-hover:hidden"></div>
          
          <span className="text-xl md:text-2xl uppercase tracking-tighter">
            GARANTA SEU ACESSO - <span className="underline decoration-slate-950/30">R$ 9,90</span>
          </span>
          
          <svg 
            className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
