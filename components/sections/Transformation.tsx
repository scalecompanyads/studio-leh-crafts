import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

const before = [
  'peças bonitas, mas comuns',
  'dificuldade para cobrar valor justo',
  'sensação de estar "fazendo mais do mesmo"',
  'produtos sem identidade premium',
]

const after = [
  'peças sofisticadas e autorais',
  'acabamento com presença profissional',
  'maior percepção de valor',
  'coleção coerente e refinada',
  'segurança técnica para criar produtos premium',
]

export default function Transformation() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-dark">
      {/* Glows laterais */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-72 h-72 bg-primary/7 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-72 bg-accent/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="text-center mb-12">
          <FadeIn delay={80}>
            <h2 className="font-headline text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-white leading-[1.15]">
              O acabamento{' '}
              <em className="text-cream/85 not-italic">muda tudo.</em>
            </h2>
          </FadeIn>
        </div>

        {/* Notebook */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] max-w-3xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: '#fdf8f2',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)',
          }}
        >
          {/* Borda de costura interna */}
          <div className="absolute inset-[10px] border border-dashed border-primary/30 rounded-xl pointer-events-none z-10 hidden md:block" />

          {/* Antes */}
          <FadeIn className="relative lined-paper px-8 md:px-10 py-12 md:py-14">
            <div className="flex items-center gap-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#b56b56]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted">Antes</span>
            </div>
            <ul className="space-y-0">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3 border-b border-dashed border-dark/15 last:border-0 text-[14px] text-dark/70 leading-snug">
                  <span className="flex-shrink-0 mt-0.5 text-[#c07060] font-bold text-[13px]">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Lombada */}
          <div className="hidden md:block bg-dark/12 shadow-[inset_-4px_0_10px_-4px_rgba(0,0,0,0.15),inset_4px_0_10px_-4px_rgba(0,0,0,0.15)]" />
          <div className="md:hidden h-px bg-dark/15" />

          {/* Depois */}
          <FadeIn delay={140} className="relative lined-paper px-8 md:px-10 py-12 md:py-14">
            <div className="flex items-center gap-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent">Depois</span>
            </div>
            <ul className="space-y-0">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3 border-b border-dashed border-dark/15 last:border-0 text-[14px] text-dark/70 leading-snug">
                  <span className="flex-shrink-0 mt-0.5 text-accent font-bold text-[13px]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={260}>
          <div className="flex flex-col items-center gap-2 mt-12">
            <CTAButton href="#" variant="primary">Quero estar no Depois</CTAButton>
            <span className="text-cream/40 text-xs tracking-wide">Garanta sua vaga no Grupo VIP</span>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
