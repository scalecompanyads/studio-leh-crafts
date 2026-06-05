import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

const kitItems = [
  { num: '01', title: 'Caderno artesanal utilizando a técnica Sewn Boards Binding' },
  { num: '02', title: 'Pasta premium para documentos' },
  { num: '03', title: 'Envelope com papel de carta' },
  { num: '04', title: 'Marcador de páginas' },
  { num: '05', title: 'Card conceitual contando a história da coleção' },
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
                src="/carousel-4.png"
                alt="Coleção Bloom Lines • cadernos, marca-página, card e envelope artesanal"
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
                de encadernação autoral.
              </h2>
            </FadeIn>

            <FadeIn delay={140}>
              <p className="text-dark/95 text-[16px] font-medium leading-relaxed mb-3">
                Durante o Laboratório da Encadernação, Leandro Mendes e seu time conduzem passo a passo a construção de uma coleção coordenada de papelaria artesanal.
              </p>
              <p className="text-dark/90 text-[16px] leading-relaxed mb-9">
                Cada peça foi pensada para conversar entre si, criando uma experiência visual coesa, elegante e cheia de identidade.
              </p>
            </FadeIn>

            {/* Kit cards */}
            <FadeIn delay={200}>
              <div className="flex flex-col gap-2.5 mb-8">
                {kitItems.map((item) => (
                  <div
                    key={item.num}
                    className="group flex items-center gap-4 bg-white border-l-[3px] border-primary border-t border-r border-b border-dark/10 rounded-r-xl px-5 py-3.5 shadow-card hover:translate-x-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)] transition-all duration-300"
                  >
                    <span className="flex-shrink-0 text-[11px] font-bold tracking-widest text-primary/70 font-sans w-6">
                      {item.num}
                    </span>
                    <span className="font-headline text-[17px] text-dark font-semibold">{item.title}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="border-t border-primary/15 pt-6 mb-8">
                <p className="text-dark/95 text-[16px] leading-relaxed mb-2">
                  Mais do que aprender peças isoladas, você desenvolverá um conjunto construído com intenção, acabamento e presença.
                </p>
                <p className="text-primary font-bold text-[16px] leading-relaxed">
                  Uma coleção pensada para transmitir valor desde o primeiro contato.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={360}>
              <CTAButton>✨ Comprar Agora</CTAButton>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
