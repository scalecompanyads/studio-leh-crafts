import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

const kitItems = [
  { num: '01', title: 'Caderno artesanal premium' },
  { num: '02', title: 'Pasta de documentos coordenada' },
  { num: '03', title: 'Envelope com papel de carta' },
  { num: '04', title: 'Marca-página' },
  { num: '05', title: 'Card da coleção' },
]

export default function Curriculum() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-cream">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(61,86,40,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(61,86,40,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, #000 30%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 75% at 50% 50%, #000 30%, transparent 85%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Image — primeiro no mobile, direita no desktop */}
          <FadeIn delay={60} className="order-first md:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.14)]">
              <Image
                src="/curriculum-kit.jpg"
                alt="Caderno artesanal premium feito com a técnica Sewn Boards"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/5' }}
              />
              {/* Tag flutuante */}
              <div className="absolute bottom-5 left-5 bg-dark/85 backdrop-blur-sm rounded-xl px-4 py-3">
                <p className="text-cream text-[12px] font-semibold tracking-wide">Kit completo incluso</p>
                <p className="text-cream/55 text-[11px]">5 produtos coordenados</p>
              </div>
            </div>
          </FadeIn>

          {/* Texto */}
          <div className="order-last md:order-first">
            <FadeIn delay={80}>
              <h2 className="font-headline text-[clamp(1.6rem,3vw,2.75rem)] font-bold text-dark leading-[1.2] mb-5">
                Desenvolva uma{' '}
                <em className="text-primary not-italic">coleção completa</em>{' '}
                de encadernação premium.
              </h2>
            </FadeIn>

            <FadeIn delay={140}>
              <p className="text-dark/65 text-[16px] leading-relaxed mb-9">
                Durante o Laboratório Sewn Boards, Leandro Mendes ensina passo a passo
                a construção de um kit coordenado de papelaria artesanal de alto padrão.
              </p>
            </FadeIn>

            {/* Kit cards */}
            <FadeIn delay={200}>
              <div className="flex flex-col gap-2.5 mb-8">
                {kitItems.map((item) => (
                  <div
                    key={item.num}
                    className="group flex items-center gap-4 bg-white border-l-[3px] border-primary rounded-r-xl px-5 py-3.5 shadow-card hover:translate-x-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)] transition-all duration-300"
                  >
                    <span className="flex-shrink-0 text-[11px] font-bold tracking-widest text-primary/70 font-sans w-6">
                      {item.num}
                    </span>
                    <span className="font-headline text-[17px] text-dark/90">{item.title}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-primary/90 font-medium text-[16px] leading-relaxed mb-8 border-t border-primary/15 pt-6">
                Tudo para criar uma linha visual coesa, sofisticada e com valor percebido elevado.
              </p>
            </FadeIn>

            <FadeIn delay={360}>
              <CTAButton href="#">Quero criar minha coleção</CTAButton>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
