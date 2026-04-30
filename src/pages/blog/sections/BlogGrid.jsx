import { motion, AnimatePresence } from 'framer-motion';
import { articles } from '../../../data/articles.js';

const categoryColors = {
  Vendas: { bg: '#E8F5E9', text: '#2E7D32' },
  Precificação: { bg: '#FFF3E0', text: '#E65100' },
  Marketing: { bg: '#F3E5F5', text: '#6A1B9A' },
  Instagram: { bg: '#FCE4EC', text: '#AD1457' }
};

export default function BlogGrid({ activeCategory, searchQuery }) {
  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'Todos' || a.category === activeCategory;
    const q = (searchQuery || '').toLowerCase().trim();
    const matchSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <section className="blog-grid-section">
      <div className="container">
        {filtered.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '48px 0', color: 'var(--color-text-soft)' }}>
            Nenhum artigo encontrado.
          </p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              className="blog-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {filtered.map((article, i) => {
                const color = categoryColors[article.category] || { bg: '#F5EDE6', text: '#3A2E2A' };
                return (
                  <motion.article
                    key={article.id}
                    className="blog-card"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="blog-card-thumb">{article.emoji}</div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span
                          className="category-badge"
                          style={{ background: color.bg, color: color.text }}
                        >
                          {article.category}
                        </span>
                        <span className="read-time">⏱ {article.readTime}</span>
                      </div>
                      <h3 className="blog-card-title">{article.title}</h3>
                      <p className="blog-card-summary">{article.summary}</p>
                      <a
                        href={`/artigo?slug=${article.slug}`}
                        className="btn btn-ghost blog-card-btn"
                      >
                        Ler dica →
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
