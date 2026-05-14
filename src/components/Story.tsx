import React from 'react';

const Story: React.FC = () => {
  const events = [
    {
      year: '2020',
      title: 'O Primeiro Encontro',
      description: 'Onde tudo começou, um café despretensioso que mudou nossas vidas.',
    },
    {
      year: '2021',
      title: 'O Pedido de Namoro',
      description: 'Um pôr do sol inesquecível na praia.',
    },
    {
      year: '2024',
      title: 'O Sim',
      description: 'O pedido de casamento mais emocionante do mundo.',
    },
  ];

  return (
    <section id="story" className="section">
      <h2 className="section-title">Nossa História</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-blush-pink ml-4 md:ml-0 md:flex md:border-l-0 md:justify-between">
          {events.map((event, index) => (
            <div key={index} className="mb-12 md:mb-0 md:w-1/3 px-8 text-center relative">
              <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-blush-pink -z-10" style={{ top: '15px' }}></div>
              <div className="w-8 h-8 bg-olive-green rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 relative z-10">
                {index + 1}
              </div>
              <span className="block text-blush-pink font-bold mb-2">{event.year}</span>
              <h3 className="text-xl mb-2">{event.title}</h3>
              <p className="text-text-light">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
