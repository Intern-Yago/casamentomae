import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Users, UserCheck, UserX, Baby, Search, 
  Download, Copy, RefreshCw, MessageSquare, Phone, CheckCircle 
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface RSVPRecord {
  id: string;
  created_at: string;
  name: string;
  phone?: string;
  email?: string;
  attending: boolean;
  adults: number;
  children: number;
  guests?: number;
  diet?: string;
  message?: string;
}

const ConfirmedGuestsPage: React.FC = () => {
  const [rsvps, setRsvps] = useState<RSVPRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'confirmed' | 'declined'>('confirmed');
  const [copied, setCopied] = useState<boolean>(false);

  const fetchRSVPs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching rsvps:', error);
      } else if (data) {
        setRsvps(data as RSVPRecord[]);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRSVPs();
  }, []);

  const confirmedList = rsvps.filter(r => r.attending);
  const declinedList = rsvps.filter(r => !r.attending);

  const totalAdults = confirmedList.reduce((acc, curr) => acc + (curr.adults ? curr.adults + 1 : 1), 0);
  const totalChildren = confirmedList.reduce((acc, curr) => acc + (curr.children || 0), 0);
  const grandTotal = totalAdults + totalChildren;

  const filteredRsvps = rsvps.filter(r => {
    const matchesStatus = 
      statusFilter === 'all' ? true :
      statusFilter === 'confirmed' ? r.attending :
      !r.attending;

    const matchesSearch = 
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      (r.phone && r.phone.includes(search)) ||
      (r.diet && r.diet.toLowerCase().includes(search.toLowerCase()));

    return matchesStatus && matchesSearch;
  });

  const copyGuestNames = () => {
    const names = confirmedList.map((r, i) => `${i + 1}. ${r.name} (${(r.adults || 0) + 1} adultos, ${r.children || 0} crianças)`).join('\n');
    navigator.clipboard.writeText(names);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const exportCSV = () => {
    const headers = ['Nome', 'WhatsApp', 'Status', 'Adultos', 'Crianças', 'Restrição Alimentar', 'Mensagem', 'Data'];
    const rows = rsvps.map(r => [
      `"${r.name.replace(/"/g, '""')}"`,
      `"${(r.phone || '').replace(/"/g, '""')}"`,
      r.attending ? 'Confirmado' : 'Não comparecerá',
      (r.adults || 0) + 1,
      r.children || 0,
      `"${(r.diet || '').replace(/"/g, '""')}"`,
      `"${(r.message || '').replace(/"/g, '""')}"`,
      new Date(r.created_at).toLocaleDateString('pt-BR')
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `confirmados_casamento_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatPhone = (phone?: string) => {
    if (!phone) return '';
    const clean = phone.replace(/\D/g, '');
    return clean.startsWith('55') ? clean : `55${clean}`;
  };

  return (
    <div className="wedding-app min-h-screen bg-cream">
      {/* Header */}
      <header className="navbar scrolled sticky-top">
        <div className="container nav-content">
          <Link to="/" className="nav-logo" style={{ color: 'var(--olive)' }}>
            Lidiane & Pedro Henrique
          </Link>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/" className="btn btn-outline btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Voltar ao Início
            </Link>
          </div>
        </div>
      </header>

      <main className="container" style={{ padding: '40px 20px 80px', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ marginBottom: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <div>
            <span style={{ color: 'var(--olive)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Painel de Presenças
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--text)', marginTop: '4px' }}>
              Lista de Convidados Confirmados
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={fetchRSVPs} 
              className="btn btn-outline btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="Atualizar lista"
            >
              <RefreshCw size={15} className={loading ? 'spin' : ''} />
              Atualizar
            </button>
            <button 
              onClick={copyGuestNames} 
              className="btn btn-outline btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              {copied ? <CheckCircle size={15} color="var(--olive)" /> : <Copy size={15} />}
              {copied ? 'Copiado!' : 'Copiar Nomes'}
            </button>
            <button 
              onClick={exportCSV} 
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Download size={15} />
              Exportar CSV
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#eef5ec', color: 'var(--olive)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserCheck size={26} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>Total Confirmados</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text)', margin: '2px 0 0' }}>{grandTotal}</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--olive)' }}>{confirmedList.length} formulários</span>
            </div>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f5f0eb', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={26} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>Adultos</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text)', margin: '2px 0 0' }}>{totalAdults}</h3>
              <span style={{ fontSize: '0.75rem', color: '#666' }}>A partir de 18 anos</span>
            </div>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fbf2f2', color: 'var(--blush)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Baby size={26} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>Crianças</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text)', margin: '2px 0 0' }}>{totalChildren}</h3>
              <span style={{ fontSize: '0.75rem', color: '#666' }}>Até 17 anos</span>
            </div>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f8f8f8', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserX size={26} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>Não Poderão Ir</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text)', margin: '2px 0 0' }}>{declinedList.length}</h3>
              <span style={{ fontSize: '0.75rem', color: '#888' }}>Avisaram carinhosamente</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{
          background: 'white',
          padding: '16px 20px',
          borderRadius: '16px',
          marginBottom: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
        }}>
          {/* Status filter pills */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setStatusFilter('confirmed')}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: statusFilter === 'confirmed' ? 600 : 400,
                background: statusFilter === 'confirmed' ? 'var(--olive)' : '#f5f5f5',
                color: statusFilter === 'confirmed' ? '#fff' : '#555',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Confirmados ({confirmedList.length})
            </button>
            <button
              onClick={() => setStatusFilter('declined')}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: statusFilter === 'declined' ? 600 : 400,
                background: statusFilter === 'declined' ? 'var(--olive)' : '#f5f5f5',
                color: statusFilter === 'declined' ? '#fff' : '#555',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Não irão ({declinedList.length})
            </button>
            <button
              onClick={() => setStatusFilter('all')}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: statusFilter === 'all' ? 600 : 400,
                background: statusFilter === 'all' ? 'var(--olive)' : '#f5f5f5',
                color: statusFilter === 'all' ? '#fff' : '#555',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Todos ({rsvps.length})
            </button>
          </div>

          {/* Search box */}
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input 
              type="text"
              placeholder="Buscar por nome ou fone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '20px',
                border: '1px solid #e0e0e0',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Table or Empty State */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'white', borderRadius: '16px' }}>
            <RefreshCw size={36} className="spin" style={{ color: 'var(--olive)', margin: '0 auto 16px', display: 'block' }} />
            <p style={{ color: '#888' }}>Carregando confirmações do banco de dados...</p>
          </div>
        ) : filteredRsvps.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'white', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <Users size={48} style={{ color: '#ccc', margin: '0 auto 16px', display: 'block' }} />
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text)', marginBottom: '8px' }}>
              {search ? 'Nenhum convidado encontrado na busca' : 'Nenhuma confirmação registrada ainda'}
            </h3>
            <p style={{ color: '#888', maxWidth: '500px', margin: '0 auto 20px' }}>
              {search ? 'Tente buscar por outro nome ou número.' : 'As novas confirmações enviadas através do site aparecerão aqui em tempo real!'}
            </p>
            {search && (
              <button className="btn btn-outline btn-sm" onClick={() => setSearch('')}>
                Limpar busca
              </button>
            )}
          </div>
        ) : (
          <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#faf7f2', borderBottom: '2px solid #eee', color: '#666', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    <th style={{ padding: '16px' }}>#</th>
                    <th style={{ padding: '16px' }}>Convidado</th>
                    <th style={{ padding: '16px' }}>WhatsApp</th>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Adultos</th>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Crianças</th>
                    <th style={{ padding: '16px' }}>Restrição Alimentar</th>
                    <th style={{ padding: '16px' }}>Recado</th>
                    <th style={{ padding: '16px' }}>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRsvps.map((rsvp, idx) => (
                    <tr key={rsvp.id || idx} style={{ borderBottom: '1px solid #f2ede4', transition: 'background 0.2s' }}>
                      <td style={{ padding: '16px', color: '#999', fontSize: '0.8rem' }}>{idx + 1}</td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 600, color: 'var(--text)' }}>{rsvp.name}</div>
                        {rsvp.attending ? (
                          <span style={{ display: 'inline-block', fontSize: '0.72rem', color: '#2e7d32', background: '#edf7ed', padding: '2px 8px', borderRadius: '10px', marginTop: '4px' }}>
                            Presença confirmada
                          </span>
                        ) : (
                          <span style={{ display: 'inline-block', fontSize: '0.72rem', color: '#c62828', background: '#ffebee', padding: '2px 8px', borderRadius: '10px', marginTop: '4px' }}>
                            Não comparecerá
                          </span>
                        )}
                      </td>
                      <td style={{ padding: '16px' }}>
                        {rsvp.phone ? (
                          <a 
                            href={`https://wa.me/${formatPhone(rsvp.phone)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#25D366', textDecoration: 'none', fontWeight: 500 }}
                          >
                            <Phone size={14} />
                            {rsvp.phone}
                          </a>
                        ) : (
                          <span style={{ color: '#bbb' }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center', fontWeight: 600, color: 'var(--text)' }}>
                        {rsvp.attending ? (rsvp.adults || 0) + 1 : '—'}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center', color: '#666' }}>
                        {rsvp.attending ? (rsvp.children || 0) : '—'}
                      </td>
                      <td style={{ padding: '16px', color: '#666' }}>
                        {rsvp.diet ? (
                          <span style={{ background: '#fff3e0', color: '#e65100', padding: '3px 8px', borderRadius: '6px', fontSize: '0.8rem' }}>
                            {rsvp.diet}
                          </span>
                        ) : (
                          <span style={{ color: '#bbb' }}>Nenhuma</span>
                        )}
                      </td>
                      <td style={{ padding: '16px', maxWidth: '240px' }}>
                        {rsvp.message ? (
                          <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', color: '#555', fontStyle: 'italic', fontSize: '0.85rem' }}>
                            <MessageSquare size={14} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--olive)' }} />
                            <span>"{rsvp.message}"</span>
                          </div>
                        ) : (
                          <span style={{ color: '#ccc' }}>Sem recado</span>
                        )}
                      </td>
                      <td style={{ padding: '16px', color: '#888', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                        {rsvp.created_at ? new Date(rsvp.created_at).toLocaleDateString('pt-BR') : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ConfirmedGuestsPage;
