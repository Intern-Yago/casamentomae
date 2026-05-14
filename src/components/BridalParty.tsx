import React from 'react';

const BridalParty: React.FC = () => {
  const madrinhas = [
    { name: 'Maria Silva', role: 'Madrinha' },
    { name: 'Ana Oliveira', role: 'Madrinha' },
    { name: 'Julia Santos', role: 'Madrinha' },
  ];

  const padrinhos = [
    { name: 'João Souza', role: 'Padrinho' },
    { name: 'Pedro Costa', role: 'Padrinho' },
    { name: 'Lucas Lima', role: 'Padrinho' },
  ];

  return (
    <section id="bridal-party" className="section bg-off-white">
      <h2 className="section-title">Padrinhos e Madrinhas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl mb-6 text-center">Nossas Madrinhas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {madrinhas.map((m, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-blush-pink rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-xl">
                  {m.name.charAt(0)}
                </div>
                <p className="font-medium">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl mb-6 text-center">Nossos Padrinhos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {padrinhos.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-olive-green rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-xl">
                  {p.name.charAt(0)}
                </div>
                <p className="font-medium">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridalParty;
