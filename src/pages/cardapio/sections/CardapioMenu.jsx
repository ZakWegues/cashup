import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappLink } from '../../../config.js';
import WhatsAppIcon from '../../../components/WhatsAppIcon.jsx';
import FoodIcon from '../../../components/FoodIcon.jsx';

const catalog = {
  Bolos: [
    { id: 'b1', icon: 'cake',        name: 'Naked Cake Frutas Vermelhas', desc: 'Massa branca, chantilly leve, morango e framboesa', price: 120 },
    { id: 'b2', icon: 'chocolate',   name: 'Bolo de Chocolate Belga',     desc: 'Ganache de cobertura, recheio de trufa',           price: 95  },
    { id: 'b3', icon: 'lemon',       name: 'Bolo de Limão Siciliano',     desc: 'Massa amanteigada, creme de limão, merengue',      price: 85  },
    { id: 'b4', icon: 'brigadeiro',  name: 'Bolo de Cenoura + Brigadeiro',desc: 'Clássico, com cobertura farta de brigadeiro',      price: 75  },
    { id: 'b5', icon: 'strawberry',  name: 'Bolo Morango + Creme',        desc: 'Camadas intercaladas, muito recheio',              price: 90  }
  ],
  Cupcakes: [
    { id: 'c1', icon: 'cupcake',     name: 'Cupcake Brigadeiro',   desc: 'Massa chocolate, ganache top, granulado',        price: 12 },
    { id: 'c2', icon: 'strawberry',  name: 'Cupcake Morango',      desc: 'Massa branca, frosting de morango natural',      price: 14 },
    { id: 'c3', icon: 'cupcake',     name: 'Cupcake Maracujá',     desc: 'Massa amanteigada, curd de maracujá',            price: 14 },
    { id: 'c4', icon: 'lemon',       name: 'Cupcake Limão',        desc: 'Cream cheese frosting, raspas de limão',         price: 13 },
    { id: 'c5', icon: 'chocolate',   name: 'Cupcake Nutella',      desc: 'Recheio generoso, cobertura de Nutella',         price: 16 },
    { id: 'c6', icon: 'cupcake',     name: 'Cupcake Red Velvet',   desc: 'Massa vermelha, cream cheese frosting',          price: 15 }
  ],
  Brigadeiros: [
    { id: 'br1', icon: 'brigadeiro', name: 'Brigadeiro Tradicional',    desc: 'Chocolate ao leite, granulado belga',    price: 5 },
    { id: 'br2', icon: 'brigadeiro', name: 'Brigadeiro Meio Amargo',    desc: 'Cacau 70%, granulado escuro',            price: 6 },
    { id: 'br3', icon: 'brigadeiro', name: 'Brigadeiro Pistache',       desc: 'Creme de pistache importado',            price: 8 },
    { id: 'br4', icon: 'brigadeiro', name: 'Brigadeiro Mirtilo',        desc: 'Geleia de mirtilo no recheio',           price: 7 },
    { id: 'br5', icon: 'brigadeiro', name: 'Brigadeiro Romeu e Julieta',desc: 'Goiabada e queijo minas',               price: 6 }
  ],
  Salgados: [
    { id: 's1', icon: 'salgado', name: 'Coxinha de Frango',       desc: 'Massa crocante, frango com requeijão',      price: 7 },
    { id: 's2', icon: 'cookie',  name: 'Quibe Assado',            desc: 'Carne moída, hortelã, recheio de queijo',   price: 6 },
    { id: 's3', icon: 'salgado', name: 'Enroladinho de Salsicha', desc: 'Massa folhada, salsicha frankfurter',       price: 5 },
    { id: 's4', icon: 'cookie',  name: 'Mini Empada de Palmito',  desc: 'Massa amanteigada, palmito temperado',      price: 8 },
    { id: 's5', icon: 'cookie',  name: 'Pão de Queijo Gigante',   desc: 'Polvilho azedo, queijo minas curado',       price: 9 }
  ]
};

const tabs = Object.keys(catalog);

function formatCart(cart) {
  const lines = Object.values(cart)
    .filter((item) => item.qty > 0)
    .map((item) => `• ${item.qty}x ${item.name} — R$${(item.price * item.qty).toFixed(2).replace('.', ',')}`)
    .join('\n');
  const total = Object.values(cart)
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2)
    .replace('.', ',');
  return `Olá! Gostaria de fazer o seguinte pedido:\n\n${lines}\n\n*Total: R$${total}*`;
}

export default function CardapioMenu() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [cart, setCart] = useState({});

  const addItem = (product) => {
    setCart((prev) => {
      const existing = prev[product.id] || { ...product, qty: 0 };
      return { ...prev, [product.id]: { ...existing, qty: existing.qty + 1 } };
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const existing = prev[id];
      if (!existing || existing.qty <= 0) return prev;
      const newQty = existing.qty - 1;
      if (newQty === 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: { ...existing, qty: newQty } };
    });
  };

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = Object.values(cart)
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2)
    .replace('.', ',');

  return (
    <section className="cardapio-section">
      <div className="container">
        <div className="category-tabs" role="tablist" aria-label="Categorias">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="product-grid"
            role="tabpanel"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {catalog[activeTab].map((product, i) => {
              const qty = cart[product.id]?.qty || 0;
              return (
                <motion.div
                  key={product.id}
                  className="product-card"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                >
                  <div className="product-thumb"><FoodIcon name={product.icon} size={54} /></div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.desc}</p>
                    <div className="product-footer">
                      <span className="product-price">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <div className="qty-control">
                        {qty > 0 && (
                          <button
                            className="qty-btn minus"
                            onClick={() => removeItem(product.id)}
                            aria-label="Remover"
                          >
                            −
                          </button>
                        )}
                        {qty > 0 && <span className="qty-num">{qty}</span>}
                        <button
                          className="qty-btn plus"
                          onClick={() => addItem(product)}
                          aria-label="Adicionar"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            className="cart-bar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
          >
            <div className="cart-info">
              <span className="cart-count">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</span>
              <span className="cart-total">R$ {totalPrice}</span>
            </div>
            <a
              href={whatsappLink(formatCart(cart))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={16} />
              Pedir no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
