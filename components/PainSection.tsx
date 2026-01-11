
import React from 'react';

const PainSection: React.FC = () => {
  const pains = [
    {
      title: "Ciclo da Desistência",
      desc: "Você começa segunda-feira super motivado, mas na quinta já está inventando desculpas.",
      icon: "🔄"
    },
    {
      title: "Escravo da Motivação",
      desc: "Se o dia foi ruim ou se está chovendo, você simplesmente não vai. Você depende de como se sente.",
      icon: "⛓️"
    },
    {
      title: "Sensação de Fracasso",
      desc: "Olha no espelho e sente que nunca vai conseguir o corpo que deseja porque não consegue manter o ritmo.",
      icon: "📉"
    }
  ];

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">POR QUE VOCÊ <span className="text-red-500">SEMPRE</span> DESISTE?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A maioria das pessoas falha não por falta de vontade, mas porque tenta usar a motivação para algo que deveria ser um hábito.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="glass p-8 rounded-3xl border-slate-800 hover:border-slate-700 transition-colors group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{pain.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{pain.title}</h3>
              <p className="text-slate-400 leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
