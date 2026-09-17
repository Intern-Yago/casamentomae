import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Search, Gift, ExternalLink, Heart, Check, 
  Sparkles, ShoppingBag, UtensilsCrossed 
} from 'lucide-react';
import { GIFTS_DATA, GIFT_CATEGORIES } from '../constants/gifts';

const GiftsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [chosenItems, setChosenItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('chosen_gifts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChosen = (id: string) => {
    setChosenItems(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('chosen_gifts', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const filteredGifts = useMemo(() => {
    return GIFTS_DATA.filter(gift => {
      const matchesCategory = selectedCategory === 'Todos' || gift.category === selectedCategory;
      const matchesSearch = gift.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            gift.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            gift.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="wedding-app min-h-screen bg-cream">
      {/* Top Bar */}
      <header className="navbar scrolled sticky-top">
        <div className="container nav-content">
          <Link to="/" className="nav-logo" style={{ color: 'var(--olive)' }}>
            Lidiane & Pedro Henrique
          </Link>
          <Link to="/" className="btn btn-outline btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={16} /> Voltar ao Início
          </Link>
        </div>
      </header>

      {/* Hero Header */}
      <section className="gifts-page-hero text-center" style={{ padding: '60px 20px 40px', background: 'var(--blush-soft)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'white', color: 'var(--olive)', marginBottom: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Gift size={28} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--text)', marginBottom: '16px' }}>
            Lista de Presentes
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            A sua presença é o maior presente que poderíamos receber! Mas se você deseja nos presentear com um mimo para o nosso novo cantinho, selecionamos com muito carinho cada item da nossa cozinha e lar na Shopee.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--olive)', fontWeight: 500 }}>
            <Sparkles size={18} />
            <span>Itens selecionados diretamente na Shopee com entrega fácil</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container" style={{ padding: '40px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Search & Filter Bar */}
        <div className="gifts-filter-card" style={{ background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', marginBottom: '36px' }}>
          {/* Search Box */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input 
              type="text"
              placeholder="Pesquisar presente (ex: potes, tesoura, pano de prato, forma...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 48px',
                borderRadius: '30px',
                border: '1px solid #e0d8cb',
                background: '#faf8f5',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.2s',
                fontFamily: 'inherit'
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#888', fontSize: '0.85rem' }}
              >
                Limpar
              </button>
            )}
          </div>

          {/* Categories Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {GIFT_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: selectedCategory === category ? '600' : '400',
                  border: selectedCategory === category ? '1px solid var(--olive)' : '1px solid #e4ddd2',
                  backgroundColor: selectedCategory === category ? 'var(--olive)' : '#fff',
                  color: selectedCategory === category ? '#fff' : 'var(--text)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedCategory === category ? '0 2px 8px rgba(107, 122, 91, 0.25)' : 'none'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Counter info */}
          <div style={{ marginTop: '18px', fontSize: '0.85rem', color: '#777', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Mostrando <strong>{filteredGifts.length}</strong> de {GIFTS_DATA.length} presentes</span>
            {selectedCategory !== 'Todos' && (
              <button 
                onClick={() => setSelectedCategory('Todos')}
                style={{ background: 'none', border: 'none', color: 'var(--olive)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                Ver todos
              </button>
            )}
          </div>
        </div>

        {/* Gifts Grid */}
        {filteredGifts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'white', borderRadius: '16px' }}>
            <UtensilsCrossed size={48} style={{ color: '#ccc', margin: '0 auto 16px', display: 'block' }} />
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text)', marginBottom: '8px' }}>Nenhum presente encontrado</h3>
            <p style={{ color: '#888', marginBottom: '20px' }}>Tente buscar por outro termo ou selecione a categoria "Todos".</p>
            <button 
              className="btn btn-outline"
              onClick={() => { setSearchQuery(''); setSelectedCategory('Todos'); }}
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="gifts-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {filteredGifts.map((gift) => {
              const isChosen = !!chosenItems[gift.id];
              return (
                <div 
                  key={gift.id}
                  className="gift-card"
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    position: 'relative',
                    border: isChosen ? '2px solid var(--olive)' : '1px solid #f0eae1'
                  }}
                >
                  {/* Highlight Badge */}
                  {gift.highlight && (
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'var(--olive)',
                      color: 'white',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      zIndex: 2,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}>
                      <Heart size={12} fill="white" /> Queridinho dos Noivos
                    </span>
                  )}

                  {/* Card Image */}
                  <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: '#f5f2ed' }}>
                    <img 
                      src={gift.image} 
                      alt={gift.title}
                      loading="lazy"
                      onError={(e) => {
                        // Fallback image if unsplash fails
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(4px)',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--olive)'
                    }}>
                      {gift.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      color: 'var(--text)',
                      marginBottom: '8px',
                      lineHeight: '1.3'
                    }}>
                      {gift.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '0.88rem',
                      color: 'var(--muted)',
                      lineHeight: '1.5',
                      marginBottom: '20px',
                      flexGrow: 1
                    }}>
                      {gift.description}
                    </p>

                    {/* Actions */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <a 
                        href={gift.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary full-width"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          textDecoration: 'none',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          fontSize: '0.92rem',
                          fontWeight: '600'
                        }}
                      >
                        <ShoppingBag size={18} />
                        Presentear na Shopee
                        <ExternalLink size={15} style={{ opacity: 0.8 }} />
                      </a>

                      <button
                        type="button"
                        onClick={() => toggleChosen(gift.id)}
                        style={{
                          background: isChosen ? '#edf5ed' : 'transparent',
                          border: isChosen ? '1px solid var(--olive)' : '1px solid #ddd',
                          color: isChosen ? 'var(--olive)' : '#666',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          transition: 'all 0.2s'
                        }}
                      >
                        {isChosen ? (
                          <>
                            <Check size={14} /> Marcado como escolhido por você!
                          </>
                        ) : (
                          <>
                            Marcar como meu presente escolhido
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA to RSVP */}
        <div style={{
          marginTop: '60px',
          background: 'var(--blush-soft)',
          padding: '40px 24px',
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
        }}>
          <Heart size={32} style={{ color: 'var(--blush)', margin: '0 auto 12px', display: 'block' }} />
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text)', marginBottom: '8px' }}>
            Sua presença é essencial!
          </h3>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 20px' }}>
            Não deixe de confirmar sua presença até 24 de Março de 2027 para celebrarmos juntos esse grande dia.
          </p>
          <Link to="/#rsvp" className="btn btn-primary" style={{ padding: '12px 28px' }}>
            <Heart size={18} /> Confirmar Minha Presença
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: '#fff', borderTop: '1px solid #eae2d5', padding: '30px 20px', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--olive)', marginBottom: '6px' }}>
            Lidiane e Pedro Henrique
          </p>
          <p style={{ fontSize: '0.85rem', color: '#999' }}>
            24 de Abril de 2027 • Planaltina - DF
          </p>
          <div style={{ marginTop: '16px' }}>
            <Link to="/" style={{ color: 'var(--olive)', fontSize: '0.85rem', textDecoration: 'underline' }}>
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GiftsPage;
