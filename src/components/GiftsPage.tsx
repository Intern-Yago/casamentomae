import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Search, Gift, ExternalLink, Heart, Check, 
  Sparkles, ShoppingBag, UtensilsCrossed, SlidersHorizontal,
  X, CheckCircle2, User, Phone, Loader2, ChevronLeft, ChevronRight
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
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'claimed' | 'mine'>('all');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc'>('name-asc');

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const gridSectionRef = useRef<HTMLDivElement>(null);

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

      return matchesCategory && matchesSearch && matchesStatus;
    });

    // Sort alphabetically
    list = [...list].sort((a, b) => {
      if (sortBy === 'name-desc') return b.title.localeCompare(a.title);
      return a.title.localeCompare(b.title);
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

  // Reset to page 1 on filter or itemsPerPage change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, statusFilter, sortBy, itemsPerPage]);

  // Pagination computations
  const totalItems = filteredGifts.length;
  const totalPages = itemsPerPage > 0 ? Math.max(1, Math.ceil(totalItems / itemsPerPage)) : 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedGifts = useMemo(() => {
    if (itemsPerPage <= 0) return filteredGifts;
    const start = (safeCurrentPage - 1) * itemsPerPage;
    return filteredGifts.slice(start, start + itemsPerPage);
  }, [filteredGifts, safeCurrentPage, itemsPerPage]);

  const startIndex = totalItems === 0 ? 0 : itemsPerPage > 0 ? (safeCurrentPage - 1) * itemsPerPage + 1 : 1;
  const endIndex = itemsPerPage > 0 ? Math.min(safeCurrentPage * itemsPerPage, totalItems) : totalItems;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === safeCurrentPage) return;
    setCurrentPage(page);
    if (gridSectionRef.current) {
      gridSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [1];
    if (safeCurrentPage > 3) {
      pages.push('...');
    }
    const start = Math.max(2, safeCurrentPage - 1);
    const end = Math.min(totalPages - 1, safeCurrentPage + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (safeCurrentPage < totalPages - 2) {
      pages.push('...');
    }
    pages.push(totalPages);
    return pages;
  };

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
            Lista de Presentes do Chá de Panela
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '20px' }}>
            Cada detalhe foi escolhido com muito carinho para equipar a nossa cozinha e montar o nosso novo cantinho! Sua presença é o nosso maior presente, mas se quiser nos mimar com um item especial, selecionamos essas opções na Shopee com fotos reais.
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
              <span>{GIFTS_DATA.length} mimos escolhidos com amor para a casa nova</span>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="container" style={{ padding: '40px 20px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Filter Panel */}
        <div className="gifts-filter-card">
          {/* Row 1: Search & Sort */}
          <div className="gifts-search-sort-row">
            <div className="gifts-search-wrapper">
              <Search size={18} className="gifts-search-icon" />
              <input 
                type="text"
                className="gifts-search-input"
                placeholder="Buscar presentes do chá de panela (copos, taças, potes, xícaras...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  type="button"
                  className="gifts-search-clear"
                  onClick={() => setSearchQuery('')}
                  title="Limpar busca"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="gifts-sort-wrapper">
              <SlidersHorizontal size={15} style={{ color: '#8c857b' }} />
              <select
                className="gifts-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name-asc' | 'name-desc')}
              >
                <option value="name-asc">Nome (A - Z)</option>
                <option value="name-desc">Nome (Z - A)</option>
              </select>
            </div>
          </div>

          {/* Row 2: Status tabs */}
          <div className="gifts-status-row">
            <button
              type="button"
              className={`gifts-status-btn ${statusFilter === 'all' ? 'active' : ''}`}
              onClick={() => setStatusFilter('all')}
            >
              Todos ({GIFTS_DATA.length})
            </button>

            <button
              type="button"
              className={`gifts-status-btn ${statusFilter === 'available' ? 'active' : ''}`}
              onClick={() => setStatusFilter('available')}
            >
              Disponíveis ({availableCount})
            </button>

            <button
              type="button"
              className={`gifts-status-btn ${statusFilter === 'claimed' ? 'active' : ''}`}
              onClick={() => setStatusFilter('claimed')}
            >
              Já Escolhidos ({claimedCount})
            </button>

            {guestName && (
              <button
                type="button"
                className={`gifts-status-btn ${statusFilter === 'mine' ? 'active' : ''}`}
                onClick={() => setStatusFilter('mine')}
              >
                <CheckCircle2 size={14} /> Meus Presentes ({myClaimedCount})
              </button>
            )}
          </div>

          {/* Row 3: Categories */}
          <div className="gifts-categories-section">
            <div className="gifts-categories-title">Categorias</div>
            <div className="gifts-categories-row">
              {GIFT_CATEGORIES.map(category => (
                <button
                  key={category}
                  type="button"
                  className={`gifts-category-chip ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Row 4: Results & Pagination meta bar */}
          <div className="gifts-meta-bar">
            <span>
              {totalItems > 0 ? (
                <>Mostrando <strong>{startIndex}–{endIndex}</strong> de <strong>{totalItems}</strong> presentes</>
              ) : (
                <>Nenhum presente encontrado</>
              )}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              {totalItems > 12 && (
                <div className="gifts-per-page-group">
                  <span>Por página:</span>
                  {[12, 24, 0].map(val => (
                    <button
                      key={val}
                      type="button"
                      className={`gifts-per-page-btn ${itemsPerPage === val ? 'active' : ''}`}
                      onClick={() => setItemsPerPage(val)}
                    >
                      {val === 0 ? 'Todos' : val}
                    </button>
                  ))}
                </div>
              )}

              {hasActiveFilters && (
                <button 
                  type="button"
                  onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); setStatusFilter('all'); }}
                  style={{ background: 'none', border: 'none', color: 'var(--olive)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.82rem' }}
                >
                  Limpar todos os filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Scroll anchor */}
        <div ref={gridSectionRef} style={{ scrollMarginTop: '30px' }} />

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
            {paginatedGifts.map((gift) => {
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

        {/* Pagination Controls */}
        {filteredGifts.length > 0 && totalPages > 1 && (
          <div style={{
            marginTop: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: '10px',
                  border: '1px solid #dcd3c7',
                  background: safeCurrentPage === 1 ? '#f5f5f5' : 'white',
                  color: safeCurrentPage === 1 ? '#bbb' : 'var(--text)',
                  cursor: safeCurrentPage === 1 ? 'not-allowed' : 'pointer',
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronLeft size={16} /> Anterior
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((p, idx) => {
                if (p === '...') {
                  return (
                    <span key={`ellipsis-${idx}`} style={{ padding: '0 4px', color: '#999', fontSize: '1rem' }}>
                      …
                    </span>
                  );
                }
                const pageNum = Number(p);
                const isActive = pageNum === safeCurrentPage;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    style={{
                      minWidth: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      border: isActive ? '1px solid var(--olive)' : '1px solid #dcd3c7',
                      background: isActive ? 'var(--olive)' : 'white',
                      color: isActive ? 'white' : 'var(--text)',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isActive ? '0 3px 10px rgba(92, 107, 74, 0.25)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: '10px',
                  border: '1px solid #dcd3c7',
                  background: safeCurrentPage === totalPages ? '#f5f5f5' : 'white',
                  color: safeCurrentPage === totalPages ? '#bbb' : 'var(--text)',
                  cursor: safeCurrentPage === totalPages ? 'not-allowed' : 'pointer',
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
              >
                Próxima <ChevronRight size={16} />
              </button>
            </div>

            <div style={{ fontSize: '0.84rem', color: '#888' }}>
              Página <strong>{safeCurrentPage}</strong> de <strong>{totalPages}</strong> • {totalItems} presentes no catálogo
            </div>
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
