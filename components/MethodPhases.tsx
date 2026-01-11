
import React from 'react';
import { PHASES } from '../constants';

const MethodPhases: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-16">O MAPA DA <span className="gradient-text">TRANSFORMAÇÃO</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-emerald-500/20 -translate-y-12 z-0"></div>
          
          {PHASES.map((phase) => (
            <div key={phase.id} className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-3xl mb-8 shadow-xl shadow-emerald-500/20 border-4 border-slate-950">
                {phase.icon}
              </div>
              <div className="glass p-8 rounded-3xl border-slate-800 w-full h-full flex flex-col items-center">
                <span className="text-emerald-400 font-bold mb-2">{phase.days}</span>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-slate-400">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodPhases;
