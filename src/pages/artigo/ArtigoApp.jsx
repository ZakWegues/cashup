import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Loader from '../../components/Loader.jsx';
import Navbar from '../../components/Navbar.jsx';
import FloatingWhatsApp from '../../components/FloatingWhatsApp.jsx';
import Footer from '../../sections/Footer.jsx';
import { getArticleBySlug, articles } from '../../data/articles.js';
import { whatsappLink } from '../../config.js';

const categoryColors = {
  Vendas: { bg: '#E8F5E9', text: '#2E7D32' },
  Precificação: { bg: '#FFF3E0', text: '#E65100' },
  Marketing: { bg: '#F3E5F5', text: '#6A1B9A' },
  Instagram: { bg: '#FCE4EC', text: '#AD1457' }
};

function renderMarkdown(text) {
  return text
    .split('\n')
    .map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>;
      if (line.startsWith('### ')) return <h3 key={i}>{line.slice(4)}</h3>;
      if (line.startsWith('| ')) return null;
      if (line.startsWith('|--')) return null;
      if (line.startsWith('- ')) return <li key={i}>{parseBold(line.slice(2))}</li>;
      if (line.startsWith('1. ') || /^\d+\. /.test(line)) {
        return <li key={i}>{parseBold(line.replace(/^\d+\. /, ''))}</li>;
      }
      if (line.startsWith('```')) return null;
      if (line === '') return <br key={i} />;
      return <p key={i}>{parseBold(line)}</p>;
    });
}

function parseBold(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );
}

function RelatedCard({ article }) {
  const color = categoryColors[article.category] || { bg: '#F5EDE6', text: '#3A2E2A' };
  return (
    <a href={`/artigo?slug=${article.slug}`} className="related-card">
      <div className="related-thumb">{article.emoji}</div>
      <div className="related-info">
        <span className="category-badge" style={{ background: color.bg, color: color.text }}>
          {article.category}
        </span>
        <h4>{article.title}</h4>
        <span className="read-time">⏱ {article.readTime}</span>
      </div>
    </a>
  );
}

export default function ArtigoApp() {
  const slug = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('slug') || '';
  }, []);

  const article = getArticleBySlug(slug);

  const related = useMemo(
    () => articles.filter((a) => a.slug !== slug && a.category === article?.category).slice(0, 2),
    [slug, article]
  );

  if (!article) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '120px 24px' }}>
          <p style={{ fontSize: '4rem' }}>🔍</p>
          <h1 style={{ marginBottom: 16 }}>Artigo não encontrado</h1>
          <a href="/blog" className="btn btn-primary">← Voltar pro Blog</a>
        </div>
        <Footer />
      </>
    );
  }

  const color = categoryColors[article.category] || { bg: '#F5EDE6', text: '#3A2E2A' };
  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <section className="artigo-hero">
          <div className="container artigo-hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href="/blog" className="artigo-back">← Blog</a>
              <div className="artigo-meta-top">
                <span className="category-badge" style={{ background: color.bg, color: color.text }}>
                  {article.category}
                </span>
                <span className="read-time">⏱ {article.readTime}</span>
                {publishedDate && <span className="read-time">📅 {publishedDate}</span>}
              </div>
              <h1 className="artigo-title">{article.title}</h1>
              <p className="artigo-summary">{article.summary}</p>
            </motion.div>
          </div>
        </section>

        <section className="artigo-body-section">
          <div className="container artigo-layout">
            <motion.article
              className="artigo-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="artigo-thumb-big">{article.emoji}</div>
              <div className="artigo-prose">
                {renderMarkdown(article.content)}
              </div>
            </motion.article>

            <aside className="artigo-sidebar">
              <div className="sidebar-cta">
                <p className="sidebar-cta-label">Quer vender mais doces?</p>
                <h3>Crie seu cardápio digital hoje</h3>
                <a
                  href={whatsappLink('Olá! Li o blog da CashUp e quero saber mais.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: 14 }}
                >
                  Falar no WhatsApp
                </a>
                <a href="/cardapio" className="btn btn-ghost" style={{ width: '100%', marginTop: 10 }}>
                  Ver demo do cardápio
                </a>
              </div>

              {related.length > 0 && (
                <div className="sidebar-related">
                  <h4>Artigos relacionados</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
                    {related.map((a) => <RelatedCard key={a.id} article={a} />)}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
