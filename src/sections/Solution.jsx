import Reveal from '../components/Reveal.jsx';
import PhoneMockup from '../components/PhoneMockup.jsx';

const items = [
  {
    title: 'Cardápio digital elegante',
    desc: 'Fotos, descrições e preços organizados — tudo num link só.'
  },
  {
    title: 'Pedido em 1 clique pro WhatsApp',
    desc: 'O cliente escolhe e a mensagem chega pronta no seu celular.'
  },
  {
    title: 'Sem taxa por venda',
    desc: 'Você paga uma vez e fica com 100% do faturamento.'
  },
  {
    title: 'Identidade artesanal',
    desc: 'Design feito pra transmitir o carinho do seu produto.'
  }
];

export default function Solution() {
  return (
    <section id="solucao">
      <div className="container">
        <div className="solution-grid">
          <Reveal>
            <span className="eyebrow">A Solução</span>
            <h2>
              A CashUp resolve isso com um sistema <em>simples</em> e profissional
            </h2>
            <p style={{ marginTop: 16 }}>
              Tudo que você precisa pra transformar o Instagram em vendas reais —
              sem aplicativo, sem app de delivery, sem dor de cabeça.
            </p>

            <ul className="solution-list">
              {items.map((item) => (
                <li key={item.title}>
                  <span className="check" aria-hidden>✓</span>
                  <span>
                    <strong>{item.title}</strong>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <PhoneMockup
              shopName="Boleira da Bia"
              items={[
                { emoji: '🎂', name: 'Naked Cake Frutas', desc: 'Massa branca, frutas vermelhas', price: 'R$ 120' },
                { emoji: '🍫', name: 'Brigadeiro Gourmet', desc: 'Caixa com 12 unidades', price: 'R$ 38' },
                { emoji: '🥧', name: 'Torta Limão', desc: 'Massa amanteigada, merengue', price: 'R$ 75' },
                { emoji: '🧁', name: 'Mini Cupcakes', desc: 'Sortidos, caixa com 9', price: 'R$ 42' }
              ]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
