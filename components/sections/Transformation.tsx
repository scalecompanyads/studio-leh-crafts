import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

const before = [
  'peças bonitas, mas sem identidade clara',
  'dificuldade em transmitir o verdadeiro valor do trabalho',
  'sensação de estar produzindo mais do mesmo',
  'coleções sem conexão visual e conceitual',
  'insegurança técnica na construção das peças',
]

const after = [
  'peças com mais presença, acabamento e autoria',
  'coleções coerentes e visualmente refinadas',
  'maior percepção de valor pelo cliente',
  'segurança para construir produtos com mais estrutura',
  'um ateliê percebido como criativo, artístico e autoral',
]

export default function Transformation() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-dark">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-72 h-72 bg-primary/7 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-72 bg-accent/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="text-center mb-12">
          <FadeIn delay={80}>
            <h2 className="font-headline text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-white leading-[1.15]">
              Um ateliê artístico{' '}
              <em className="text-cream/85 not-italic">muda tudo.</em>
            </h2>
          </FadeIn>
        </div>

        {/* Notebook — lined-paper period = 32px; py-8 (32px) + h-8 label + mb-8 = 96px before items → lines land exactly on item bottoms */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] max-w-3xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: '#fdf8f2',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)',
          }}
        >
          <div className="absolute inset-[10px] border border-dashed border-primary/30 rounded-xl pointer-events-none z-10 hidden md:block" />

          {/* Antes */}
          <FadeIn className="relative lined-paper px-8 md:px-10 py-8">
            <div className="flex items-center gap-2 h-8 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#b56b56]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted">Antes</span>
            </div>
            <ul>
              {before.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 h-8 text-[13px] text-dark font-medium leading-none"
                >
                  <span className="flex-shrink-0 text-[#c07060] font-bold text-[12px]">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Lombada */}
          <div className="hidden md:block bg-dark/12 shadow-[inset_-4px_0_10px_-4px_rgba(0,0,0,0.15),inset_4px_0_10px_-4px_rgba(0,0,0,0.15)]" />
          <div className="md:hidden h-px bg-dark/15" />

          {/* Depois */}
          <FadeIn delay={140} className="relative lined-paper px-8 md:px-10 py-8">
            <div className="flex items-center gap-2 h-8 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent">Depois</span>
            </div>
            <ul>
              {after.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 h-8 text-[13px] text-dark font-semibold leading-none"
                >
                  <span className="flex-shrink-0 text-accent font-bold text-[12px]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Closing text */}
        <FadeIn delay={220}>
          <div className="max-w-xl mx-auto text-center mt-12 mb-10">
            <p className="text-cream text-[16px] font-medium leading-relaxed mb-3">
              Existe uma diferença enorme entre produzir peças artesanais e desenvolver coleções que carregam identidade.
            </p>
            <p className="text-primary font-bold text-[16px] leading-relaxed">
              O Laboratório nasce justamente para construir essa diferença.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col items-center gap-1.5">
            <CTAButton variant="primary">✨ Comprar Agora</CTAButton>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
