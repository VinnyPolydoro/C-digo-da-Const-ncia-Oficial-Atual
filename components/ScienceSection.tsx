
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { day: 0, automaticity: 10 },
  { day: 10, automaticity: 25 },
  { day: 22, automaticity: 45 },
  { day: 33, automaticity: 65 },
  { day: 44, automaticity: 80 },
  { day: 66, automaticity: 95 },
  { day: 80, automaticity: 98 },
];

const ScienceSection: React.FC = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            A CIÊNCIA POR TRÁS DOS <span className="gradient-text">66 DIAS</span>
          </h2>
          <div className="space-y-6 text-slate-300 text-lg">
            <p>
              Estudos da <strong>University College London</strong> mostram que leva, em média, 66 dias para um novo comportamento se tornar automático.
            </p>
            <p>
              A curva de automaticidade mostra que o esforço consciente é maior no início e diminui drasticamente após cruzar o ponto de inflexão.
            </p>
            <div className="p-6 glass rounded-2xl border-emerald-500/20">
              <p className="italic text-emerald-400 font-medium">
                "Não é sobre treinar pesado no primeiro dia, é sobre treinar consistentemente por 66 dias."
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full h-[400px] glass p-8 rounded-3xl">
          <h3 className="text-center mb-6 font-bold text-slate-400 uppercase tracking-widest text-sm">Nível de Automaticidade vs. Tempo</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis 
                dataKey="day" 
                stroke="#64748b" 
                label={{ value: 'Dias', position: 'insideBottom', offset: -5, fill: '#64748b' }} 
              />
              <YAxis 
                stroke="#64748b" 
                label={{ value: '% Automático', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                itemStyle={{ color: '#10b981' }}
              />
              <ReferenceLine x={66} stroke="#10b981" strokeDasharray="5 5" label={{ value: 'Hábito Selado', fill: '#10b981', position: 'top' }} />
              <Line 
                type="monotone" 
                dataKey="automaticity" 
                stroke="url(#lineGradient)" 
                strokeWidth={4} 
                dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#020617' }}
                activeDot={{ r: 8 }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
