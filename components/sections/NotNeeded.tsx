import FadeIn from '@/components/FadeIn'

const items = [
  'Experiência prévia em encadernação',
  'Máquinas industriais, prensas ou ferramentas raras',
  'Material importado ou caro',
  'Ateliê montado',
  '"Dom" (precisa de método)',
]

export default function NotNeeded() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-dark/6">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto">

          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-headline text-[clamp(1.4rem,2.6vw,2.2rem)] font-bold text-dark leading-tight">
                Para começar, você não precisa de:
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {items.map((item, i) => (
              <FadeIn
                key={item}
                delay={i * 70}
                className={items.length % 2 !== 0 && i === items.length - 1 ? 'sm:col-span-2 sm:max-w-[calc(50%-5px)] sm:mx-auto sm:w-full' : ''}
              >
                <div className="flex items-center gap-3.5 bg-cream border border-dark/15 rounded-xl px-4 py-4 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-primary/10 border border-primary/25 text-primary font-bold text-xs">
                    ✗
                  </span>
                  <span className="text-dark font-semibold text-[14px] leading-snug">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
