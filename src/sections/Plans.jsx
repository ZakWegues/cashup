import Reveal from '../components/Reveal.jsx';
import { whatsappLink } from '../config.js';

const plans = [
  {
    name: 'Start',
    monthly: 60,
    tagline: 'Comece a vender online com seu próprio site.',
    features: [
      'Cardápio digital completo',
      'Link personalizado (cashup.link/seuNome)',
      'Pedidos direto pelo WhatsApp',
      'Entrega em até 7 dias úteis',
      'Suporte por e-mail'
    ],
    services: ['Site'],
    featured: false,
    ctaText: 'Quero começar'
  },
  {
    name: 'Pro',
    monthly: 120,
    tagline: 'Site profissional e atendimento automatizado pelo WhatsApp.',
    features: [
      'Tudo do plano Start',
      'Atendimento pelo WhatsApp incluso',
      'Respostas automáticas de pedidos',
      'Gestão de pedidos centralizada',
      'Suporte prioritário por 30 dias'
    ],
    services: ['Site', 'WhatsApp'],
    featured: true,
    ctaText: 'Quero o Pro'
  },
  {
    name: 'Prime',
    monthly: 150,
    tagline: 'Solução completa pra crescer sem limite.',
    features: [
      'Tudo do plano Pro',
      'Identidade visual personalizada',
      'Atualizações ilimitadas no site',
      'Consultoria mensal de marketing',
      'Análise de vendas todo mês',
      'Suporte contínuo e prioritário'
    ],
    services: ['Site', 'WhatsApp', 'Marketing'],
    featured: false,
    ctaText: 'Assinar Prime'
  }
];

export default function Plans() {
  return (
    <section id="planos">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Planos</span>
          <h2>
            Escolha o plano que <em>combina</em> com seu negócio
          </h2>
          <p>Mensalidade fixa, sem taxas por pedido. Desenvolvimento sob consulta conforme o serviço.</p>
        </Reveal>

        <div className="plans-grid">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.08}
              className={`plan ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && <span className="featured-badge">Mais Pedido</span>}
              <span className="plan-name">{plan.name}</span>

              <div className="plan-price">
                R$ {plan.monthly}
                <small> · por mês</small>
              </div>
              <div className="plan-services">
                {plan.services.map((s) => (
                  <span key={s} className="service-tag">{s}</span>
                ))}
              </div>
              <div className="plan-dev-note">+ desenvolvimento sob consulta</div>

              <p className="plan-tagline">{plan.tagline}</p>
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="check" aria-hidden>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Olá! Quero contratar o plano ${plan.name} (R$${plan.monthly}/mês).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                {plan.ctaText}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
