import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import PhoneMockup from '../components/PhoneMockup.jsx';

const steps = [
  {
    title: 'Cliente abre seu cardápio',
    desc: 'Link único, carrega rápido e funciona em qualquer celular.'
  },
  {
    title: 'Escolhe os doces favoritos',
    desc: 'Interface clara, fotos lindas, preço sempre visível.'
  },
  {
    title: 'Toca em "Pedir no WhatsApp"',
    desc: 'Mensagem com pedido completo já formatada — você só confirma.'
  },
  {
    title: 'Você fecha a venda',
    desc: 'Combina entrega, pagamento e pronto. Tudo no seu canal.'
  }
];

export default function Demo() {
  const [active, setActive] = useState(2);

  return (
    <section className="demo" id="demo">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Como funciona</span>
          <h2>
            Demonstração <em>interativa</em>
          </h2>
          <p>Veja o caminho do cliente — do cardápio ao seu WhatsApp.</p>
        </Reveal>

        <div className="demo-grid">
          <Reveal>
            <h3>Quatro passos. Zero atrito.</h3>
            <p style={{ marginTop: 12 }}>
              Toque em cada passo pra ver no celular. Simples assim.
            </p>

            <div className="demo-steps">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className={`step ${active === i ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActive(i);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="step-num">{i + 1}</div>
                  <div className="step-content">
                    <strong>{step.title}</strong>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <PhoneMockup active={active} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
