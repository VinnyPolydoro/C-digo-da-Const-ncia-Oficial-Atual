
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, ReferenceLine 
} from 'recharts';
import { 
  CheckCircle2, Star, ShieldCheck, Flame, 
  Shield, Gem, Trophy, Target, Zap, Clock
} from 'lucide-react';

const CHECKOUT_URL = "https://pay.kiwify.com.br/yGLcOtO";

const PHASES = [
  { id: 1, title: "A Fase do Caos", days: "DIAS 1 - 22", desc: "A etapa de destruição. Onde você quebra os padrões antigos de sedentarismo e vence a inércia.", icon: <Flame className="w-8 h-8" /> },
  { id: 2, title: "A Fase da Resistência", days: "DIAS 23 - 44", desc: "A etapa de construção. Sua nova identidade de quem treina começa a surgir e o corpo se adapta.", icon: <Shield className="w-8 h-8" /> },
  { id: 3, title: "A Fase da Selagem", days: "DIAS 45 - 66", desc: "A etapa final. O hábito se torna automático e faz parte de quem você é. Agora é lifestyle.", icon: <Gem className="w-8 h-8" /> }
];

const CHART_DATA = [
  { day: 0, auto: 10 }, { day: 10, auto: 25 }, { day: 22, auto: 45 },
  { day: 33, auto: 65 }, { day: 44, auto: 80 }, { day: 66, auto: 95 }, { day: 80, auto: 98 }
];

const TESTIMONIALS = [
  { id: 1, name: "Ricardo Santos", result: "-14KG EM 70 DIAS", comment: "Entendi finalmente como o hábito funciona. Hoje o treino é automático e não sofro mais.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  { id: 2, name: "Beatriz Helena", result: "FOCO TOTAL", comment: "Pela primeira vez não dependo de estar animada para ir treinar. O método mudou minha cabeça.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
  { id: 3, name: "André Luiz", result: "CONSTÂNCIA", comment: "O sistema de fases me ajudou a não desistir nos dias difíceis. Indico para todo mundo.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
];

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-30" alt="Academia" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-emerald-400 uppercase glass rounded-full border border-emerald-500/30">
        ⚡️ MÉTODO CIENTIFICAMENTE COMPROVADO
      </div>
      <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
        NUNCA MAIS <span className="gradient-text italic">DESISTA</span> DA ACADEMIA.
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
        Transforme o treino em um hábito automático em 66 dias e conquiste o corpo que você sempre quis com o protocolo usado por atletas de elite.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href={CHECKOUT_URL} className="w-full sm:w-auto px-12 py-6 gradient-bg text-slate-950 font-black text-2xl rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-emerald-500/30 uppercase tracking-tighter italic">
          QUERO MEU ACESSO AGORA
        </a>
      </div>
    </div>
  </section>
);

const PainSection = () => (
  <section className="py-24 bg-slate-900/50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter italic text-red-500">POR QUE VOCÊ SEMPRE FALHA?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Clock className="w-10 h-10" />, title: "Ciclo da Desistência", desc: "Você começa na segunda animado e para na quinta exausto. O ciclo se repete todo mês." },
          { icon: <Zap className="w-10 h-10" />, title: "Escravo da Emoção", desc: "Se o dia foi ruim ou está chovendo, você simplesmente não vai. Você é refém da motivação." },
          { icon: <Target className="w-10 h-10" />, title: "Falta de Identidade", desc: "Você se vê como alguém que tenta, não como alguém que é. O hábito não está no seu DNA." }
        ].map((item, i) => (
          <div key={i} className="glass p-10 rounded-3xl border-slate-800 hover:border-emerald-500/30 transition-all group">
            <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4 uppercase leading-none">{item.title}</h3>
            <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ScienceSection = () => (
  <section className="py-24 container mx-auto px-6">
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">A CIÊNCIA DOS <span className="text-emerald-500 italic">66 DIAS</span></h2>
        <div className="space-y-6 text-slate-400 text-lg">
          <p>Diferente do mito dos "21 dias", estudos da <strong>University College London</strong> provaram que o tempo médio para selar um hábito complexo é de 66 dias.</p>
          <div className="p-6 glass rounded-2xl border-emerald-500/20 text-emerald-400 italic font-bold">
            "Não é força de vontade passageira, é design de comportamento biológico aplicado ao treino."
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-[400px] glass p-8 rounded-3xl">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={CHART_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="day" stroke="#64748b" />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }}
              itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
            />
            <ReferenceLine x={66} stroke="#10b981" strokeDasharray="5 5" label={{ value: 'Hábito Selado', fill: '#10b981', position: 'top' }} />
            <Line type="monotone" dataKey="auto" stroke="#10b981" strokeWidth={5} dot={{ r: 6, fill: '#10b981' }} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-center text-slate-500 text-xs mt-4 uppercase font-bold tracking-widest">Nível de Automaticidade vs. Dias</p>
      </div>
    </div>
  </section>
);

const MethodPhases = () => (
  <section className="py-24 bg-slate-950">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter uppercase italic">O MAPA DA <span className="gradient-text">TRANSFORMAÇÃO</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {PHASES.map((p) => (
          <div key={p.id} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-slate-950 mb-8 shadow-xl shadow-emerald-500/20">{p.icon}</div>
            <div className="glass p-10 rounded-3xl border-slate-800 w-full h-full hover:border-emerald-500/40 transition-colors">
              <span className="text-emerald-400 font-black mb-2 block tracking-widest uppercase">{p.days}</span>
              <h3 className="text-2xl font-bold mb-4 uppercase leading-none">{p.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-24 container mx-auto px-6">
    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter">RESULTADOS <span className="gradient-text">REAIS</span></h2>
    <div className="grid md:grid-cols-3 gap-8">
      {TESTIMONIALS.map((t) => (
        <div key={t.id} className="glass p-8 rounded-3xl border-slate-800 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-emerald-500" />
            <div>
              <h4 className="font-bold text-lg leading-none">{t.name}</h4>
              <p className="text-emerald-400 text-xs font-black mt-1">{t.result}</p>
            </div>
          </div>
          <p className="text-slate-300 italic mb-4 leading-relaxed flex-grow">"{t.comment}"</p>
          <div className="flex text-yellow-500">
             {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const OfferDetails = () => (
  <section className="py-24 bg-slate-900/50">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="glass rounded-[3rem] overflow-hidden border-2 border-emerald-500/20 shadow-2xl">
        <div className="gradient-bg py-12 text-center">
          <h2 className="text-slate-950 text-4xl font-black tracking-tighter uppercase leading-none">TUDO O QUE VOCÊ RECEBE:</h2>
          <p className="text-slate-950/70 font-bold uppercase text-xs mt-2 tracking-widest">Acesso Vitalício e Imediato</p>
        </div>
        <div className="p-10 md:p-16">
          <ul className="space-y-5 mb-12">
            {[
              "E-book Mestre: Método 66 Dias", 
              "Planner Digital de Hábitos (Editável)", 
              "Checklist Diário de Evolução", 
              "Manual da Preguiça Zero", 
              "Protocolo Antifragilidade"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-4 text-xl font-bold">
                <CheckCircle2 className="text-emerald-500 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <div className="text-center border-t border-slate-800 pt-10">
            <p className="text-slate-500 line-through text-2xl font-bold mb-1">De R$ 97,00</p>
            <div className="flex items-baseline justify-center gap-2 mb-10">
              <span className="text-2xl font-bold text-emerald-400 italic">Por apenas</span>
              <span className="text-8xl font-black gradient-text">9,90</span>
            </div>
            <a href={CHECKOUT_URL} className="block w-full py-8 gradient-bg text-slate-950 font-black text-3xl rounded-3xl hover:scale-[1.02] transition-transform shadow-2xl shadow-emerald-500/30 uppercase tracking-tighter italic">
              QUERO MEU ACESSO AGORA
            </a>
            <p className="mt-6 text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <ShieldCheck size={16} /> Compra 100% Segura • Garantia Total
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StickyCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!show) return null;
  
  return (
    <div className="fixed bottom-8 left-0 w-full z-50 px-4 flex justify-center animate-bounce-subtle">
      <a href={CHECKOUT_URL} className="w-full max-w-2xl py-6 gradient-bg text-slate-950 font-black text-2xl rounded-2xl shadow-3xl text-center uppercase tracking-tighter italic border-2 border-slate-950">
        GARANTIR ACESSO - R$ 9,90
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30 overflow-x-hidden">
      <Hero />
      <PainSection />
      <ScienceSection />
      <MethodPhases />
      <SocialProof />
      <OfferDetails />
      
      <section className="py-24 container mx-auto px-6">
        <div className="glass p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 border-slate-800">
          <Trophy className="w-32 h-32 text-emerald-500 shrink-0 filter drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter leading-none">RISCO ZERO POR <span className="text-emerald-500 italic">7 DIAS</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">Se em 7 dias você sentir que o método não é para você, eu devolvo 100% do seu dinheiro. Sem perguntas, sem estresse. O risco é todo meu.</p>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-900 px-6">
        <div className="text-2xl font-black gradient-text mb-8 tracking-tighter italic">MÉTODO 66 DIAS</div>
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-emerald-400">Termos de Uso</a>
          <a href="#" className="hover:text-emerald-400">Privacidade</a>
          <a href="#" className="hover:text-emerald-400">Suporte</a>
        </div>
        <p className="text-slate-700 text-[10px] uppercase font-bold tracking-[0.2em]">&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </footer>

      <StickyCTA />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
