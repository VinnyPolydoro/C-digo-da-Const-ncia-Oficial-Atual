
import React from 'react';
import { Flame, Shield, Gem } from 'lucide-react';

/**
 * Common constants for the Método 66 Dias application.
 * These exports provide the data structure expected by the modular components.
 */

// Phases of the habit-forming methodology
export const PHASES = [
  { 
    id: 1, 
    title: "A Fase do Caos", 
    days: "DIAS 1 - 22", 
    description: "A etapa de destruição. Onde você quebra os padrões antigos.", 
    icon: <Flame className="w-8 h-8" /> 
  },
  { 
    id: 2, 
    title: "A Fase da Resistência", 
    days: "DIAS 23 - 44", 
    description: "A etapa de construção. Sua nova identidade começa a surgir.", 
    icon: <Shield className="w-8 h-8" /> 
  },
  { 
    id: 3, 
    title: "A Fase da Selagem", 
    days: "DIAS 45 - 66", 
    description: "A etapa final. O hábito se torna automático e inquebrável.", 
    icon: <Gem className="w-8 h-8" /> 
  }
];

// User testimonials for social proof
export const TESTIMONIALS = [
  { 
    id: 1, 
    name: "Ricardo Santos", 
    result: "-14KG EM 70 DIAS", 
    comment: "Entendi finalmente como o hábito funciona. Hoje o treino é automático.", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" 
  },
  { 
    id: 2, 
    name: "Beatriz Helena", 
    result: "FOCO TOTAL", 
    comment: "Pela primeira vez não dependo de estar animada para ir treinar.", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
  },
  { 
    id: 3, 
    name: "Carlos Mendes", 
    result: "HÁBITO SELADO", 
    comment: "O Método 66 Dias mudou minha percepção sobre disciplina e consistência.", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" 
  }
];

// Product features listed in the offer section
export const FEATURES = [
  "E-book Método 66 Dias",
  "Planner de Hábitos Digital",
  "Checklist Diário de Evolução",
  "Manual da Preguiça Zero",
  "Acesso Vitalício à Comunidade"
];
