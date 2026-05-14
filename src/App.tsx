import React, { useEffect, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Menu, X, Calendar, MapPin, Shirt, Gift, Plane, 
  Smartphone, Camera, Heart, CheckCircle,
  ExternalLink, Navigation, Clock, Lock, Copy
} from 'lucide-react';
import { WEDDING_DATA } from './constants/wedding';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [isAttending, setIsAttending] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, finished: false });
  const [copySuccess, setCopySuccess] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const weddingDate = new Date(WEDDING_DATA.date).getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      finished: false
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, [calculateTimeLeft]);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation of form submission
    setRsvpSubmitted(true);
  };

  const copyPix = () => {
    navigator.clipboard.writeText(WEDDING_DATA.links.pixKey);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="wedding-app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <a href="#home" className="nav-logo">{WEDDING_DATA.names}</a>
          
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            style={{ background: 'none', border: 'none' }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMobileMenu}>Início</a>
            <a href="#historia" onClick={closeMobileMenu}>Nossa História</a>
            <a href="#dia" onClick={closeMobileMenu}>O Grande Dia</a>
            <a href="#local" onClick={closeMobileMenu}>Localização</a>
            <a href="#presentes" onClick={closeMobileMenu}>Presentes</a>
            <a href="#rsvp" onClick={closeMobileMenu}>Confirmação</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-bg" style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -2 
        }}></div>
        <div className="hero-overlay"></div>
        
        <div className="container">
          <p className="hero-pretitle" data-aos="fade-down">Bem-vindos ao nosso grande dia</p>
          <h1 data-aos="zoom-in" data-aos-delay="200" className="hero-title">{WEDDING_DATA.names}</h1>
          
          <div className="hero-info" data-aos="fade-up" data-aos-delay="400">
            <p className="details">{WEDDING_DATA.dateDisplay} • {WEDDING_DATA.timeDisplay}</p>
            <p>{WEDDING_DATA.location.name}, {WEDDING_DATA.location.city}</p>
          </div>

          <div className="hero-actions" data-aos="fade-up" data-aos-delay="600">
            <a href="#rsvp" className="btn btn-primary"><Heart size={18} /> Confirmar Presença</a>
            <a href="#local" className="btn btn-white"><MapPin size={18} /> Ver Localização</a>
          </div>

          {!timeLeft.finished ? (
            <div className="countdown-premium" data-aos="fade-up" data-aos-delay="800">
              <div className="count-box">
                <span className="count-number">{timeLeft.days}</span>
                <span className="count-label">Dias</span>
              </div>
              <div className="count-box">
                <span className="count-number">{timeLeft.hours}</span>
                <span className="count-label">Horas</span>
              </div>
              <div className="count-box">
                <span className="count-number">{timeLeft.minutes}</span>
                <span className="count-label">Min</span>
              </div>
              <div className="count-box">
                <span className="count-number">{timeLeft.seconds}</span>
                <span className="count-label">Seg</span>
              </div>
            </div>
          ) : (
            <div className="celebration-msg" data-aos="zoom-in">
              <h2 style={{ color: 'white', fontFamily: 'var(--font-cursive)', fontSize: '3rem' }}>Chegou o grande dia!</h2>
            </div>
          )}
        </div>
      </section>

      {/* Nossa História */}
      <section id="historia" className="bg-cream">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">Onde tudo começou</p>
            <h2 className="section-title">Nossa História</h2>
          </div>

          <div className="story-grid">
            <div className="story-img-container" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&w=800&q=80" alt={WEDDING_DATA.names} className="story-img" />
            </div>
            <div className="story-text" data-aos="fade-left">
              <h3>Um encontro do destino...</h3>
              <p>Era uma tarde de outono quando nossos olhares se cruzaram pela primeira vez. O que começou como uma simples amizade floresceu no amor mais puro que já conhecemos.</p>
              <p>Ao longo desses anos, cada risada, cada desafio e cada viagem construíram a base do que somos hoje. Do primeiro café ao pedido de casamento sob o céu estrelado, nossa jornada tem sido repleta de cumplicidade.</p>
              <p>Agora, estamos ansiosos para dar o próximo passo e celebrar o início de uma nova fase ao lado de cada um de vocês.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O Grande Dia */}
      <section id="dia">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">Informações importantes</p>
            <h2 className="section-title">O Grande Dia</h2>
          </div>

          <div className="cards-container">
            <div className="premium-card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-icon"><Clock size={32} /></div>
              <h3>Cerimônia</h3>
              <p>A cerimônia será realizada pontualmente às {WEDDING_DATA.timeDisplay}. Recomendamos chegar com 30 minutos de antecedência.</p>
              <a href={WEDDING_DATA.location.googleCalendarUrl} target="_blank" rel="noreferrer" className="btn btn-outline full-width">
                <Calendar size={18} /> Salvar na Agenda
              </a>
            </div>

            <div className="premium-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-icon"><Heart size={32} /></div>
              <h3>Recepção</h3>
              <p>Logo após a cerimônia, nos reuniremos no Salão Principal para um coquetel seguido de jantar e muita festa.</p>
              <a href="#local" className="btn btn-outline full-width">
                <MapPin size={18} /> Ver Localização
              </a>
            </div>

            <div className="premium-card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-icon"><Shirt size={32} /></div>
              <h3>Dress Code</h3>
              <p>O traje sugerido é <strong>Esporte Fino</strong>. Evite cores muito claras (branco/off-white) e verde oliva.</p>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="btn btn-outline full-width">
                <Smartphone size={18} /> Ver Inspirações
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="local" className="bg-blush-soft">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">Como chegar</p>
            <h2 className="section-title">Localização</h2>
          </div>

          <div className="location-wrapper" data-aos="fade-up">
            <div className="location-content">
              <h3>{WEDDING_DATA.location.name}</h3>
              <span className="address-highlight">{WEDDING_DATA.location.address}</span>
              <p className="location-meta">
                {WEDDING_DATA.location.city}, CEP {WEDDING_DATA.location.cep}<br /><br />
                O local possui estacionamento com manobrista no local para sua comodidade. Recomendamos o uso de transporte por aplicativo se for brindar conosco!
              </p>
              <div className="map-btns">
                <a href={WEDDING_DATA.location.googleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <ExternalLink size={18} /> Google Maps
                </a>
                <a href={WEDDING_DATA.location.wazeUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                  <Navigation size={18} /> Abrir no Waze
                </a>
              </div>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.658!3d-23.561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzM5LjYiUyA0NiwzOScyOC44Ilc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                className="map-iframe"
                title={`Mapa de localização: ${WEDDING_DATA.location.name}`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Presentes */}
      <section id="presentes" className="bg-cream">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">Mimos para os noivos</p>
            <h2 className="section-title">Lista de Presentes</h2>
            <p className="section-subtitle" style={{ textTransform: 'none', letterSpacing: 'normal', color: 'var(--text)', marginTop: '20px' }}>
              Sua presença é nosso maior presente! Mas se desejar nos presentear, preparamos algumas opções.
            </p>
          </div>

          <div className="cards-container">
            <div className="premium-card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-icon"><Gift size={32} /></div>
              <h3>Lista Virtual</h3>
              <p>Preparamos uma lista de itens simbólicos para nossa casa nova em nossa plataforma parceira.</p>
              {WEDDING_DATA.links.giftList ? (
                <a href={WEDDING_DATA.links.giftList} target="_blank" rel="noreferrer" className="btn btn-outline">Acessar Lista</a>
              ) : (
                <button className="btn btn-outline" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Em breve</button>
              )}
            </div>

            <div className="premium-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-icon"><Plane size={32} /></div>
              <h3>Cota Lua de Mel</h3>
              <p>Ajude-nos a realizar o sonho da nossa viagem para a Itália com cotas simbólicas.</p>
              {WEDDING_DATA.links.honeymoonCotas ? (
                <a href={WEDDING_DATA.links.honeymoonCotas} target="_blank" rel="noreferrer" className="btn btn-outline">Contribuir</a>
              ) : (
                <button className="btn btn-outline" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Em breve</button>
              )}
            </div>

            <div className="premium-card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-icon"><Smartphone size={32} /></div>
              <h3>Pix dos Noivos</h3>
              <p>Se preferir a praticidade, disponibilizamos nosso QR Code e chave Pix para presentes.</p>
              <button onClick={copyPix} className="btn btn-primary">
                {copySuccess ? <CheckCircle size={18} /> : <Copy size={18} />}
                {copySuccess ? 'Copiado!' : 'Copiar Chave Pix'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmação de Presença */}
      <section id="rsvp">
        <div className="container">
          <div className="rsvp-container" data-aos="zoom-in">
            {!rsvpSubmitted ? (
              <>
                <div className="section-header" style={{ marginBottom: '40px' }}>
                  <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Confirme sua Presença</h2>
                  <p style={{ color: 'var(--olive)', fontWeight: '600' }}>Confirmar até {WEDDING_DATA.rsvpDeadline}</p>
                </div>

                <form className="form-grid" onSubmit={handleRsvpSubmit}>
                  <div className="form-group full">
                    <label htmlFor="name">Nome Completo</label>
                    <input type="text" id="name" placeholder="Ex: Ana Maria Silva" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">WhatsApp</label>
                    <input type="tel" id="phone" placeholder="(11) 99999-9999" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="attending">Você irá ao evento?</label>
                    <select 
                      id="attending" 
                      required 
                      onChange={(e) => setIsAttending(e.target.value === 'sim')}
                    >
                      <option value="sim">Sim, estarei lá!</option>
                      <option value="nao">Infelizmente, não poderei.</option>
                    </select>
                  </div>

                  {isAttending && (
                    <div className="form-group">
                      <label htmlFor="guests">Quantos acompanhantes?</label>
                      <select id="guests">
                        <option value="0">Apenas eu</option>
                        <option value="1">1 acompanhante</option>
                        <option value="2">2 acompanhantes</option>
                        <option value="3">3 acompanhantes</option>
                      </select>
                    </div>
                  )}

                  <div className={isAttending ? "form-group" : "form-group full"}>
                    <label htmlFor="diet">Restrição Alimentar? (Opcional)</label>
                    <input type="text" id="diet" placeholder="Ex: Vegano, Alérgico..." />
                  </div>

                  <div className="form-group full">
                    <label htmlFor="msg">Mensagem para os Noivos</label>
                    <textarea id="msg" rows={4} placeholder="Deixe um recado carinhoso..."></textarea>
                  </div>

                  <div className="privacy-disclaimer full">
                    <Lock size={14} /> Seus dados estão seguros e serão usados apenas para a lista de convidados.
                  </div>

                  <button type="submit" className="btn btn-primary full" style={{ gridColumn: 'span 2' }}>
                    Confirmar Agora
                  </button>
                </form>
              </>
            ) : (
              <div className="success-state text-center" style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={64} color="var(--olive)" style={{ marginBottom: '20px' }} />
                {isAttending ? (
                  <>
                    <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Presença Confirmada!</h3>
                    <p style={{ color: 'var(--muted)' }}>Obrigado por confirmar! Mal podemos esperar para celebrar com você.</p>
                  </>
                ) : (
                  <>
                    <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Obrigado pelo carinho!</h3>
                    <p style={{ color: 'var(--muted)' }}>Sentiremos sua falta, mas ficamos felizes com sua mensagem. Obrigado por nos avisar!</p>
                  </>
                )}
                <button 
                  className="btn btn-outline" 
                  style={{ marginTop: '30px' }} 
                  onClick={() => setRsvpSubmitted(false)}
                >
                  Voltar
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-logo">{WEDDING_DATA.names}</div>
          <p className="footer-info">{WEDDING_DATA.dateDisplay} • {WEDDING_DATA.location.city}</p>
          
          <div className="social-links">
            <a href={WEDDING_DATA.links.instagram} target="_blank" rel="noreferrer" className="social-circle" aria-label="Instagram"><Camera size={20} /></a>
            <a href="#" className="social-circle" aria-label="Facebook"><Heart size={20} /></a>
            <a href={`https://wa.me/5511999999999`} target="_blank" rel="noreferrer" className="social-circle" aria-label="WhatsApp"><Smartphone size={20} /></a>
          </div>

          <div className="copyright">
            <p>Criado com carinho para o nosso grande dia.</p>
            <p>&copy; 2026 • Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
