
import React from 'react';
import { FEATURES } from '../constants';

const OfferDetails: React.FC = () => {
  return (
    <section id="offer" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass rounded-[3rem] overflow-hidden border-2 border-emerald-500/30 shadow-3xl shadow-emerald-500/10">
          <div className="gradient-bg py-10 px-8 text-center">
            <h2 className="text-slate-950 text-4xl font-black mb-2">TUDO O QUE VOCÊ VAI RECEBER:</h2>
            <p className="text-slate-950/80 font-bold tracking-widest text-sm uppercase">Acesso imediato e completo</p>
          </div>
          
          <div className="p-10 md:p-16">
            <ul className="space-y-6 mb-12">
              {FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 text-xl">
                  <div className="mt-1 w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-slate-200 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="text-center border-t border-slate-800 pt-12">
              <div className="flex flex-col items-center justify-center mb-8">
                <span className="text-slate-500 line-through text-2xl mb-2">De R$ 99,90</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-emerald-400">Por apenas R$</span>
                  <span className="text-8xl font-black gradient-text">9,90</span>
                </div>
                <p className="text-slate-400 mt-2">Pagamento único. Sem mensalidades.</p>
              </div>
              
              <button className="w-full py-6 gradient-bg text-slate-950 font-black text-2xl rounded-2xl hover:scale-[1.02] transition-transform shadow-2xl shadow-emerald-500/30 active:scale-95 mb-4">
                QUERO MEU ACESSO AGORA
              </button>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 opacity-50" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 opacity-50" />
                <div className="flex items-center gap-1 opacity-50">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  <span className="font-bold">Checkout Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferDetails;
