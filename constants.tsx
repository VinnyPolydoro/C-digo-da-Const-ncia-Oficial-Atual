
import React from 'react';
import { Phase, Testimonial } from './types';

export const PHASES: Phase[] = [
  {
    id: 1,
    title: "A Fase da Destruição",
    days: "Dias 1 - 22",
    description: "O momento mais crítico. Aqui você está destruindo o antigo hábito de procrastinar e o sedentarismo. O foco é apenas comparecer.",
    icon: "🔥"
  },
  {
    id: 2,
    title: "A Fase da Instalação",
    days: "Dias 23 - 44",
    description: "Seu cérebro começa a aceitar a nova rotina. O esforço consciente diminui e a técnica começa a se tornar automática.",
    icon: "⚙️"
  },
  {
    id: 3,
    title: "A Fase da Integração",
    days: "Dias 45 - 66",
    description: "O hábito está selado. Ir à academia se torna parte da sua identidade, como escovar os dentes ou tomar banho.",
    icon: "💎"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Silva",
    comment: "Eu sempre desistia no primeiro mês. Com o Método 66 Dias, finalmente entendi que o problema não era minha vontade, mas o sistema que eu usava.",
    result: "Treinando há 5 meses sem falhar",
    image: "https://picsum.photos/id/1012/100/100"
  },
  {
    id: 2,
    name: "Mariana Costa",
    comment: "O checklist diário mudou o jogo. Parar de depender de motivação foi a melhor coisa que fiz pela minha saúde.",
    result: "-12kg e rotina inabalável",
    image: "https://picsum.photos/id/1027/100/100"
  },
  {
    id: 3,
    name: "Lucas Almeida",
    comment: "O protocolo antifragilidade me salvou quando tive uma semana difícil no trabalho. Voltei pro ritmo no dia seguinte.",
    result: "Consistência de ferro",
    image: "https://picsum.photos/id/1005/100/100"
  }
];

export const FEATURES = [
  "Protocolo de 66 Dias Passo a Passo",
  "Plano de Ação Diário (Checklist)",
  "Guia de Gestão de Motivação",
  "Acesso Vitalício",
  "Protocolo Antifragilidade (O que fazer quando falhar)"
];
