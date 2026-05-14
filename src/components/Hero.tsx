import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const weddingDate = new Date('2026-10-24T16:00:00'); // Example date

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-full flex items-center justify-center text-center" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0" style={{ 
        backgroundImage: 'url(/src/assets/hero.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        filter: 'brightness(0.6)'
      }}></div>
      
      {/* Fallback gradient if image fails */}
      <div className="absolute inset-0 z-0 bg-olive-green" style={{ opacity: 0.3 }}></div>

      <div className="relative z-10 px-4 fade-in">
        <h2 className="text-white uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}>
          Bem-vindos ao nosso casamento
        </h2>
        <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 1.1 }}>
          Yago & Amanda
        </h1>
        <p className="text-white italic font-serif text-2xl mb-8" style={{ fontSize: '1.5rem' }}>
          24 de Outubro de 2026
        </p>

        <div className="flex justify-center gap-8 mb-12">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-white text-3xl font-bold font-serif">{value}</span>
              <span className="text-white uppercase text-xs tracking-tighter" style={{ fontSize: '0.6rem' }}>
                {label === 'days' ? 'Dias' : label === 'hours' ? 'Horas' : label === 'minutes' ? 'Minutos' : 'Segundos'}
              </span>
            </div>
          ))}
        </div>

        <a href="#rsvp" className="btn">Confirmar Presença</a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
};

export default Hero;
