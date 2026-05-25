import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

const pillars = [
  { num: 'I', title: 'Abertura 180°' },
  { num: 'II', title: 'Acabamento refinado' },
  { num: 'III', title: 'Visual minimalista' },
  { num: 'IV', title: 'Costura aparente elegante' },
  { num: 'V', title: 'Construção premium' },
]

const results = [
  'possuem presença visual sofisticada',
  'transmitem valor logo no primeiro contato',
  'fogem do padrão artesanal comum',
  'permitem construir coleções autorais',
  'aumentam a percepção premium do seu trabalho',
]

export default function Mechanism() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-dark">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-56 bg-primary/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-48 bg-accent/8 blur-3xl rounded-full pointer-events-none" />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(247,236,226,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(247,236,226,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <FadeIn delay={80}>
            <h2 className="font-headline text-[clamp(1.75rem,3.5vw,2.9rem)] font-bold text-white leading-[1.2] max-w-2xl mx-auto mb-4">
              Sewn Boards Binding muda completamente a{' '}
              <em className="text-cream/85 not-italic">percepção da sua peça.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={140}>
            <p className="text-cream/60 text-[16px]">Uma estrutura clássica e sofisticada que une:</p>
          </FadeIn>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-14">
          {pillars.map((p, i) => (
            <FadeIn key={p.num} delay={i * 70}>
              <div className="relative overflow-hidden flex flex-col items-center justify-center gap-3 min-h-[130px] text-center bg-white/4 border border-white/8 rounded-2xl px-4 py-6 hover:-translate-y-1 hover:bg-white/7 hover:border-primary/35 transition-all duration-300">
                <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/80 to-transparent rounded-full" />
                <span className="font-headline text-[11px] font-bold tracking-[0.18em] text-primary/70">
                  {p.num}
                </span>
                <span className="font-headline text-[16px] text-white/90 leading-snug">{p.title}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Divider */}
        <FadeIn>
          <div className="w-12 h-px bg-primary/50 mx-auto mb-12" />
        </FadeIn>

        {/* Results */}
        <FadeIn delay={100}>
          <ul className="max-w-lg mx-auto divide-y divide-white/6">
            {results.map((r) => (
              <li key={r} className="flex items-center gap-4 py-3.5 text-cream/85 text-[15px] font-medium">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-[11px] font-bold">
                  ✓
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col items-center gap-2 mt-12">
            <CTAButton href="#" variant="primary">Quero dominar essa técnica</CTAButton>
            <span className="text-cream/40 text-xs tracking-wide">Vagas limitadas no Grupo VIP</span>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
