import React from 'react';
import { Gift, Heart, Coffee } from 'lucide-react';

const Gifts: React.FC = () => {
  const options = [
    {
      icon: <Gift size={40} />,
      title: 'Lista de Presentes',
      description: 'Confira nossa lista completa em lojas parceiras.',
      buttonText: 'Ver Lista',
      link: '#',
    },
    {
      icon: <Heart size={40} />,
      title: 'Cotas de Lua de Mel',
      description: 'Contribua com nossa viagem inesquecível para a Itália.',
      buttonText: 'Contribuir',
      link: '#',
    },
    {
      icon: <Coffee size={40} />,
      title: 'Pix Solidário',
      description: 'Se preferir, envie um presente via Pix diretamente.',
      buttonText: 'Ver Chave Pix',
      link: '#',
    },
  ];

  return (
    <section id="gifts" className="section">
      <h2 className="section-title">Lista de Presentes</h2>
      <p className="text-center max-w-2xl mx-auto mb-12">
        Sua presença é o nosso maior presente, mas se desejar nos presentear, 
        preparamos algumas opções para facilitar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {options.map((option, index) => (
          <div key={index} className="bg-off-white p-8 rounded-lg text-center transition-all hover:shadow-md">
            <div className="text-blush-pink mb-4 flex justify-center">
              {option.icon}
            </div>
            <h3 className="text-xl mb-2">{option.title}</h3>
            <p className="text-text-light mb-6">{option.description}</p>
            <a href={option.link} className="btn btn-outline">{option.buttonText}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gifts;
