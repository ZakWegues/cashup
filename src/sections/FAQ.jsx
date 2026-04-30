import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';

const faqs = [
  {
    q: 'Quanto tempo leva pra minha página ficar pronta?',
    a: 'O plano Start fica pronto em até 7 dias úteis. O plano Pro pode levar até 14 dias por causa da customização de identidade visual. Prazos contados a partir do envio de todas as informações e fotos.'
  },
  {
    q: 'Preciso ter site próprio ou domínio?',
    a: 'Não. A CashUp entrega um link próprio para o seu cardápio (ex: cashup.link/seuNegocio). Se você quiser usar seu domínio próprio, é possível no plano Pro e Prime com um passo a passo que a gente te guia.'
  },
  {
    q: 'Tem taxa por pedido ou por venda?',
    a: 'Nunca. Você paga uma vez (planos Start e Pro) ou a mensalidade (Prime) e fica com 100% do valor de cada pedido. Sem surpresas, sem taxas escondidas.'
  },
  {
    q: 'Posso atualizar o cardápio depois de pronto?',
    a: 'Sim. No plano Prime as atualizações são incluídas. Nos planos Start e Pro, cada atualização é cobrada separadamente a partir de R$29. Você também pode usar o WhatsApp pra combinar ajustes avulsos.'
  },
  {
    q: 'Funciona sem aplicativo? O cliente precisa baixar algo?',
    a: 'Tudo funciona pelo navegador do celular, sem instalar nada. O cliente abre o link, escolhe os produtos e o pedido vai direto pro seu WhatsApp — em menos de 30 segundos.'
  },
  {
    q: 'E se eu não gostar do resultado?',
    a: 'Trabalhamos com revisões incluídas no plano. Se após as revisões ainda não estiver satisfeita, devolvemos o valor integral. Nosso sucesso depende do seu — simples assim.'
  }
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <span className="faq-icon" aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: 'var(--color-bg-soft)' }}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>
            Tudo que você precisa <em>saber</em>
          </h2>
          <p>Perguntas que a gente recebe o tempo todo — respondidas sem enrolação.</p>
        </Reveal>

        <Reveal>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
