import React from 'react';
import { Camera, Heart, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-olive-green text-white py-12">
      <div className="section" style={{ padding: '0 20px', textAlign: 'center' }}>
        <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Yago & Amanda</h2>
        <p className="mb-8 opacity-80">24 de Outubro de 2026 • São Paulo, SP</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-blush-pink transition-all"><Camera size={24} /></a>
          <a href="#" className="hover:text-blush-pink transition-all"><Heart size={24} /></a>
          <a href="#" className="hover:text-blush-pink transition-all"><Mail size={24} /></a>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-8 text-sm opacity-60">
          <p>© 2026 Criado com carinho para o nosso grande dia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
