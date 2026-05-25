import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Adaptações viáveis',
    desc: 'Você aprende a adaptar cada etapa para o material que tem em mãos.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Soluções acessíveis',
    desc: 'Ferramentas simples e disponíveis em qualquer papelaria ou loja de artesanato.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Técnicas para o ateliê artesanal',
    desc: 'Processo desenhado para quem trabalha em casa, com espaço limitado.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Foco em acabamento e estrutura',
    desc: 'O que transforma uma peça comum em produto premium é o processo, não a máquina.',
  },
]

export default function Equipment() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-cream">
      <div
        className="absolute inset-0 dot-pattern pointer-events-none opacity-50"
        style={{
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, #000 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 75% at 50% 50%, #000 20%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-headline text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold text-dark leading-[1.2] mb-0">
                &ldquo;Mas preciso de ateliê profissional para fazer isso?&rdquo;
              </h2>
            </div>
          </FadeIn>

          {/* Não. */}
          <FadeIn delay={80}>
            <div className="flex items-center justify-center mb-8">
              <span
                className="font-headline font-bold text-primary leading-none"
                style={{
                  fontSize: 'clamp(5rem,14vw,9rem)',
                  letterSpacing: '-0.03em',
                  textShadow: '0 4px 32px rgba(196,107,75,0.18)',
                }}
              >
                Não.
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={130}>
            <p className="text-center text-dark/65 text-[16px] leading-relaxed mb-12 max-w-xl mx-auto">
              Embora Leandro utilize equipamentos profissionais em seu ateliê,
              o método do Laboratório foi pensado para a realidade da encadernação artesanal.
            </p>
          </FadeIn>

          {/* Cards 2×2 com descrição */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {cards.map((card, i) => (
              <FadeIn key={card.title} delay={180 + i * 70}>
                <div className="flex gap-4 bg-white border border-dark/8 rounded-xl px-5 py-5 text-left shadow-card hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 h-full">
                  <span className="flex-shrink-0 mt-0.5 p-2 bg-accent/10 border border-accent/20 rounded-lg text-accent h-fit">
                    {card.icon}
                  </span>
                  <div>
                    <p className="font-headline text-[16px] text-dark mb-1 leading-snug">{card.title}</p>
                    <p className="text-dark/55 text-[13px] leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Quote de fechamento */}
          <FadeIn delay={450}>
            <div className="text-center bg-dark rounded-2xl px-8 py-7 mb-10 shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
              <p className="text-cream/90 text-[17px] font-medium italic leading-relaxed">
                &ldquo;O foco não é ter máquinas industriais.
                <br />
                É aprender a pensar e construir como uma encadernação profissional.&rdquo;
              </p>
              <p className="text-cream/40 text-[12px] font-semibold tracking-wide uppercase mt-3">Leandro Mendes</p>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="flex flex-col items-center gap-2">
              <CTAButton href="#">Quero participar do Laboratório</CTAButton>
              <span className="text-muted text-xs tracking-wide">Mesmo sem ateliê profissional</span>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
