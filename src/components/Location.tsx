import React from 'react';
import { ExternalLink } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="section">
      <h2 className="section-title">Localização</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl mb-4">Espaço Wedding Garden</h3>
          <p className="mb-4 text-text-light">
            Rua das Flores, 123 - Vila Marieta<br />
            São Paulo - SP, 03613-010
          </p>
          <p className="mb-6 text-text-light">
            O local possui estacionamento com manobrista no local para sua comodidade.
          </p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline flex items-center justify-center gap-2"
          >
            Abrir no Google Maps <ExternalLink size={18} />
          </a>
        </div>
        <div className="h-64 bg-off-white rounded-lg overflow-hidden shadow-inner">
          {/* Placeholder for map */}
          <div className="w-full h-full flex items-center justify-center text-text-light italic">
            [Mapa Interativo]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
