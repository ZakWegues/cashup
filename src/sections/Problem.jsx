import Reveal from '../components/Reveal.jsx';

const items = [
  {
    icon: '📉',
    title: 'Poucos pedidos online',
    text: 'Você atende quase só pelo direct e perde clientes que não querem conversar muito.'
  },
  {
    icon: '🤔',
    title: 'Clientes indecisos',
    text: 'Sem cardápio claro, o cliente fica em dúvida, demora pra responder e desiste.'
  },
  {
    icon: '📱',
    title: 'Dependência do Instagram',
    text: 'Algoritmo cai, alcance some, e suas vendas vão junto. Você precisa de canal próprio.'
  }
];

export default function Problem() {
  return (
    <section id="problema">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">O Problema</span>
          <h2>
            Você faz produtos incríveis… mas poderia <em>vender muito mais</em>
          </h2>
          <p>
            A maioria das docerias artesanais vende abaixo do potencial — não
            por falta de qualidade, mas por falta de processo de venda.
          </p>
        </Reveal>

        <div className="problem-grid">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="problem-card">
              <div className="problem-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
