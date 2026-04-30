import { motion } from 'framer-motion';
import WhatsAppIcon from '../../../components/WhatsAppIcon.jsx';
import { whatsappLink } from '../../../config.js';

export default function CardapioHero() {
  return (
    <header className="cardapio-header">
      <div className="container">
        <motion.div
          className="cardapio-header-inner"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cardapio-shop-info">
            <div className="cardapio-avatar">D</div>
            <div>
              <h1 className="cardapio-shop-name">Doce Lar Confeitaria</h1>
              <span className="cardapio-status">
                <span className="status-dot" />
                Aberto agora · Pedidos pelo WhatsApp
              </span>
            </div>
          </div>

          <a
            href={whatsappLink('Olá! Quero fazer um pedido.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={16} />
            Falar no WhatsApp
          </a>
        </motion.div>

        <motion.div
          className="demo-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span>✨ Exemplo de cardápio digital criado com CashUp</span>
          <a href="/#contato" className="demo-badge-link">Quero o meu →</a>
        </motion.div>
      </div>
    </header>
  );
}
