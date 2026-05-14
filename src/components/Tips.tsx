import React from 'react';
import { Info, Umbrella, Car } from 'lucide-react';

const Tips: React.FC = () => {
  const tips = [
    {
      icon: <Umbrella size={32} />,
      title: 'Clima',
      description: 'Em Outubro o clima em SP costuma ser ameno, mas sugerimos trazer um agasalho leve para a noite.',
    },
    {
      icon: <Car size={32} />,
      title: 'Chegada',
      description: 'Recomendamos chegar com 30 minutos de antecedência para acomodação tranquila.',
    },
    {
      icon: <Info size={32} />,
      title: 'Crianças',
      description: 'Teremos um espaço kids com monitores para que os pais possam aproveitar a festa.',
    },
  ];

  return (
    <section id="tips" className="section bg-off-white">
      <h2 className="section-title">Dicas para Convidados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-olive-green mb-4 flex justify-center">
              {tip.icon}
            </div>
            <h3 className="text-xl mb-2">{tip.title}</h3>
            <p className="text-text-light text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
