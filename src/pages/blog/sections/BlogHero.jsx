import { motion } from 'framer-motion';

const categories = ['Todos', 'Vendas', 'Precificação', 'Marketing', 'Instagram'];

export default function BlogHero({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) {
  return (
    <section className="blog-hero">
      <div className="blob blob-1" style={{ opacity: 0.35 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Blog CashUp</span>
          <h1>
            Dicas pra vender mais <span className="display">doces</span>
          </h1>
          <p className="lead" style={{ maxWidth: 560 }}>
            Conteúdo prático de vendas, precificação e marketing feito pra
            docerias, boleiras e confeitarias que querem crescer de verdade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="blog-search-wrap">
            <span className="blog-search-icon">🔍</span>
            <input
              className="blog-search-input"
              type="search"
              placeholder="Buscar artigos…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar artigos"
            />
            {searchQuery && (
              <button
                className="blog-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Limpar busca"
              >
                ×
              </button>
            )}
          </div>

          <div
            className="category-filter"
            role="group"
            aria-label="Filtrar por categoria"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
