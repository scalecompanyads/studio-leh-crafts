import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Execução mais rápida',
    desc: 'Com os gabaritos prontos, você elimina o tempo de cálculo e vai direto para a construção.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Precisão garantida',
    desc: 'Medidas exatas para que o acabamento final saia perfeito em todas as peças.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Repetibilidade',
    desc: 'Reproduza qualquer peça do kit com o mesmo resultado, toda vez.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Padronização do acabamento',
    desc: 'Garante consistência quando você começa a produzir em maior quantidade.',
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
        <div className="max-w-2xl mx-auto text-center mb-14">
          <FadeIn delay={80}>
            <h2 className="font-headline text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold text-dark leading-[1.2] mb-4">
              Além das aulas, você recebe os{' '}
              <em className="text-primary not-italic">gabaritos técnicos</em>{' '}
              utilizados no processo.
            </h2>
          </FadeIn>
          <FadeIn delay={140}>
            <p className="text-dark/60 text-[16px] leading-relaxed">
              Moldes e estruturas utilizados na construção de cada produto do kit.
            </p>
          </FadeIn>
        </div>

        {/* Cards em grade 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={200 + i * 70}>
              <div className="flex gap-4 bg-white border border-dark/8 rounded-2xl px-6 py-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 h-full">
                <span className="flex-shrink-0 mt-0.5 p-2 bg-primary/10 border border-primary/20 rounded-lg text-primary h-fit">
                  {item.icon}
                </span>
                <div>
                  <p className="font-headline text-[16px] text-dark mb-1.5 leading-snug">{item.title}</p>
                  <p className="text-dark/55 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={480}>
          <div className="flex flex-col items-center gap-2">
            <CTAButton href="#">Quero receber os gabaritos</CTAButton>
            <span className="text-muted text-xs tracking-wide">Bônus exclusivo do Laboratório</span>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
