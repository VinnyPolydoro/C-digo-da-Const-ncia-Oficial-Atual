
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-black gradient-text mb-8">MÉTODO 66 DIAS</div>
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-slate-400 font-medium">
          <a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contato</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Área de Membros</a>
        </div>
        <p className="text-slate-600 text-sm max-w-3xl mx-auto leading-relaxed mb-8">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar provas reais de resultados.
        </p>
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Método 66 Dias - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
