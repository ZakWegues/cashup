import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';
import { whatsappLink } from '../config.js';
import { insertLead } from '../lib/supabase.js';

const STORAGE_KEY = 'cashup_leads';

const businessTypes = [
  'Doceria / Confeitaria',
  'Boleira',
  'Salgados',
  'Brigadeiro Gourmet',
  'Sobremesas / Tortas',
  'Outro'
];

const initialState = {
  name: '',
  business: '',
  whatsapp: '',
  type: ''
};

function maskWhatsapp(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = 'Diga seu nome.';
  }
  if (!form.business.trim() || form.business.trim().length < 2) {
    errors.business = 'Diga o nome do seu negócio.';
  }
  const digits = form.whatsapp.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11) {
    errors.whatsapp = 'WhatsApp inválido (com DDD).';
  }
  if (!form.type) {
    errors.type = 'Escolha o tipo de negócio.';
  }
  return errors;
}

function saveLead(lead) {
  try {
    const list = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    list.push({ ...lead, createdAt: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* ignore storage errors */
  }
}

async function sendToApi(lead) {
  await insertLead(lead);
  const endpoint = import.meta.env.VITE_LEADS_ENDPOINT;
  if (!endpoint) return;
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead)
    });
  } catch {
    /* fail silently */
  }
}

export default function LeadForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) => {
    const value = field === 'whatsapp' ? maskWhatsapp(e.target.value) : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: null }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    const lead = { ...form };
    saveLead(lead);
    await sendToApi(lead);
    setLoading(false);
    setSubmitted(true);
  };

  const reset = () => {
    setForm(initialState);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contato">
      <div className="container">
        <Reveal>
          <div className="lead">
            <div className="lead-grid">
              <div>
                <span className="eyebrow" style={{ color: '#FFB1AB' }}>
                  Quero vender mais
                </span>
                <h2>
                  Vamos transformar seus doces em <em>vendas reais</em>
                </h2>
                <p style={{ marginTop: 14, fontSize: '1.05rem' }}>
                  Preencha seus dados e a gente entra em contato no seu WhatsApp
                  com a proposta certa pro seu negócio.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="lead-form lead-success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="lead-success-mark">✓</div>
                    <h3>Recebemos seu contato!</h3>
                    <p>
                      Em breve você vai receber uma mensagem nossa no WhatsApp.
                      Se preferir, fale com a gente agora.
                    </p>
                    <a
                      href={whatsappLink(
                        `Olá! Sou ${form.name}, do ${form.business}. Acabei de me cadastrar no site.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      Falar agora no WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      style={{
                        marginTop: 16,
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.85rem',
                        background: 'none'
                      }}
                    >
                      Enviar outro cadastro
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className="lead-form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    noValidate
                  >
                    <div className="field">
                      <label htmlFor="name">Nome</label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Seu nome"
                        className={errors.name ? 'error' : ''}
                        autoComplete="name"
                      />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>

                    <div className="field">
                      <label htmlFor="business">Nome do negócio</label>
                      <input
                        id="business"
                        type="text"
                        value={form.business}
                        onChange={update('business')}
                        placeholder="Ex.: Doce Lar Confeitaria"
                        className={errors.business ? 'error' : ''}
                        autoComplete="organization"
                      />
                      {errors.business && (
                        <span className="field-error">{errors.business}</span>
                      )}
                    </div>

                    <div className="field">
                      <label htmlFor="whatsapp">WhatsApp</label>
                      <input
                        id="whatsapp"
                        type="tel"
                        value={form.whatsapp}
                        onChange={update('whatsapp')}
                        placeholder="(11) 91234-5678"
                        className={errors.whatsapp ? 'error' : ''}
                        autoComplete="tel"
                      />
                      {errors.whatsapp && (
                        <span className="field-error">{errors.whatsapp}</span>
                      )}
                    </div>

                    <div className="field">
                      <label htmlFor="type">Tipo de negócio</label>
                      <select
                        id="type"
                        value={form.type}
                        onChange={update('type')}
                        className={errors.type ? 'error' : ''}
                      >
                        <option value="">Selecione…</option>
                        {businessTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.type && <span className="field-error">{errors.type}</span>}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={loading}
                    >
                      {loading ? 'Enviando…' : 'Quero vender mais'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
