import FadeIn from '@/components/FadeIn'

const profiles = [
  'iniciantes que querem começar já com estrutura profissional',
  'artesãos que desejam sair do artesanal comum',
  'papeleiras que querem cobrar mais pelas próprias peças',
  'criadoras autorais que buscam diferenciação estética',
  'quem deseja transformar técnica em valor percebido',
]

export default function ForWhom() {
  return (
    <section className="relative overflow-hidden py-32 md:py-36" style={{
      background: 'linear-gradient(160deg, #3f5a2a 0%, #3d5628 45%, #2d3f1e 100%)',
    }}>
      {/* Aurora */}
      <div
        className="absolute inset-[-30%] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 25% 30%, rgba(196,107,75,0.28) 0%, transparent 38%), radial-gradient(circle at 75% 70%, rgba(247,236,226,0.16) 0%, transparent 38%), radial-gradient(circle at 50% 50%, rgba(108,122,58,0.18) 0%, transparent 55%)',
          filter: 'blur(40px)',
          animation: 'aurora 22s linear infinite',
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(247,236,226,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(247,236,226,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="text-center mb-14">
          <FadeIn delay={80}>
            <h2 className="font-headline text-[clamp(1.75rem,4vw,3rem)] font-bold text-white leading-[1.15] max-w-2xl mx-auto mb-5">
              Para artesãos que sabem que o acabamento define o{' '}
              <em className="text-cream/90 not-italic">valor da peça.</em>
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-cream/80 text-[17px] max-w-xl mx-auto leading-relaxed">
              Se você se identifica com algum desses perfis, o Laboratório Sewn Boards foi feito para você.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {profiles.map((profile, i) => (
            <FadeIn
              key={profile}
              delay={200 + i * 80}
              className={profiles.length % 2 !== 0 && i === profiles.length - 1 ? 'md:col-span-2 md:max-w-[calc(50%-6px)] md:mx-auto md:w-full' : ''}
            >
              <div className="relative overflow-hidden flex items-center gap-4 bg-white/6 border border-white/10 rounded-xl px-6 py-5 hover:bg-white/10 hover:border-primary/35 transition-all duration-300">
                <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-accent/20 border border-accent/40 text-accent font-bold">
                  ✓
                </span>
                <span className="text-cream/95 text-[15px] font-medium leading-snug">{profile}</span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
