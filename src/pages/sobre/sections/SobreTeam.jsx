import Reveal from '../../../components/Reveal.jsx';

const team = [
  {
    initials: 'ID',
    name: 'Isaac Duwe',
    role: 'Fundador & Coordenador',
    bio: 'Idealizou a CashUp para ajudar microempresas a sobreviver e crescer no digital após a chegada dos grandes aplicativos.'
  },
  {
    initials: 'BD',
    name: 'Breno Dourado',
    role: 'CEO',
    bio: 'Lidera a visão estratégica da CashUp, focado em levar a solução para o maior número de docerias e boleiras possível.'
  },
  {
    initials: 'KC',
    name: 'Kaique Cândido',
    role: 'Revisor de Código',
    bio: 'Garante a qualidade e confiabilidade de cada entrega — nenhum cardápio vai pro ar sem passar pelo seu crivo.'
  }
];

const avatarColors = ['#F28C82', '#3A2E2A', '#6B5C56'];

export default function SobreTeam() {
  return (
    <section>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Time</span>
          <h2>
            As pessoas por trás da <em>CashUp</em>
          </h2>
          <p>Um time pequeno com foco total em ajudar docerias a vender mais.</p>
        </Reveal>

        <div className="team-grid">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08} className="team-card">
              <div
                className="team-avatar"
                style={{ background: avatarColors[i] }}
              >
                {member.initials}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
