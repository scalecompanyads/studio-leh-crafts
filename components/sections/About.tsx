import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import CTAButton from '@/components/CTAButton'

export default function About() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-dark">
      {/* Glows sutis */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/6 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 md:gap-20 items-start">

          {/* Foto */}
          <FadeIn>
            <div className="relative max-w-[300px] md:max-w-none mx-auto w-full">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_56px_rgba(0,0,0,0.5),0_0_0_1px_rgba(196,107,75,0.15)]">
                <Image
                  src="/leh.jpg"
                  alt="Leandro Mendes Macedo — Studio Leh Crafts"
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 300px, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl px-4 py-3 shadow-[0_8px_24px_rgba(196,107,75,0.4)]">
                <p className="text-white text-[11px] font-bold tracking-wide uppercase">Fundador</p>
                <p className="text-white/80 text-[11px]">Studio Leh Crafts</p>
              </div>
            </div>
          </FadeIn>

          {/* Conteúdo */}
          <div>
            <FadeIn delay={120}>
              <h2 className="font-headline text-[clamp(1.7rem,3vw,2.6rem)] font-bold text-white leading-[1.2] mb-3">
                Conheça{' '}
                <em className="text-cream/85 not-italic">Leandro Mendes.</em>
              </h2>
              <p className="text-cream/55 text-sm md:text-base tracking-wide uppercase mb-7">
                Idealizador do Laboratório de Encadernção - Fundador do StudioLehCrafts
              </p>
            </FadeIn>

            <FadeIn delay={180}>
              <p className="text-cream/75 text-[16px] leading-[1.8] mb-5">
                Leandro Mendes Macedo é artesão, professor e fundador do Studio Leh Crafts.
                Sua trajetória foi construída dentro da prática da encadernação, atuando
                em oficinas de pequeno e médio porte, onde desenvolveu experiência em
                produção, organização de processos, acabamento e controle de qualidade.
              </p>
            </FadeIn>

            <FadeIn delay={230}>
              <p className="text-cream/75 text-[16px] leading-[1.8] mb-5">
                Com o passar dos anos, levou esse conhecimento para o universo da encadernação
                artesanal, aprofundando-se nas necessidades reais de artesãos e papeleiras que
                desejam transformar seus ateliês em negócios estruturados e valorizados.
              </p>
            </FadeIn>

            <FadeIn delay={280}>
              <p className="text-cream/75 text-[16px] leading-[1.8] mb-8">
                Hoje, Leandro une técnica, prática e posicionamento profissional para ajudar
                artesãs a criarem papelarias que encantam e desenvolverem produtos com mais
                valor dentro da economia criativa.
              </p>
            </FadeIn>

            {/* Credenciais */}
            <FadeIn delay={320}>
              <div className="grid grid-cols-3 gap-3 mb-8 py-6 border-t border-b border-white/8">
                {[
                  { valor: 'Milhares', label: 'de alunas no Brasil' },
                  { valor: 'Método', label: 'baseado em prática' },
                  { valor: 'Premium', label: 'do zero ao avançado' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-headline text-[17px] font-semibold text-cream/95 leading-tight">{stat.valor}</p>
                    <p className="text-cream/45 text-[12px] mt-0.5 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={380}>
              <div className="flex flex-col items-start gap-2">
                <CTAButton variant="primary">Quero aprender com Leandro</CTAButton>
                <span className="text-cream/40 text-xs tracking-wide">Aula de abertura em 05/06</span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
