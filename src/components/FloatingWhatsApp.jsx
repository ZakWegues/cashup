import WhatsAppIcon from './WhatsAppIcon.jsx';
import { whatsappLink } from '../config.js';

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="float-wa"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
