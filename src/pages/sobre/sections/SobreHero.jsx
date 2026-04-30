import { motion } from 'framer-motion';

export default function SobreHero() {
  return (
    <section className="sobre-hero">
      <div className="blob blob-1" style={{ opacity: 0.4 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="sobre-hero-inner"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Nossa história</span>
          <h1>
            Feitos pra quem faz{' '}
            <span className="display">doces com amor</span>
          </h1>
          <p className="lead" style={{ maxWidth: 580 }}>
            A CashUp nasceu de uma frustração simples: ver confeiteiras
            talentosas ganhando menos do que merecem por falta de um processo
            de venda que funcione.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
