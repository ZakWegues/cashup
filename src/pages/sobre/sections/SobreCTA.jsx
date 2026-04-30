import Reveal from '../../../components/Reveal.jsx';
import WhatsAppIcon from '../../../components/WhatsAppIcon.jsx';
import { whatsappLink } from '../../../config.js';

export default function SobreCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Vamos conversar</span>
          <h2>
            Pronto pra vender mais <em>ainda essa semana?</em>
          </h2>
          <a
            href={whatsappLink('Olá! Vi a página sobre e quero saber mais sobre a CashUp.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <WhatsAppIcon size={20} />
            Falar com o time
          </a>
        </Reveal>
      </div>
    </section>
  );
}
