import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Menu, X, Calendar, MapPin, Gift, Plane, 
  Camera, Heart, CheckCircle,
  ExternalLink, Navigation, Clock, Lock,
  ArrowLeft, Loader2
} from 'lucide-react';
import { WEDDING_DATA } from './constants/wedding';
import DigitalAlbum from './components/DigitalAlbum';
import GiftsPage from './components/GiftsPage';
import ConfirmedGuestsPage from './components/ConfirmedGuestsPage';
import { supabase } from './lib/supabase';

const Home: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [isAttending, setIsAttending] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, finished: false });
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  // RSVP Form state
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    phone: '',
    diet: '',
    message: ''
  });
  const [rsvpLoading, setRsvpLoading] = useState(false);
  const [rsvpError, setRsvpError] = useState<string | null>(null);

  const handleAdultChange = (amount: number) => {
    setAdults(prev => Math.max(0, prev + amount));
  };

  const handleChildrenChange = (amount: number) => {
    setChildren(prev => Math.max(0, prev + amount));
  };

  const calculateTimeLeft = useCallback(() => {
    const weddingDate = new Date("2027-04-24T16:00:00").getTime();
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
    AOS.init({ duration: 1000, once: true, offset: 0 });
    
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

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpLoading(true);
    setRsvpError(null);

    try {
      const { error } = await supabase
        .from('rsvps')
        .insert([
          {
            name: rsvpForm.name.trim(),
            phone: rsvpForm.phone.trim(),
            attending: isAttending,
            adults: isAttending ? adults : 0,
            children: isAttending ? children : 0,
            guests: isAttending ? (adults + 1 + children) : 0,
            diet: isAttending && rsvpForm.diet.trim() ? rsvpForm.diet.trim() : null,
            message: rsvpForm.message.trim() ? rsvpForm.message.trim() : null,
          }
        ]);

      if (error) {
        console.error('Erro ao registrar confirmação no Supabase:', error);
        throw error;
      }

      try {
        localStorage.setItem('guest_name', rsvpForm.name.trim());
        if (rsvpForm.phone.trim()) {
          localStorage.setItem('guest_phone', rsvpForm.phone.trim());
        }
      } catch (e) {
        console.error('LocalStorage error:', e);
      }

      setRsvpSubmitted(true);
    } catch (err: any) {
      console.error('Erro no envio do RSVP:', err);
      setRsvpError('Houve um erro ao enviar sua confirmação. Por favor, tente novamente ou fale diretamente conosco.');
    } finally {
      setRsvpLoading(false);
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="wedding-app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <a href="#home" className="nav-logo">Lidiane e Pedro Henrique</a>
          
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
            <a href="#hospedagem" onClick={closeMobileMenu}>Hospedagem</a>
            <a href="#local" onClick={closeMobileMenu}>Localização</a>
            <Link to="/presentes" onClick={closeMobileMenu}>Chá de Panela</Link>
            <a href="#rsvp" onClick={closeMobileMenu}>Confirmação</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-bg-responsive"></div>
        <div className="hero-overlay"></div>
        
        <div className="container">
          <p className="hero-pretitle" data-aos="fade-down">Dois caminhos, uma história e um amor que escolheu permanecer.</p>
          <h1 data-aos="zoom-in" data-aos-delay="100" className="hero-title">Lidiane e Pedro Henrique</h1>
          
          <div className="countdown-premium" data-aos="fade-up" data-aos-delay="200">
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

          <div className="hero-info" data-aos="fade-up" data-aos-delay="300">
            <p className="details">24 de Abril de 2027 • 16:00h</p>
            <p>Chácara Só Evento, Planaltina - DF</p>
          </div>

          <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
            <a href="#rsvp" className="btn btn-primary"><Heart size={18} /> Confirmar Presença</a>
            <Link to="/presentes" className="btn btn-white"><Gift size={18} /> Chá de Panela</Link>
          </div>
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
              <img src="/img_hist.jpeg" alt="Lidiane e Pedro Henrique" className="story-img" />
            </div>
            <div className="story-text" data-aos="fade-left">
              <h3>Do primeiro "oi" ao sim!</h3>
              <p>Quem diria que um simples “oi” em uma mesa de bar, entre copos cheios de cerveja, risadas sinceras e conversas sem hora para acabar, seria o começo da história mais linda das nossas vidas?</p>
              <p>O que parecia apenas uma breve amizade foi crescendo aos poucos. Entre encontros, olhares e conversas, nasceu uma admiração diferente… um carinho leve, verdadeiro e inevitável. Sem perceber, dois corações começaram a se encontrar no meio da rotina, e ali surgia algo muito maior do que qualquer um de nós poderia imaginar: o amor.</p>
              <p>Nossa história começou de forma única no dia 10 de agosto de 2024, quando o primeiro beijo marcou o início do nosso para sempre. Naquele instante, tivemos a certeza de que existia algo especial entre nós, algo raro, intenso e verdadeiro.</p>
              <p>Não demorou para entendermos que nossos caminhos já pertenciam um ao outro, e no dia 24 de novembro de 2025, oficializamos nosso namoro, transformando sentimento em parceria, carinho em abrigo e amor em lar.</p>
              <p>Mas o destino ainda preparava um dos momentos mais inesquecíveis das nossas vidas.</p>
              <p>Em março de 2026, no inesquecível Restaurante Verona, em um cenário digno dos nossos sonhos, cercados pela luz das velas, pelo som emocionante de um violino, pelas alianças e por cada detalhe preparado com amor, vivemos o momento que ficará eternizado em nossas almas: o nosso “SIM”.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor com o SIM em Destaque */}
      <section className="story-quote-divider bg-blush-soft" data-aos="zoom-in">
        <div className="container">
          <Heart size={36} className="heart-pulse" style={{ color: 'var(--blush)', margin: '0 auto 24px', display: 'block' }} />
          <p className="quote-line">Um “sim” cheio de emoção.</p>
          <p className="quote-line">Um “sim” carregado de promessas.</p>
          <p className="quote-line">Um “sim” que selou a certeza de que queremos viver todos os dias da nossa vida um ao lado do outro.</p>
        </div>
      </section>

      {/* Celebrando o Amor */}
      <section id="celebracao" className="bg-cream">
        <div className="container">
          <div className="story-celebration-container" data-aos="fade-up">
            <p>E agora… chegou o momento de celebrar o amor que nos trouxe até aqui.</p>
            <p>Com o coração transbordando felicidade, amor e gratidão, queremos compartilhar com vocês o início do capítulo mais importante das nossas vidas: o nosso casamento.</p>
            <p>Preparem os sorrisos, os abraços e a emoção, porque mal podemos esperar para viver esse sonho ao lado das pessoas que amamos.</p>
            <h4 className="celebration-welcome">Sejam bem-vindos ao começo do nosso felizes para sempre!!!!</h4>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <a href="#rsvp" className="btn btn-primary">
                <Heart size={18} /> Quero Confirmar Presença
              </a>
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
              <p>O convite é para as 16h e o início da cerimônia ao ar livre (no gramado) será por volta das 16h30.</p>
              <div className="card-actions">
                <a href={WEDDING_DATA.location.googleCalendarUrl} target="_blank" rel="noreferrer" className="btn btn-outline full-width">
                  <Calendar size={18} /> Salvar na Agenda
                </a>
                <a href="#rsvp" className="btn btn-primary full-width" style={{ marginTop: '10px' }}>
                  <Heart size={18} /> Confirmar Presença
                </a>
              </div>
            </div>

            <div className="premium-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-icon"><Heart size={32} /></div>
              <h3>Recepção</h3>
              <p>Logo após a cerimônia, nos reuniremos no Salão Principal para um coquetel seguido de jantar e muita festa.</p>
              <div className="card-actions">
                <a href="#local" className="btn btn-outline full-width">
                  <MapPin size={18} /> Ver Localização
                </a>
                <a href="#rsvp" className="btn btn-primary full-width" style={{ marginTop: '10px' }}>
                  <Heart size={18} /> Confirmar Presença
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospedagem & Camping */}
      <section id="hospedagem" className="bg-blush-soft">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">Fiquem conosco</p>
            <h2 className="section-title">Hospedagem & Camping</h2>
          </div>
          <div className="premium-card" style={{ maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
            <div className="card-icon"><Plane size={32} /></div>
            <h3>Pernoite na Chácara</h3>
            <p>Queremos aproveitar cada segundo com vocês! Para os aventureiros e aqueles que desejam estender a celebração, a chácara possui uma área gramada preparada para receber barracas. Sintam-se à vontade para trazer seu equipamento e dormir no local sob as estrelas.</p>
            <p style={{ fontStyle: 'italic', fontSize: '0.85rem', marginBottom: '20px' }}>*Por favor, nos avise na confirmação de presença se pretende acampar.</p>
            <a href="#rsvp" className="btn btn-primary">
              <Heart size={18} /> Confirmar e Avisar sobre Camping
            </a>
          </div>
        </div>
      </section>

      {/* Cortejo Especial */}
      <section id="cortejo">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">Momentos de afeto</p>
            <h2 className="section-title">Cortejo Especial</h2>
          </div>
          <div className="premium-card" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--cream)' }} data-aos="fade-up">
            <div className="card-icon"><Heart size={32} /></div>
            <h3>Uma Entrada Repleta de Amor</h3>
            <p>Nossa cerimônia será marcada por significados. Teremos a honra de receber nossos pais, a doçura da nossa avó, a alegria dos nossos filhos e a companhia de 8 casais de padrinhos que fazem parte da nossa história. Cada passo no corredor será um reflexo do amor que nos rodeia.</p>
            <a href="#rsvp" className="btn btn-primary" style={{ marginTop: '10px' }}>
              <Heart size={18} /> Confirmar minha presença
            </a>
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
              <a href="#rsvp" className="btn btn-white full-width" style={{ marginTop: '20px', border: '1px solid var(--olive)' }}>
                <Heart size={18} /> Confirmar Presença
              </a>
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

      {/* Chá de Panela */}
      <section id="presentes" className="bg-cream">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">Mimos para o nosso cantinho</p>
            <h2 className="section-title">Chá de Panela</h2>
            <p className="section-subtitle" style={{ textTransform: 'none', letterSpacing: 'normal', color: 'var(--text)', marginTop: '20px' }}>
              Sua presença é o nosso maior presente! Mas se desejar nos mimar com um mimo para a nossa cozinha e casa nova, preparamos uma lista cheia de carinho.
            </p>
          </div>

          <div className="premium-card" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', padding: '48px 32px', background: 'white', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }} data-aos="fade-up">
            <div style={{ margin: '0 auto 20px', background: 'var(--blush-soft)', color: 'var(--olive)', width: '68px', height: '68px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Gift size={34} />
            </div>
            <h3 style={{ fontSize: '1.9rem', marginBottom: '14px', fontFamily: 'var(--font-serif)', color: 'var(--text)' }}>
              Presentes do Chá de Panela
            </h3>
            <p style={{ maxWidth: '640px', margin: '0 auto 28px', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Selecionamos com muito amor cada item para equipar a nossa cozinha (jogos de copos, taças, xícaras, utensílios práticos, panos de prato, potes herméticos e organizadores de gaveta) diretamente na Shopee com fotos reais.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/presentes" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <Gift size={20} /> Ver Lista do Chá de Panela
              </Link>
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
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Ex: Ana Maria Silva" 
                      required 
                      value={rsvpForm.name}
                      onChange={(e) => setRsvpForm(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">WhatsApp (com DDD)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="(61) 99999-9999" 
                      required 
                      value={rsvpForm.phone}
                      onChange={(e) => setRsvpForm(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="attending">Você irá ao evento?</label>
                    <select 
                      id="attending" 
                      required 
                      value={isAttending ? 'sim' : 'nao'}
                      onChange={(e) => setIsAttending(e.target.value === 'sim')}
                    >
                      <option value="sim">Sim, estarei lá!</option>
                      <option value="nao">Infelizmente, não poderei.</option>
                    </select>
                  </div>

                  {isAttending && (
                    <div className="form-group full">
                      <label>Acompanhantes</label>
                      <div className="companion-selector-container">
                        {/* Maiores */}
                        <div className="companion-row">
                          <div className="companion-info">
                            <span className="companion-title">Maiores</span>
                            <span className="companion-subtitle">A partir de 18 anos</span>
                          </div>
                          <div className="counter-controls">
                            <button 
                              type="button" 
                              className="counter-btn"
                              onClick={() => handleAdultChange(-1)}
                              disabled={adults === 0}
                              aria-label="Diminuir acompanhantes maiores"
                            >
                              -
                            </button>
                            <span className="counter-value">{adults}</span>
                            <button 
                              type="button" 
                              className="counter-btn"
                              onClick={() => handleAdultChange(1)}
                              aria-label="Aumentar acompanhantes maiores"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Menores */}
                        <div className="companion-row">
                          <div className="companion-info">
                            <span className="companion-title">Menores</span>
                            <span className="companion-subtitle">Até 17 anos</span>
                          </div>
                          <div className="counter-controls">
                            <button 
                              type="button" 
                              className="counter-btn"
                              onClick={() => handleChildrenChange(-1)}
                              disabled={children === 0}
                              aria-label="Diminuir acompanhantes menores"
                            >
                              -
                            </button>
                            <span className="counter-value">{children}</span>
                            <button 
                              type="button" 
                              className="counter-btn"
                              onClick={() => handleChildrenChange(1)}
                              aria-label="Aumentar acompanhantes menores"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isAttending && (
                    <div className="form-group full">
                      <label htmlFor="diet">Restrição Alimentar? (Opcional)</label>
                      <input 
                        type="text" 
                        id="diet" 
                        placeholder="Ex: Vegano, Alérgico a glúten..." 
                        value={rsvpForm.diet}
                        onChange={(e) => setRsvpForm(prev => ({ ...prev, diet: e.target.value }))}
                      />
                    </div>
                  )}

                  <div className="form-group full">
                    <label htmlFor="msg">Mensagem para os Noivos (Opcional)</label>
                    <textarea 
                      id="msg" 
                      rows={4} 
                      placeholder="Deixe um recado carinhoso para Lidiane e Pedro..."
                      value={rsvpForm.message}
                      onChange={(e) => setRsvpForm(prev => ({ ...prev, message: e.target.value }))}
                    ></textarea>
                  </div>

                  <div className="privacy-disclaimer full">
                    <Lock size={14} /> Seus dados estão seguros e serão usados apenas para a lista de convidados.
                  </div>

                  {rsvpError && (
                    <div className="full" style={{ color: '#d32f2f', background: '#ffebee', padding: '12px 16px', borderRadius: '8px', fontSize: '0.9rem' }}>
                      {rsvpError}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary full" 
                    style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    disabled={rsvpLoading}
                  >
                    {rsvpLoading ? (
                      <>
                        <Loader2 size={18} className="spin" /> Gravando Confirmação...
                      </>
                    ) : (
                      'Confirmar Agora'
                    )}
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
                  onClick={() => {
                    setRsvpSubmitted(false);
                    setRsvpForm({ name: '', phone: '', diet: '', message: '' });
                    setAdults(0);
                    setChildren(0);
                  }}
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
          <div className="footer-logo">Lidiane e Pedro Henrique</div>
          <p className="footer-info">24 de Abril de 2027 • Planaltina - DF</p>
          
          <div className="social-links">
            <a href={WEDDING_DATA.links.instagram} target="_blank" rel="noreferrer" className="social-circle" aria-label="Instagram"><Camera size={20} /></a>
            <a href="#" className="social-circle" aria-label="Heart"><Heart size={20} /></a>
          </div>

          <div className="copyright">
            <p>Criado com carinho para o nosso grande dia.</p>
            <p>&copy; 2026 • Todos os direitos reservados</p>
            <p style={{ marginTop: '10px' }}>
              <Link to="/confirmados" style={{ color: 'var(--olive)', fontSize: '0.8rem', textDecoration: 'underline' }}>
                Ver Lista de Convidados Confirmados
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const AlbumPage: React.FC = () => {
  return (
    <div className="wedding-app min-h-screen bg-cream">
      <nav className="navbar scrolled">
        <div className="container nav-content">
          <Link to="/" className="nav-logo" style={{ color: 'var(--olive)' }}>Lidiane e Pedro Henrique</Link>
          <Link to="/" className="btn btn-outline btn-sm" style={{ padding: '8px 20px', fontSize: '0.75rem' }}>
            <ArrowLeft size={16} /> Voltar ao Site
          </Link>
        </div>
      </nav>
      <div style={{ paddingTop: '100px' }}>
        <DigitalAlbum />
      </div>
      <footer style={{ marginTop: 'auto' }}>
        <div className="container">
          <div className="footer-logo" style={{ fontSize: '2.5rem' }}>Lidiane e Pedro Henrique</div>
          <div className="copyright">
            <p>&copy; 2026 • Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/presentes" element={<GiftsPage />} />
        <Route path="/lista-de-presentes" element={<GiftsPage />} />
        <Route path="/confirmados" element={<ConfirmedGuestsPage />} />
        <Route path="/lista-confirmados" element={<ConfirmedGuestsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
