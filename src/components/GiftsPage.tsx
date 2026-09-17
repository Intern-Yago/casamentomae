import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Search, Gift, ExternalLink, Heart, Check, 
  Sparkles, ShoppingBag, UtensilsCrossed, SlidersHorizontal,
  X, CheckCircle2, User, Phone, Loader2
} from 'lucide-react';
import { GIFTS_DATA, GIFT_CATEGORIES, type GiftItem } from '../constants/gifts';
import { supabase } from '../lib/supabase';

interface GiftClaim {
  id: string;
  gift_id: string;
  gift_title: string;
  giver_name: string;
  giver_phone?: string;
  created_at: string;
}

const GiftsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'claimed' | 'mine' | 'highlights'>('all');
  const [sortBy, setSortBy] = useState<'highlights' | 'name-asc' | 'name-desc'>('highlights');

  // Stored guest identity
  const [guestName, setGuestName] = useState<string>(() => {
    try {
      return localStorage.getItem('guest_name') || '';
    } catch {
      return '';
    }
  });

  const [guestPhone, setGuestPhone] = useState<string>(() => {
    try {
      return localStorage.getItem('guest_phone') || '';
    } catch {
      return '';
    }
  });

  // Supabase claims
  const [claims, setClaims] = useState<Record<string, GiftClaim>>({});
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [pendingGift, setPendingGift] = useState<GiftItem | null>(null);
  const [modalName, setModalName] = useState<string>('');
  const [modalPhone, setModalPhone] = useState<string>('');
  const [modalError, setModalError] = useState<string | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Fetch claims from Supabase
  const fetchClaims = async () => {
    try {
      const { data, error } = await supabase
        .from('gift_claims')
        .select('*');

      if (!error && data) {
        const map: Record<string, GiftClaim> = {};
        data.forEach((c: GiftClaim) => {
          map[c.gift_id] = c;
        });
        setClaims(map);
      }
    } catch (e) {
      console.error('Error fetching gift claims:', e);
    }
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  // Claim a gift directly (when name is known)
  const executeClaim = async (gift: GiftItem, name: string, phone?: string) => {
    setActionLoading(gift.id);
    try {
      const { data, error } = await supabase
        .from('gift_claims')
        .insert([{
          gift_id: gift.id,
          gift_title: gift.title,
          giver_name: name.trim(),
          giver_phone: phone ? phone.trim() : null
        }])
        .select();

      if (error) throw error;

      if (data && data[0]) {
        setClaims(prev => ({ ...prev, [gift.id]: data[0] }));
        showToast(`Presente "${gift.title}" marcado com sucesso para você, ${name.trim()}!`);
      }
    } catch (err: any) {
      console.error('Claim error:', err);
      showToast('Ocorreu um erro ao reservar o presente. Tente novamente.');
    } finally {
      setActionLoading(null);
    }
  };

  // Unclaim a gift
  const handleUnclaim = async (gift: GiftItem) => {
    const claim = claims[gift.id];
    if (!claim) return;

    if (!window.confirm(`Deseja desmarcar o presente "${gift.title}"? Ele voltará a ficar disponível para outros convidados.`)) {
      return;
    }

    setActionLoading(gift.id);
    try {
      const { error } = await supabase
        .from('gift_claims')
        .delete()
        .eq('gift_id', gift.id);

      if (error) throw error;

      setClaims(prev => {
        const copy = { ...prev };
        delete copy[gift.id];
        return copy;
      });
      showToast(`Presente desmarcado com sucesso.`);
    } catch (err: any) {
      console.error('Unclaim error:', err);
      showToast('Não foi possível desmarcar o presente. Tente novamente.');
    } finally {
      setActionLoading(null);
    }
  };

  // Click on "Marcar presente"
  const handleClaimClick = (gift: GiftItem) => {
    if (claims[gift.id]) {
      // If already claimed by me, allow unclaim
      const isMine = guestName && claims[gift.id].giver_name.toLowerCase() === guestName.toLowerCase();
      if (isMine) {
        handleUnclaim(gift);
      }
      return;
    }

    if (guestName.trim()) {
      // Known name: claim right away
      executeClaim(gift, guestName, guestPhone);
    } else {
      // Open modal to ask for name
      setPendingGift(gift);
      setModalName('');
      setModalPhone('');
      setModalError(null);
      setModalOpen(true);
    }
  };

  // Submit modal form
  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalName.trim()) {
      setModalError('Por favor, digite seu nome completo.');
      return;
    }

    const trimmedName = modalName.trim();
    const trimmedPhone = modalPhone.trim();

    try {
      localStorage.setItem('guest_name', trimmedName);
      if (trimmedPhone) localStorage.setItem('guest_phone', trimmedPhone);
    } catch (e) {
      console.error(e);
    }

    setGuestName(trimmedName);
    setGuestPhone(trimmedPhone);
    setModalOpen(false);

    if (pendingGift) {
      executeClaim(pendingGift, trimmedName, trimmedPhone);
      setPendingGift(null);
    }
  };

  // Reset guest identity
  const handleResetGuest = () => {
    try {
      localStorage.removeItem('guest_name');
      localStorage.removeItem('guest_phone');
    } catch (e) {}
    setGuestName('');
    setGuestPhone('');
    showToast('Identificação limpa.');
  };

  // Filter & Sort
  const filteredGifts = useMemo(() => {
    let list = GIFTS_DATA.filter(gift => {
      // Category
      const matchesCategory = selectedCategory === 'Todos' || gift.category === selectedCategory;
      
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        gift.title.toLowerCase().includes(q) ||
        gift.description.toLowerCase().includes(q) ||
        gift.category.toLowerCase().includes(q);

      // Status
      const claim = claims[gift.id];
      const isMine = guestName && claim && claim.giver_name.toLowerCase() === guestName.toLowerCase();
      
      let matchesStatus = true;
      if (statusFilter === 'available') matchesStatus = !claim;
      else if (statusFilter === 'claimed') matchesStatus = !!claim;
      else if (statusFilter === 'mine') matchesStatus = !!isMine;
      else if (statusFilter === 'highlights') matchesStatus = !!gift.highlight;

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
  }, [selectedCategory, searchQuery, statusFilter, sortBy, claims, guestName]);

  // Counts
  const claimedCount = Object.keys(claims).length;
  const availableCount = GIFTS_DATA.length - claimedCount;
  const myClaimedCount = guestName 
    ? Object.values(claims).filter(c => c.giver_name.toLowerCase() === guestName.toLowerCase()).length 
    : 0;

  const hasActiveFilters = selectedCategory !== 'Todos' || searchQuery !== '' || statusFilter !== 'all';

  return (
    <div className="wedding-app min-h-screen bg-cream">
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: 'var(--text)',
          color: 'white',
          padding: '14px 24px',
          borderRadius: '30px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.92rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <CheckCircle2 size={18} color="var(--olive)" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Name Input Modal */}
      {modalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 9999
        }}>
          <div style={{
            background: 'white',
            borderRadius: '24px',
            maxWidth: '480px',
            width: '100%',
            padding: '32px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            position: 'relative'
          }}>
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f4f0eb',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--blush-soft)',
                color: 'var(--olive)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px'
              }}>
                <Gift size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text)', marginBottom: '8px' }}>
                Quem está presenteando?
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.5' }}>
                {pendingGift ? (
                  <>Você está escolhendo <strong>{pendingGift.title}</strong>. Digite seu nome para que os noivos saibam quem escolheu este presente com tanto carinho!</>
                ) : (
                  'Digite seu nome para identificar os presentes escolhidos.'
                )}
              </p>
            </div>

            <form onSubmit={handleModalSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                  Seu Nome Completo *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                  <input 
                    type="text"
                    required
                    placeholder="Ex: Maria Clara Souza"
                    value={modalName}
                    onChange={(e) => setModalName(e.target.value)}
                    autoFocus
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 42px',
                      borderRadius: '12px',
                      border: '1px solid #dcd3c7',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                  Seu WhatsApp (opcional)
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                  <input 
                    type="tel"
                    placeholder="(61) 99999-9999"
                    value={modalPhone}
                    onChange={(e) => setModalPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 42px',
                      borderRadius: '12px',
                      border: '1px solid #dcd3c7',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              {modalError && (
                <div style={{ color: '#d32f2f', background: '#ffebee', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '16px' }}>
                  {modalError}
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  className="btn btn-outline full-width"
                  onClick={() => setModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary full-width"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <Check size={18} /> Confirmar Presente
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            Sua presença no nosso grande dia é o nosso maior presente! Mas caso queira nos mimar com um item especial para o nosso novo cantinho, selecionamos estes produtos na Shopee com fotos reais.
          </p>

          {/* Guest Identity Welcome Bar */}
          {guestName ? (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'white',
              padding: '8px 20px',
              borderRadius: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              fontSize: '0.9rem',
              color: 'var(--text)'
            }}>
              <span>Olá, <strong>{guestName}</strong>!</span>
              <span style={{ color: '#ccc' }}>•</span>
              <button
                onClick={handleResetGuest}
                style={{ background: 'none', border: 'none', color: 'var(--olive)', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.82rem' }}
              >
                Trocar de nome
              </button>
            </div>
          ) : (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.85)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--olive)', fontWeight: 600 }}>
              <Sparkles size={16} />
              <span>{GIFTS_DATA.length} presentes cadastrados com fotos reais</span>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
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
            {/* Search Input */}
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

            {/* Sort Dropdown */}
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
              Todos ({GIFTS_DATA.length})
            </button>

            <button
              onClick={() => setStatusFilter('available')}
              style={{
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '0.82rem',
                fontWeight: statusFilter === 'available' ? 600 : 400,
                background: statusFilter === 'available' ? 'var(--olive)' : '#f2eee9',
                color: statusFilter === 'available' ? '#fff' : '#555',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Disponíveis ({availableCount})
            </button>

            <button
              onClick={() => setStatusFilter('claimed')}
              style={{
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '0.82rem',
                fontWeight: statusFilter === 'claimed' ? 600 : 400,
                background: statusFilter === 'claimed' ? 'var(--olive)' : '#f2eee9',
                color: statusFilter === 'claimed' ? '#fff' : '#555',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Já Escolhidos ({claimedCount})
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

            {guestName && (
              <button
                onClick={() => setStatusFilter('mine')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '16px',
                  fontSize: '0.82rem',
                  fontWeight: statusFilter === 'mine' ? 600 : 400,
                  background: statusFilter === 'mine' ? 'var(--olive)' : '#f2eee9',
                  color: statusFilter === 'mine' ? '#fff' : '#555',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <CheckCircle2 size={14} /> Meus Presentes ({myClaimedCount})
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
              const claim = claims[gift.id];
              const isClaimedByMe = !!(guestName && claim && claim.giver_name.toLowerCase() === guestName.toLowerCase());
              const isClaimedByOther = !!(claim && !isClaimedByMe);
              const isProcessing = actionLoading === gift.id;

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
                    border: isClaimedByMe ? '2px solid var(--olive)' : isClaimedByOther ? '1px solid #e2d9cd' : '1px solid #efe8de',
                    opacity: isClaimedByOther ? 0.88 : 1
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

                    {/* Claim status badge overlay on image */}
                    {isClaimedByMe && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: '#2e7d32',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '14px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        zIndex: 2
                      }}>
                        <Check size={14} /> Escolhido por você!
                      </div>
                    )}

                    {isClaimedByOther && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(50, 50, 50, 0.85)',
                        backdropFilter: 'blur(4px)',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '14px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        zIndex: 2
                      }}>
                        <Heart size={12} fill="white" /> Escolhido por {claim.giver_name}
                      </div>
                    )}

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
                      {/* Shopee Buy Link */}
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

                      {/* Claim Button */}
                      {isClaimedByMe ? (
                        <button
                          type="button"
                          onClick={() => handleClaimClick(gift)}
                          disabled={isProcessing}
                          style={{
                            background: '#edf5ed',
                            border: '1px solid var(--olive)',
                            color: '#2e7d32',
                            borderRadius: '8px',
                            padding: '8px 12px',
                            fontSize: '0.78rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            transition: 'all 0.2s',
                            fontWeight: 500
                          }}
                          title="Clique para desmarcar caso queira trocar de presente"
                        >
                          {isProcessing ? (
                            <Loader2 size={14} className="spin" />
                          ) : (
                            <>
                              <Check size={14} /> Marcado por você (Clique para desmarcar)
                            </>
                          )}
                        </button>
                      ) : isClaimedByOther ? (
                        <div style={{
                          background: '#f8f6f3',
                          border: '1px dashed #dcd3c7',
                          color: '#777',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '0.78rem',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}>
                          <Heart size={13} color="var(--blush)" fill="var(--blush)" />
                          <span>Já escolhido por <strong>{claim.giver_name}</strong></span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleClaimClick(gift)}
                          disabled={isProcessing}
                          style={{
                            background: 'transparent',
                            border: '1px solid #dcd3c7',
                            color: 'var(--text)',
                            borderRadius: '8px',
                            padding: '8px 12px',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            transition: 'all 0.2s',
                            fontWeight: 500
                          }}
                        >
                          {isProcessing ? (
                            <Loader2 size={14} className="spin" />
                          ) : (
                            <>
                              <Gift size={14} color="var(--olive)" />
                              Vou dar este presente
                            </>
                          )}
                        </button>
                      )}
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
