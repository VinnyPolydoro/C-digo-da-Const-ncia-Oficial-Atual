
import { Phase, Testimonial } from './types';

// Constantes utilizadas para alimentar os componentes da landing page do Método 66 Dias.

export const PHASES: Phase[] = [
  {
    id: 1,
    title: "A Fase do Caos",
    days: "DIAS 1 - 22",
    description: "A etapa de destruição. É aqui que você luta contra o 'eu' preguiçoso e quebra os padrões de desistência instalados no seu cérebro.",
    icon: "🔥"
  },
  {
    id: 2,
    title: "A Fase da Resistência",
    days: "DIAS 23 - 44",
    description: "A etapa de construção. Os resultados começam a aparecer, mas o cérebro ainda tenta economizar energia. É o teste final da sua nova identidade.",
    icon: "🛡️"
  },
  {
    id: 3,
    title: "A Fase da Convergência",
    days: "DIAS 45 - 66",
    description: "A etapa de selagem. O comportamento cruza o ponto de inflexão e se torna automático. Você não precisa mais de motivação para ir treinar.",
    icon: "💎"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Santos",
    result: "-14KG EM 70 DIAS",
    comment: "Eu sempre fui o 'atleta de janeiro'. Começava e parava. Com o Método 66 Dias, finalmente entendi como o hábito funciona. Hoje o treino é a melhor parte do meu dia.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Beatriz Helena",
    result: "CONSTÂNCIA INABALÁVEL",
    comment: "Pela primeira vez na vida, não dependo de estar animada para ir à academia. O método me ensinou a criar uma rotina automática. É libertador!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "André Luiz",
    result: "FOCO TOTAL",
    comment: "O que mudou não foi só o meu corpo, mas minha mentalidade. O sistema de fases me ajudou a não desistir nos dias difíceis, que eram quando eu sempre falhava.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

export const FEATURES: string[] = [
  "O Guia Mestre: Método 66 Dias (E-book)",
  "Planner de Hábitos de Alta Performance (PDF)",
  "Checklist Diário de Evolução",
  "Guia de Nutrição Básica para Iniciantes",
  "Manual: Como vencer a preguiça em 5 minutos",
  "Acesso Vitalício e Atualizações Gratuitas"
];
