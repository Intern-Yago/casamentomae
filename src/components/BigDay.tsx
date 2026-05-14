import React from 'react';
import { MapPin, Clock, Shirt } from 'lucide-react';

const BigDay: React.FC = () => {
  const details = [
    {
      icon: <Clock size={40} />,
      title: 'Cerimônia e Recepção',
      info: '16:00 - 24 de Outubro de 2026',
    },
    {
      icon: <MapPin size={40} />,
      title: 'Localização',
      info: 'Espaço Wedding Garden, São Paulo - SP',
    },
    {
      icon: <Shirt size={40} />,
      title: 'Dress Code',
      info: 'Passeio Completo',
    },
  ];

  return (
    <section id="big-day" className="section bg-off-white">
      <h2 className="section-title">O Grande Dia</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {details.map((detail, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-olive-green">
            <div className="text-olive-green mb-4 flex justify-center">
              {detail.icon}
            </div>
            <h3 className="text-xl mb-2">{detail.title}</h3>
            <p className="text-text-light">{detail.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BigDay;
