import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

const perks = ['Acesso gratuito ao grupo', 'Aviso prioritário da aula', 'Conteúdos exclusivos']

export default function CTAFinal() {
  return (
    <section
      className="relative overflow-hidden py-32 md:py-36 text-center"
      style={{
        background: 'linear-gradient(135deg, #d77b56 0%, #c46b4b 45%, #a45236 100%)',
      }}
    >
      {/* Aurora */}
      <div
        className="absolute inset-[-30%] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(247,236,226,0.25) 0%, transparent 35%), radial-gradient(circle at 80% 70%, rgba(61,86,40,0.32) 0%, transparent 38%)',
          filter: 'blur(40px)',
          animation: 'aurora 18s linear infinite',
        }}
      />
      {/* Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] max-w-[90vw] aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(247,236,226,0.18) 0%, transparent 60%)',
          animation: 'glow 6s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

        <FadeIn delay={80}>
          <h2 className="font-headline text-[clamp(2rem,5vw,3.75rem)] font-bold text-white leading-[1.1] max-w-3xl mx-auto mb-6">
            Existe uma diferença entre produzir peças artesanais…
            <br />
            e criar produtos que as pessoas{' '}
            <em className="text-cream/90 not-italic">desejam guardar.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={160}>
          <p className="text-cream/90 text-[clamp(1rem,1.6vw,1.25rem)] leading-relaxed max-w-xl mx-auto mb-10">
            Entre para o Grupo VIP e participe da aula de abertura
            do Laboratório Sewn Boards.
          </p>
        </FadeIn>

        <FadeIn delay={240}>
          <CTAButton href="#" variant="dark" size="lg" className="mx-auto">
            Entrar no Grupo VIP
          </CTAButton>
        </FadeIn>

        <FadeIn delay={320}>
          <div className="flex flex-wrap justify-center gap-2.5 mt-9">
            {perks.map((perk) => (
              <span
                key={perk}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-cream/95 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
              >
                <span className="text-cream font-bold">✓</span>
                {perk}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={380}>
          <p className="mt-7 text-[13px] text-cream/75 tracking-wide">
            Vagas limitadas para acesso ao grupo e aviso prioritário da abertura.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
