import WhatsAppIcon from './WhatsAppIcon.jsx';
import { whatsappLink } from '../config.js';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="brand" aria-label="CashUp">
          <span className="brand-mark">C</span>
          <span>CashUp</span>
        </a>

        <nav className="nav-links" aria-label="Principal">
          <a href="/#planos">Planos</a>
          <a href="/blog">Blog</a>
          <a href="/cardapio">Cardápio Demo</a>
          <a href="/sobre">Sobre</a>
          <a href="/#contato">Contato</a>
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          <WhatsAppIcon size={16} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
