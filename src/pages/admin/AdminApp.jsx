import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchLeads, deleteLead, isSupabaseConfigured } from '../../lib/supabase.js';

const STORAGE_KEY = 'cashup_leads';

const BUSINESS_TYPES = [
  'Todos',
  'Doceria / Confeitaria',
  'Boleira',
  'Salgados',
  'Brigadeiro Gourmet',
  'Sobremesas / Tortas',
  'Outro'
];

function getLocalLeads() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function exportCSV(leads) {
  const header = ['Nome', 'Negócio', 'WhatsApp', 'Tipo', 'Data'];
  const rows = leads.map((l) => [
    l.name,
    l.business,
    l.whatsapp,
    l.type,
    l.createdAt ? new Date(l.createdAt).toLocaleString('pt-BR') : ''
  ]);
  const csv = [header, ...rows]
    .map((r) => r.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(','))
    .join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cashup-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminApp() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('local');
  const [filterType, setFilterType] = useState('Todos');
  const [search, setSearch] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  const loadLeads = useCallback(async () => {
    setLoading(true);
    if (isSupabaseConfigured) {
      const { data, error } = await fetchLeads();
      if (!error && data?.length) {
        setLeads(data);
        setSource('supabase');
        setLoading(false);
        return;
      }
    }
    setLeads(getLocalLeads());
    setSource('local');
    setLoading(false);
  }, []);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  async function handleDelete(lead) {
    const id = lead.id;
    const name = lead.name || 'este lead';
    if (!window.confirm(`Excluir "${name}"? Esta ação não pode ser desfeita.`)) return;

    if (isSupabaseConfigured && id) {
      await deleteLead(id);
    } else {
      const updated = getLocalLeads().filter(
        (l) => (l.id || l.whatsapp + l.createdAt) !== (id || lead.whatsapp + lead.createdAt)
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
    setLeads((prev) => prev.filter((l) => l !== lead));
  }

  const filtered = leads.filter((l) => {
    const matchType = filterType === 'Todos' || l.type === filterType;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      l.name?.toLowerCase().includes(q) ||
      l.business?.toLowerCase().includes(q) ||
      l.whatsapp?.includes(q);
    return matchType && matchSearch;
  });

  return (
    <div className="admin-wrap">
      <header className="admin-header">
        <div className="container admin-header-inner">
          <a href="/" className="brand">
            <span className="brand-mark">C</span>
            <span>CashUp Admin</span>
          </a>
          <div className="admin-source-badge">
            {isSupabaseConfigured ? (
              <span className="badge-supabase">● Supabase conectado</span>
            ) : (
              <span className="badge-local">● LocalStorage</span>
            )}
          </div>
        </div>
      </header>

      <main className="admin-main">
        <div className="container">
          <div className="admin-toolbar">
            <div className="admin-stats">
              <div className="stat-card">
                <span className="stat-num">{leads.length}</span>
                <span className="stat-label">Total de leads</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">{filtered.length}</span>
                <span className="stat-label">Filtrados</span>
              </div>
            </div>

            <div className="admin-actions">
              <input
                className="admin-search"
                type="search"
                placeholder="Buscar por nome, negócio ou WhatsApp…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Buscar leads"
              />

              <select
                className="admin-filter"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                aria-label="Filtrar por tipo"
              >
                {BUSINESS_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              <button
                className="btn btn-primary"
                onClick={() => exportCSV(filtered)}
                disabled={filtered.length === 0}
              >
                ↓ Exportar CSV
              </button>

              <button
                className="btn btn-ghost"
                onClick={loadLeads}
                aria-label="Atualizar"
              >
                ↺ Atualizar
              </button>
            </div>
          </div>

          {loading ? (
            <div className="admin-empty">
              <div className="loader-mark" style={{ margin: '0 auto' }} />
            </div>
          ) : filtered.length === 0 ? (
            <div className="admin-empty">
              <p>
                {leads.length === 0
                  ? 'Nenhum lead capturado ainda. Preencha o formulário da landing page.'
                  : 'Nenhum lead encontrado com esse filtro.'}
              </p>
            </div>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Negócio</th>
                    <th>WhatsApp</th>
                    <th>Tipo</th>
                    <th>Data</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <AnimatePresence>
                  <tbody>
                    {filtered.map((lead, i) => (
                      <motion.tr
                        key={lead.id || lead.whatsapp + lead.createdAt}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.3 }}
                      >
                        <td className="td-num">{i + 1}</td>
                        <td className="td-name">{lead.name}</td>
                        <td>{lead.business}</td>
                        <td>{lead.whatsapp}</td>
                        <td>
                          <span className="type-badge">{lead.type}</span>
                        </td>
                        <td className="td-date">
                          {lead.createdAt || lead.created_at
                            ? new Date(lead.createdAt || lead.created_at).toLocaleDateString('pt-BR')
                            : '—'}
                        </td>
                        <td style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <a
                            href={`https://wa.me/${(lead.whatsapp || '').replace(/\D/g, '')}?text=Oi ${encodeURIComponent(lead.name)}, vi seu cadastro na CashUp!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                            style={{ padding: '7px 14px', fontSize: '0.82rem' }}
                          >
                            WhatsApp
                          </a>
                          <button
                            className="btn btn-delete"
                            style={{ padding: '7px 14px', fontSize: '0.82rem' }}
                            onClick={() => handleDelete(lead)}
                            aria-label={`Excluir ${lead.name}`}
                          >
                            🗑 Excluir
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </AnimatePresence>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
