
import React from 'react';
import { TESTIMONIALS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">RESULTADOS <span className="gradient-text">REAIS</span></h2>
        <p className="text-slate-400 text-lg">Pessoas comuns que decidiram dominar seus próprios hábitos.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="glass p-8 rounded-3xl border-slate-800 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-emerald-500" />
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-emerald-400 text-sm font-medium uppercase tracking-tight">{t.result}</p>
              </div>
            </div>
            <p className="text-slate-300 italic mb-4 leading-relaxed flex-grow">"{t.comment}"</p>
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
