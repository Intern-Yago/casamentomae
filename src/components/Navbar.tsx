import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'História', href: '#story' },
    { name: 'O Dia', href: '#big-day' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Presentes', href: '#gifts' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <div className="section" style={{ padding: '0 20px', maxWidth: '1200px' }}>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className={`font-serif text-2xl font-bold ${scrolled ? 'text-olive-green' : 'text-white'}`} style={{ fontSize: '1.5rem' }}>
              Yago & Amanda
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${scrolled ? 'nav-link-scrolled' : 'nav-link-transparent'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center"
              style={{ color: scrolled ? 'var(--olive-green)' : 'var(--white)', background: 'none', border: 'none' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: 'var(--white)', padding: '1rem' }}>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-link nav-link-scrolled"
                style={{ marginLeft: 0, padding: '0.5rem 0' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
