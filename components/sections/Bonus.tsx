import FadeIn from '@/components/FadeIn'

const materials = [
  {
    title: 'Display para Fichas Técnicas + Arquivos da Coleção',
    desc: 'Você receberá um display exclusivo acompanhado de fichas técnicas desenvolvidas por Leandro Mendes. Um novo jeito de organizar conhecimento, registrar processos e manter informações importantes sempre à mão no ateliê.',
  },
  {
    title: 'Gabarito para Estrutura Interna da Pasta Premium',
    desc: 'Um apoio pensado para trazer mais precisão e agilidade durante a construção da pasta da coleção. Porque quando organizamos melhor o processo, também ganhamos tempo para crescer em outras áreas importantes do ateliê.',
  },
  {
    title: 'Gabarito para Envelope com Papel de Carta',
    desc: 'Uma das peças mais encantadoras da coleção. O envelope com papel de carta ajuda a criar conexão, presença e experiência dentro do artesanal. E agora você terá uma estrutura pronta para construir essa peça com mais facilidade e consistência.',
  },
  {
    title: 'Gabarito para Embalagem do Marcador de Página',
    desc: 'Os detalhes também contam histórias. Esse gabarito foi pensado para desenvolver embalagens delicadas e bem construídas, reforçando o cuidado e a identidade da coleção.',
  },
]

export default function Bonus() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28 bg-cream">
      <div
        className="absolute inset-0 pointer-events-none dot-pattern opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <FadeIn delay={80}>
            <h2 className="font-headline text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold text-dark leading-[1.2] mb-5">
              Além das aulas, todas as inscritas recebem{' '}
              <em className="text-primary not-italic">materiais físicos</em>{' '}
              desenvolvidos especialmente para o Laboratório ✨
            </h2>
          </FadeIn>
          <FadeIn delay={140}>
            <p className="text-dark/65 text-[16px] leading-relaxed mb-4">
              Mais do que bônus, esses materiais foram pensados para facilitar processos, organizar o aprendizado e elevar o nível da sua produção desde o início.
            </p>
          </FadeIn>
          <FadeIn delay={180}>
            <div className="inline-block bg-white border border-primary/20 rounded-xl px-6 py-4 shadow-card">
              <p className="text-dark/60 text-[15px] leading-relaxed italic mb-1">E sinceramente?</p>
              <p className="text-dark/80 text-[15px] leading-relaxed font-medium">
                O valor dos materiais enviados já representa uma parte muito importante da experiência do Laboratório.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Material cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-14">
          {materials.map((item, i) => (
            <FadeIn key={item.title} delay={220 + i * 80}>
              <div className="relative flex flex-col bg-white border border-dark/8 rounded-2xl px-6 py-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover hover:border-primary/25 transition-all duration-300 h-full">
                <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-gradient-to-b from-primary to-primary/20" />
                <div className="flex items-start gap-3 mb-3 pl-1">
                  <span className="text-primary text-[14px] font-bold mt-0.5 shrink-0">✦</span>
                  <p className="font-headline text-[15px] text-dark leading-snug">{item.title}</p>
                </div>
                <p className="text-dark/60 text-[13px] leading-relaxed pl-1">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Closing */}
        <FadeIn delay={520}>
          <div className="max-w-xl mx-auto text-center mb-10">
            <h3 className="font-headline text-[clamp(1.3rem,2.5vw,1.9rem)] font-bold text-dark mb-4">
              Muito mais do que presentes.
            </h3>
            <p className="text-dark/65 text-[16px] leading-relaxed mb-3">
              Esses materiais foram criados para apoiar o seu crescimento técnico, artístico e organizacional dentro da encadernação artesanal.
            </p>
            <p className="text-dark/65 text-[16px] leading-relaxed">
              São ferramentas pensadas para acompanhar o seu novo momento como artesã papeleira.
            </p>
          </div>
        </FadeIn>

        {/* Inclusion note */}
        <FadeIn delay={580}>
          <div className="flex flex-col items-center gap-1.5">
            <div className="bg-dark rounded-xl px-7 py-4 text-center shadow-dark-card">
              <p className="text-cream text-[14px] font-semibold">
                ✨ Todos os materiais físicos estão inclusos para as inscritas no Laboratório
              </p>
            </div>
            <p className="text-muted text-[12px] tracking-wide">(frete por conta da aluna)</p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
