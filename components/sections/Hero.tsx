import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

export default function Hero() {
  return (
    <section className="relative min-h-[560px] flex items-end md:items-center overflow-hidden bg-[#DFCDAD] pt-[300px] pb-16 md:py-24">
      {/* Background image — sem overlay de gradiente */}
      <Image
        src="/desktop-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center hidden md:block"
        sizes="100vw"
      />
      <Image
        src="/mobile-bg.jpg"
        alt=""
        fill
        priority
        className="object-contain object-top block md:hidden"
        sizes="100vw"
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
              className="mb-7 rounded-xl mx-auto md:mx-0"
            />
          </FadeIn>

          <FadeIn delay={200}>
            <h1
              className="font-headline text-[clamp(1.79rem,3.57vw,2.89rem)] font-bold leading-[1.1] text-primary mb-5 mt-[80px] md:mt-0"
            >
              Aprenda a montar um kit completo de papelaria artesanal premium começando do zero,
              sem material caro e sem ateliê.
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-black/80 text-[17px] leading-relaxed mb-9 max-w-sm mx-auto md:mx-0">
              O Laboratório Sewn Boards ensina a técnica que transforma encadernação artesanal em produto premium — para quem quer começar do zero já com padrão profissional, ou para quem vende há anos e ainda cobra menos do que deveria.
            </p>
          </FadeIn>

          <FadeIn delay={380}>
            <div className="flex flex-col items-center md:items-start gap-3">
              <CTAButton href="#" size="lg">
                Entrar no Grupo VIP da Aula de Abertura
              </CTAButton>
              <p className="text-black/55 text-[13px]">
                Acesso gratuito · Aula ao vivo em 05/06
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={460}>
            <div className="flex justify-center md:justify-start gap-6 mt-10 pt-8 border-t border-dark/10">
              <div className="text-center md:text-left">
                <p className="font-headline text-[18px] font-bold text-primary leading-tight">Brasil</p>
                <p className="text-dark/55 text-[12px] mt-0.5 leading-tight">Alunas em todo o país</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-headline text-[18px] font-bold text-primary leading-tight">Zero</p>
                <p className="text-dark/55 text-[12px] mt-0.5 leading-tight">Equipamento industrial necessário</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-headline text-[18px] font-bold text-primary leading-tight">1 Técnica</p>
                <p className="text-dark/55 text-[12px] mt-0.5 leading-tight">Que muda tudo</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
