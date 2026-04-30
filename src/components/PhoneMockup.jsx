import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import FoodIcon from './FoodIcon.jsx';
import { whatsappLink } from '../config.js';

const defaultItems = [
  { icon: 'cake',      name: 'Bolo de Morango',    desc: 'Camadas, chantilly, fruta fresca', price: 'R$ 89' },
  { icon: 'cupcake',   name: 'Cupcake Brigadeiro', desc: 'Massa de chocolate, ganache',       price: 'R$ 12' },
  { icon: 'cookie',    name: 'Cookies Recheados',  desc: 'Doce de leite, caixa com 6',        price: 'R$ 32' },
  { icon: 'donut',     name: 'Donuts Glaceados',   desc: 'Pistache, chocolate, frutas',       price: 'R$ 18' }
];

const transition = { duration: 0.32, ease: [0.22, 1, 0.36, 1] };
const screenVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

function StatusBar() {
  return (
    <div className="phone-status-bar">
      <span className="status-time">12:34</span>
      <div className="status-icons">
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="0.5"/>
          <rect x="4" y="4.5" width="3" height="6.5" rx="0.5"/>
          <rect x="8" y="2" width="3" height="9" rx="0.5"/>
          <rect x="12" y="0" width="3" height="11" rx="0.5" opacity="0.3"/>
        </svg>
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M1 4 Q7 -1 13 4"/>
          <path d="M3 6.5 Q7 3 11 6.5"/>
          <circle cx="7" cy="9.5" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
        <svg width="24" height="12" viewBox="0 0 24 12">
          <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1"/>
          <rect x="21" y="3.5" width="2.5" height="5" rx="1" fill="currentColor" opacity="0.35"/>
          <rect x="1.5" y="1.5" width="15" height="9" rx="1.5" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
}

function ScreenMenu({ items }) {
  return (
    <>
      <div className="phone-menu">
        <span className="phone-section-title">Mais pedidos</span>
        {items.map((item, i) => (
          <motion.div
            className="menu-item"
            key={item.name}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + i * 0.07, duration: 0.38 }}
          >
            <div className="menu-thumb" data-food={item.icon}><FoodIcon name={item.icon} size={38} /></div>
            <div className="menu-info">
              <div className="menu-name">{item.name}</div>
              <div className="menu-desc">{item.desc}</div>
            </div>
            <div className="menu-price">{item.price}</div>
          </motion.div>
        ))}
      </div>
      <div className="phone-cta">
        <a
          href={whatsappLink('Olá! Quero fazer um pedido pelo cardápio.')}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block' }}
        >
          <button><WhatsAppIcon size={16} />Pedir no WhatsApp</button>
        </a>
      </div>
    </>
  );
}

function ScreenSelected({ items }) {
  return (
    <>
      <div className="phone-menu">
        <span className="phone-section-title" style={{ color: '#F28C82' }}>
          2 selecionados ✓
        </span>
        {items.map((item, i) => (
          <motion.div
            className={`menu-item${i < 2 ? ' menu-item-selected' : ''}`}
            key={item.name}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + i * 0.07, duration: 0.38 }}
          >
            <div className="menu-thumb" data-food={item.icon}><FoodIcon name={item.icon} size={38} /></div>
            <div className="menu-info">
              <div className="menu-name">{item.name}</div>
              <div className="menu-desc">{item.desc}</div>
            </div>
            {i < 2
              ? <div className="menu-check">✓</div>
              : <div className="menu-price">{item.price}</div>
            }
          </motion.div>
        ))}
      </div>
    </>
  );
}

function ScreenWhatsApp() {
  return (
    <div className="phone-screen-centered">
      <div className="phone-order-summary">
        <span className="phone-section-title">Seu pedido</span>
        <div className="order-line"><span>1× Bolo de Morango</span><span>R$ 89</span></div>
        <div className="order-line"><span>1× Cupcake Brigadeiro</span><span>R$ 12</span></div>
        <div className="order-total"><span>Total</span><span>R$ 101</span></div>
      </div>
      <div className="phone-cta" style={{ padding: 0, width: '100%' }}>
        <button className="pulse-btn">
          <WhatsAppIcon size={16} />
          Pedir no WhatsApp
        </button>
      </div>
    </div>
  );
}

function ScreenConfirm() {
  return (
    <div className="phone-screen-centered phone-screen-success">
      <motion.div
        className="success-check"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
      >
        ✓
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
        style={{ textAlign: 'center' }}
      >
        <p className="success-title">Pedido enviado!</p>
        <p className="success-sub">Aguardando confirmação da loja.</p>
      </motion.div>
    </div>
  );
}

const screens = [ScreenMenu, ScreenSelected, ScreenWhatsApp, ScreenConfirm];

export default function PhoneMockup({ items = defaultItems, shopName = 'Doce Lar Confeitaria', active = 0 }) {
  const Screen = screens[active] || screens[0];

  return (
    <motion.div
      className="phone"
      initial={{ y: 20, opacity: 0, rotate: -2 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="phone-screen">
        <div className="dynamic-island" />

        <StatusBar />

        <div className="phone-header">
          <div className="header-back-btn">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 1 L1 7 L7 13"/>
            </svg>
          </div>
          <div className="shop">
            <div className="phone-avatar">{shopName.charAt(0)}</div>
            <div>
              <div className="phone-shop-name">{shopName}</div>
              <span className="phone-shop-status">online</span>
            </div>
          </div>
          <div className="header-more-btn">
            <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
              <circle cx="2" cy="2" r="1.8"/>
              <circle cx="2" cy="8" r="1.8"/>
              <circle cx="2" cy="14" r="1.8"/>
            </svg>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}
          >
            <Screen items={items} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
