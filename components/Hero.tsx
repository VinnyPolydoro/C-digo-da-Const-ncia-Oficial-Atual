
import React from 'react';

const Hero: React.FC = () => {
  const handlePurchase = () => {
    window.location.href = 'https://pay.kiwify.com.br/yGLcOtO';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          alt="Academia" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-400 uppercase glass rounded-full border border-emerald-500/30">
          Baseado na Ciência da Formação de Hábitos
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
          NUNCA MAIS <span className="gradient-text">FALTE</span> À ACADEMIA.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Aprenda o método exato para transformar o treino em um hábito automático em apenas 66 dias, sem depender de motivação passageira.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handlePurchase}
            className="w-full sm:w-auto px-10 py-5 gradient-bg text-slate-950 font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-2xl shadow-emerald-500/20 active:scale-95"
          >
            QUERO MEU ACESSO AGORA
          </button>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </span>
            <span>+15.000 vidas transformadas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
