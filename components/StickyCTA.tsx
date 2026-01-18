
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePurchase = () => {
    window.location.href = 'https://pay.kiwify.com.br/yGLcOtO';
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-6 md:pb-8 flex justify-center pointer-events-none animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="w-full max-w-2xl pointer-events-auto">
        <button 
          onClick={handlePurchase}
          className="relative group w-full py-6 md:py-8 px-8 gradient-bg text-slate-950 font-black rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-4 group"
        >
          {/* Brilho de fundo pulsante */}
          <div className="absolute inset-0 rounded-2xl bg-emerald-400/30 animate-ping -z-10 group-hover:hidden"></div>
          
          <span className="text-xl md:text-3xl uppercase tracking-tighter">
            GARANTA SEU ACESSO - <span className="underline decoration-slate-950/30">R$ 9,90</span>
          </span>
          
          <svg 
            className="w-6 h-6 md:w-10 md:h-10 group-hover:translate-x-3 transition-transform duration-300" 
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
