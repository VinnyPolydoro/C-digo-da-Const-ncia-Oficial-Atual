
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="glass p-10 md:p-16 rounded-[3rem] border-slate-800 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" 
            alt="Garantia de 7 Dias" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">RISCO <span className="text-emerald-400">ZERO</span> POR 7 DIAS</h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-6">
            Eu tenho tanta confiança no Método 66 Dias que ofereço uma garantia incondicional. Se em 7 dias você sentir que o método não é para você, basta me enviar um e-mail e eu devolvo 100% do seu dinheiro. Sem perguntas, sem estresse.
          </p>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04default 0 000 0.002z"></path></svg>
            </div>
            <span className="font-bold text-slate-200 uppercase tracking-widest text-sm">Sua satisfação ou seu dinheiro de volta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
