import { motion } from 'framer-motion';
import PhoneMockup from '../components/PhoneMockup.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import { whatsappLink } from '../config.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <p className="hero-script">Doces que vendem sozinhos</p>
          <h1>
            Venda mais doces com pedidos pelo <em>WhatsApp</em>
          </h1>
          <p className="lead">
            A CashUp cria um sistema elegante e simples para seus clientes
            pedirem direto pelo WhatsApp, sem taxas e sem complicação.
          </p>

          <div className="hero-cta">
            <a href="#contato" className="btn btn-primary btn-lg">
              Começar agora
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              <WhatsAppIcon size={18} />
              Falar no WhatsApp
            </a>
          </div>

          <div className="hero-meta">
            <span><span className="dot" /> Sem taxas por pedido</span>
            <span><span className="dot" /> Pronto em 7 dias</span>
            <span><span className="dot" /> Suporte humano</span>
          </div>
        </motion.div>

        <div className="hero-visual">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
