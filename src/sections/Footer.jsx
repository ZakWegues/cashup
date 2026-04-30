export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="brand">
            <span className="brand-mark">C</span>
            <span>CashUp</span>
          </div>

          <nav className="footer-links" aria-label="Rodapé">
            <a href="#problema">Problema</a>
            <a href="#solucao">Solução</a>
            <a href="#planos">Planos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        <small>
          © {year} CashUp · Feito com carinho para quem faz doces incríveis.
        </small>
      </div>
    </footer>
  );
}
