import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'
import { CHECKOUT_URL } from '@/lib/constants'

const perks = [
  'Acesso imediato a todas as aulas',
  'Display e gabaritos físicos inclusos',
  'Suporte direto para dúvidas',
  'Acesso vitalício ao conteúdo',
]

export default function CTAFinal() {
  return (
    <section
      id="preco"
      className="relative overflow-hidden py-28 md:py-32 text-center"
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
          <h2 className="font-headline text-[clamp(1.75rem,4vw,3rem)] font-bold text-white leading-[1.15] max-w-3xl mx-auto mb-10">
            Comece hoje mesmo a construir um trabalho
            <br />
            <em className="text-cream/95 not-italic">com verdadeira identidade.</em>
          </h2>
        </FadeIn>

        {/* Pricing Card */}
        <FadeIn delay={160}>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 max-w-lg mx-auto mb-10 shadow-[0_24px_64px_rgba(0,0,0,0.25)]">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-cream/90 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              Valor Promocional
            </span>
            <div className="my-6">
              <p className="text-cream/80 text-[14px] font-medium mb-1">Por apenas</p>
              <p className="font-headline text-[48px] md:text-[56px] text-white font-extrabold leading-none tracking-tight">
                R$ 187,00
              </p>
              <p className="text-cream/70 text-[12px] mt-2 font-medium">Ou parcelado em até 12x no cartão</p>
            </div>
            
            <div className="w-full h-px bg-white/10 my-6" />
            
            <p className="text-cream/90 text-[14px] leading-relaxed mb-1 font-medium">
              🎁 Display + Fichas Técnicas + Gabaritos inclusos de presente!
            </p>
            <p className="text-cream/75 text-[11px] leading-relaxed uppercase tracking-wider font-semibold">
              (sendo o frete pago à parte)
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={240}>
          <CTAButton href={CHECKOUT_URL} variant="dark" size="lg" className="mx-auto">
            Comprar Agora
          </CTAButton>
        </FadeIn>

        <FadeIn delay={320}>
          <div className="flex flex-wrap justify-center gap-2.5 mt-9">
            {perks.map((perk) => (
              <span
                key={perk}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-white px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
              >
                <span className="text-cream font-bold">✓</span>
                {perk}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={380}>
          <p className="mt-8 text-[12px] text-cream/90 tracking-widest font-semibold uppercase">
            🔒 Pagamento 100% seguro pela Eduzz • Acesso imediato
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
