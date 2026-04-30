import Reveal from '../../../components/Reveal.jsx';

const values = [
  {
    icon: '🤝',
    title: 'Simplicidade acima de tudo',
    desc: 'Nenhuma feature que complique. Cada decisão de produto começa com "uma boleira de 50 anos consegue usar sozinha?"'
  },
  {
    icon: '💸',
    title: 'Preço justo, sem taxa',
    desc: 'Não cobramos por pedido recebido. Seu sucesso é seu, não nosso. Uma vez que você paga, tudo que entrar é seu.'
  },
  {
    icon: '🎨',
    title: 'Identidade artesanal',
    desc: 'Design que transmite o cuidado e carinho do produto. Seu cardápio parece feito à mão, mesmo sendo digital.'
  }
];

export default function SobreValues() {
  return (
    <section style={{ background: 'var(--color-bg-soft)' }}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Valores</span>
          <h2>
            O que guia cada <em>decisão</em> que tomamos
          </h2>
        </Reveal>

        <div className="problem-grid">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="problem-card">
              <div className="problem-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
