import Reveal from '../components/Reveal.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import { whatsappLink } from '../config.js';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Última chamada</span>
          <h2>
            Pronto pra vender mais <em>ainda essa semana?</em>
          </h2>
          <a
            href={whatsappLink('Quero começar a vender mais com a CashUp!')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <WhatsAppIcon size={20} />
            Falar no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
