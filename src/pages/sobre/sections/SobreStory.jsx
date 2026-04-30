import Reveal from '../../../components/Reveal.jsx';

export default function SobreStory() {
  return (
    <section>
      <div className="container">
        <div className="sobre-story-grid">
          <Reveal>
            <span className="eyebrow">Como surgiu</span>
            <h2>
              Criada pra quem o iFood <em>deixou pra trás</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
              Com a chegada do iFood e outros grandes aplicativos, muitas
              docerias, boleiras e confeitarias artesanais viram suas vendas
              despencarem. Não por falta de qualidade — mas por falta de
              visibilidade digital e ferramentas acessíveis.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
              Isaac Duwe percebeu esse problema de perto e, junto com Breno
              Dourado e Kaique Cândido, decidiu criar uma solução real: um
              cardápio digital simples, elegante e sem taxas por pedido — feito
              especificamente pra quem vende doces artesanais.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              A CashUp nasceu pra devolver o poder de venda pra quem produz com
              amor. Sem complicação, sem mensalidades abusivas, sem concorrer com
              o próprio cliente.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
