import FadeIn from '@/components/FadeIn'
import Carousel from '@/components/Carousel'

const carouselImages = [
  { src: '/carousel-1.png', alt: 'Fichas técnicas e gabaritos do Laboratório' },
  { src: '/carousel-2.png', alt: 'Marca-página e envelope artesanal com tag Lab' },
  { src: '/carousel-3.png', alt: 'Kit completo Doce Cereja • caderno, pasta, envelope, marca-página e card' },
  { src: '/carousel-4.png', alt: 'Coleção Bloom Lines • cadernos e envelope artesanal' },
  { src: '/carousel-5.png', alt: 'Coleção Ciclos • kit completo de papelaria premium' },
  { src: '/carousel-6.png', alt: 'Gabarito de envelope e envelopes artesanais prontos' },
]

const collectionItems = [
  'caderno',
  'pasta premium',
  'envelope',
  'marcador de páginas',
  'card conceitual da coleção',
]

const resultItems = [
  'Você passa a cobrar valores mais justos pelo seu trabalho.',
  'O cliente deixa de comparar apenas preço, porque percebe identidade e intenção no que você produz.',
  'Suas peças começam a carregar uma linguagem própria.',
  'O acabamento transmite mais presença, cuidado e profissionalismo.',
  'Seu ateliê passa a ser percebido como um espaço criativo e autoral.',
]

export default function Pain() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      {/* Dot grid */}
      <div
        className="absolute inset-0 dot-pattern pointer-events-none opacity-60"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 50%, #000 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 50%, #000 20%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">

          <FadeIn delay={80}>
            <h2 className="font-headline text-[clamp(1.6rem,3.5vw,2.75rem)] font-bold leading-[1.2] text-dark mb-5">
              É isso que separa quem vende barato de quem cobra valores justos!
            </h2>
          </FadeIn>

          <FadeIn delay={140}>
            <p className="text-dark/90 text-[17px] font-medium leading-relaxed mb-4 max-w-xl mx-auto">
              No Laboratório, você desenvolverá uma coleção completa de papelaria artesanal:
            </p>
            <ul className="flex flex-col gap-1.5 mb-6 max-w-xs mx-auto text-left">
              {collectionItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-dark text-[16px] font-medium">
                  <span className="text-primary font-bold">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-dark/90 text-[16px] leading-relaxed mb-10 max-w-xl mx-auto">
              Tudo pensado para funcionar em conjunto, criando uma experiência visual coesa e um acabamento que realmente transmite valor.
            </p>
          </FadeIn>

          <FadeIn delay={180}>
            <Carousel images={carouselImages} />
          </FadeIn>

          <FadeIn delay={240}>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary mb-6 mt-12">
              O resultado?
            </p>
          </FadeIn>

          {/* Result cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 max-w-3xl mx-auto">
            {resultItems.map((item, i) => (
              <FadeIn key={item} delay={220 + i * 60}>
                <div className="relative overflow-hidden flex items-start gap-3 bg-white border border-dark/15 rounded-xl px-5 py-5 text-left shadow-card hover:-translate-y-0.5 hover:shadow-card-hover hover:border-primary/25 transition-all duration-300 h-full">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl bg-gradient-to-b from-primary to-primary/25" />
                  <span className="shrink-0 font-headline text-[11px] font-bold tracking-widest text-primary/50 mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-dark text-[14px] font-medium leading-snug">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Quote */}
          <FadeIn delay={520}>
            <blockquote className="relative bg-white border border-primary/15 rounded-2xl px-8 py-9 md:px-12 shadow-card mb-8 text-left max-w-2xl mx-auto overflow-hidden">
              <span className="absolute -top-2 left-5 font-headline text-[96px] leading-none text-primary/10 select-none pointer-events-none">
                &ldquo;
              </span>
              <p className="relative text-[18px] md:text-[20px] font-semibold italic text-dark leading-[1.65]">
                Existe uma diferença enorme entre fazer encadernação artesanal
                e criar peças editoriais de coleção.
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="text-dark font-bold text-[17px]">
              E essa diferença está no desenvolvimento técnico, artístico e cultural da artesã.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
