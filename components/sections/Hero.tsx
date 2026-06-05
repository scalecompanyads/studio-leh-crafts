import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

export default function Hero() {
  return (
    <section className="relative min-h-[560px] md:min-h-[min(100vh,820px)] flex items-end md:items-center overflow-hidden bg-[#E0CEAE] pt-[300px] pb-16 md:py-24">
      {/* Desktop: CSS background = arquivo em /public servido byte-a-byte, zero Next/Image */}
      <div
        className="absolute inset-0 z-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/desktop-bg2%20copiar2.jpg')" }}
        role="presentation"
        aria-hidden
      />
      {/* Mobile: arquivo estático em /public, sem Next/Image */}
      <div
        className="absolute inset-0 z-0 block md:hidden bg-contain bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/mobile-new.jpg')" }}
        role="presentation"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-lg text-center md:text-left mx-auto md:mx-0">

          <FadeIn>
            <Image
              src="/logo.png"
              alt="Studio Leh Crafts"
              width={140}
              height={52}
              className="mb-[20px] rounded-xl mx-auto md:mx-0"
            />
          </FadeIn>

          <FadeIn delay={200}>
            <h1
              className="font-headline text-[clamp(1.625rem,3.25vw,2.63rem)] md:text-[clamp(1.25rem,2.5vw,2.02rem)] font-bold leading-[1.1] text-primary mb-3"
            >
              Aprenda a construir uma coleção encantadora de papelaria artesanal a partir de três pilares:
            </h1>
            <p className="font-headline text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-primary/80 italic mb-5">
              crescimento técnico, artístico e cultural.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-black text-[17px] font-medium leading-relaxed mb-4 max-w-sm mx-auto md:mx-0">
              Desenvolva peças com mais presença, acabamento e identidade enquanto aprende a produzir um kit completo de papelaria premium utilizando a técnica Sewn Boards Binding.
            </p>
            <p className="text-black/85 text-[15px] leading-relaxed mb-7 max-w-sm mx-auto md:mx-0">
              Uma formação pensada tanto para quem deseja começar com estrutura, quanto para artesãs que já produzem, mas sentem que seus produtos ainda não expressam todo o valor do seu trabalho.
            </p>
          </FadeIn>

          <FadeIn delay={360}>
            <p className="text-[14px] text-primary font-semibold mb-5 mx-auto md:mx-0 max-w-sm text-center md:text-left">
              ✨ Coleção exclusiva + fichas técnicas + gabaritos de apoio
            </p>
          </FadeIn>

          <FadeIn delay={420}>
            <div className="flex flex-col items-center md:items-start gap-1">
              <CTAButton size="lg">
                Comprar Agora
              </CTAButton>
            </div>
          </FadeIn>

          <FadeIn delay={460}>
            <div className="flex justify-center md:justify-start gap-6 mt-10 pt-8 border-t border-dark/10">
              <div className="text-center md:text-left">
                <p className="font-headline text-[18px] font-bold text-primary leading-tight">Brasil</p>
                <p className="text-dark/85 text-[12px] mt-0.5 leading-tight">Alunas em todo o país</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-headline text-[18px] font-bold text-primary leading-tight">Zero</p>
                <p className="text-dark/85 text-[12px] mt-0.5 leading-tight">Equipamento industrial necessário</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-headline text-[18px] font-bold text-primary leading-tight">1 Técnica</p>
                <p className="text-dark/85 text-[12px] mt-0.5 leading-tight">Que muda tudo</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
