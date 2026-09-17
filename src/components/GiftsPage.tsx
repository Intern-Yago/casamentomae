import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Search, Gift, ExternalLink, Heart, Check, 
  Sparkles, ShoppingBag, UtensilsCrossed, SlidersHorizontal,
  X, CheckCircle2
} from 'lucide-react';
import { GIFTS_DATA, GIFT_CATEGORIES } from '../constants/gifts';

const GiftsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'highlights' | 'chosen' | 'available'>('all');
  const [sortBy, setSortBy] = useState<'highlights' | 'name-asc' | 'name-desc'>('highlights');

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
    let list = GIFTS_DATA.filter(gift => {
      // Category filter
      const matchesCategory = selectedCategory === 'Todos' || gift.category === selectedCategory;
      
      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        gift.title.toLowerCase().includes(q) ||
        gift.description.toLowerCase().includes(q) ||
        gift.category.toLowerCase().includes(q);

      // Status filter
      let matchesStatus = true;
      if (statusFilter === 'highlights') matchesStatus = !!gift.highlight;
      else if (statusFilter === 'chosen') matchesStatus = !!chosenItems[gift.id];
      else if (statusFilter === 'available') matchesStatus = !chosenItems[gift.id];

      return matchesCategory && matchesSearch && matchesStatus;
    });

    // Sort
    list = [...list].sort((a, b) => {
      if (sortBy === 'highlights') {
        if (a.highlight && !b.highlight) return -1;
        if (!a.highlight && b.highlight) return 1;
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'name-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'name-desc') return b.title.localeCompare(a.title);
      return 0;
    });

    return list;
  }, [selectedCategory, searchQuery, statusFilter, sortBy, chosenItems]);

  const chosenCount = Object.values(chosenItems).filter(Boolean).length;
  const hasActiveFilters = selectedCategory !== 'Todos' || searchQuery !== '' || statusFilter !== 'all';

  return (
    <div className="wedding-app min-h-screen bg-cream">
      {/* Top Navbar */}
      <header className="navbar scrolled sticky-top">
        <div className="container nav-content">
          <Link to="/" className="nav-logo" style={{ color: 'var(--olive)' }}>
            Lidiane & Pedro Henrique
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/" className="btn btn-outline btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Voltar ao Início
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="gifts-page-hero text-center" style={{ padding: '60px 20px 40px', background: 'var(--blush-soft)' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            background: 'white', 
            color: 'var(--olive)', 
            marginBottom: '16px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)' 
          }}>
            <Gift size={30} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--text)', marginBottom: '14px' }}>
            Lista de Presentes de Casamento
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '20px' }}>
            Sua presença no nosso grande dia é o nosso maior presente! Mas caso queira nos mimar com um item especial para o nosso novo lar, preparamos esta lista com fotos reais e links diretos da Shopee.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.85)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--olive)', fontWeight: 600 }}>
            <Sparkles size={16} />
            <span>{GIFTS_DATA.length} presentes selecionados com carinho</span>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <main className="container" style={{ padding: '40px 20px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Filter Panel */}
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          marginBottom: '36px'
        }}>
          {/* Top Row: Search + Sort */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="text"
                placeholder="Buscar presente (ex: copos, taças, xícaras, potes, pano de prato...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 44px',
                  borderRadius: '30px',
                  border: '1px solid #e0d8cb',
                  background: '#faf8f5',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Status & Sort Controls */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <SlidersHorizontal size={16} style={{ color: '#888' }} />
                <span style={{ fontSize: '0.85rem', color: '#666' }}>Ordenar:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '20px',
                  border: '1px solid #e0d8cb',
                  background: '#faf8f5',
                  fontSize: '0.85rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="highlights">⭐ Destaques Primeiro</option>
                <option value="name-asc">Nome (A - Z)</option>
                <option value="name-desc">Nome (Z - A)</option>
              </select>
            </div>
          </div>

          {/* Status Quick Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px', paddingBottom: '16px', borderBottom: '1px solid #f0ebe4' }}>
            <button
              onClick={() => setStatusFilter('all')}
              style={{
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '0.82rem',
                fontWeight: statusFilter === 'all' ? 600 : 400,
                background: statusFilter === 'all' ? 'var(--olive)' : '#f2eee9',
                color: statusFilter === 'all' ? '#fff' : '#555',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Todos os Presentes ({GIFTS_DATA.length})
            </button>

            <button
              onClick={() => setStatusFilter('highlights')}
              style={{
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '0.82rem',
                fontWeight: statusFilter === 'highlights' ? 600 : 400,
                background: statusFilter === 'highlights' ? 'var(--olive)' : '#f2eee9',
                color: statusFilter === 'highlights' ? '#fff' : '#555',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              ⭐ Destaques dos Noivos
            </button>

            <button
              onClick={() => setStatusFilter('chosen')}
              style={{
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '0.82rem',
                fontWeight: statusFilter === 'chosen' ? 600 : 400,
                background: statusFilter === 'chosen' ? 'var(--olive)' : '#f2eee9',
                color: statusFilter === 'chosen' ? '#fff' : '#555',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <CheckCircle2 size={14} /> Marcados por mim ({chosenCount})
            </button>
          </div>

          {/* Categories Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {GIFT_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '20px',
                  fontSize: '0.84rem',
                  fontWeight: selectedCategory === category ? '600' : '400',
                  border: selectedCategory === category ? '1px solid var(--olive)' : '1px solid #e4ddd2',
                  backgroundColor: selectedCategory === category ? 'var(--olive)' : '#fff',
                  color: selectedCategory === category ? '#fff' : 'var(--text)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Summary Bar */}
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#777' }}>
            <span>Exibindo <strong>{filteredGifts.length}</strong> de {GIFTS_DATA.length} produtos</span>
            {hasActiveFilters && (
              <button 
                onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); setStatusFilter('all'); }}
                style={{ background: 'none', border: 'none', color: 'var(--olive)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.82rem' }}
              >
                Limpar todos os filtros
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredGifts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'white', borderRadius: '20px' }}>
            <UtensilsCrossed size={48} style={{ color: '#ccc', margin: '0 auto 16px', display: 'block' }} />
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text)', marginBottom: '8px' }}>Nenhum presente encontrado com os filtros selecionados</h3>
            <p style={{ color: '#888', marginBottom: '20px' }}>Tente pesquisar por outro termo ou limpar os filtros para ver a lista completa.</p>
            <button 
              className="btn btn-outline"
              onClick={() => { setSearchQuery(''); setSelectedCategory('Todos'); setStatusFilter('all'); }}
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
                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    position: 'relative',
                    border: isChosen ? '2px solid var(--olive)' : '1px solid #efe8de'
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

                  {/* Real Product Image from Shopee */}
                  <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden', background: '#faf8f5' }}>
                    <img 
                      src={gift.image} 
                      alt={gift.title}
                      loading="lazy"
                      onError={(e) => {
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
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--olive)'
                    }}>
                      {gift.category}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      color: 'var(--text)',
                      marginBottom: '8px',
                      lineHeight: '1.35',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }} title={gift.title}>
                      {gift.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--muted)',
                      lineHeight: '1.5',
                      marginBottom: '18px',
                      flexGrow: 1
                    }}>
                      {gift.description}
                    </p>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                          padding: '11px 16px',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          fontWeight: '600'
                        }}
                      >
                        <ShoppingBag size={17} />
                        Presentear na Shopee
                        <ExternalLink size={14} style={{ opacity: 0.8 }} />
                      </a>

                      <button
                        type="button"
                        onClick={() => toggleChosen(gift.id)}
                        style={{
                          background: isChosen ? '#edf5ed' : 'transparent',
                          border: isChosen ? '1px solid var(--olive)' : '1px solid #e0d8cb',
                          color: isChosen ? 'var(--olive)' : '#666',
                          borderRadius: '8px',
                          padding: '7px 12px',
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
                            <Check size={14} /> Marcado como meu presente!
                          </>
                        ) : (
                          <>
                            Marcar como meu presente
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

        {/* Bottom Call to Action */}
        <div style={{
          marginTop: '60px',
          background: 'var(--blush-soft)',
          padding: '40px 24px',
          borderRadius: '20px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
        }}>
          <Heart size={32} style={{ color: 'var(--blush)', margin: '0 auto 12px', display: 'block' }} />
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text)', marginBottom: '8px' }}>
            Esperamos você no nosso grande dia!
          </h3>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 20px' }}>
            Não deixe de confirmar sua presença até 24 de Março de 2027 para celebrarmos juntos.
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
          <div style={{ marginTop: '14px' }}>
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
