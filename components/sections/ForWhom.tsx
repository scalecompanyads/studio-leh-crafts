import FadeIn from '@/components/FadeIn'

const profiles = [
  'iniciantes que desejam começar da maneira certa, com estrutura e entendimento do processo',
  'papeleiras que sentem que suas peças já merecem cobrar valores mais justos',
  'artesãs que desejam sair do artesanal comum e construir coleções com mais presença',
  'criadoras autorais em busca de identidade visual e diferenciação estética',
  'quem deseja transformar técnica em valor percebido',
  'quem entende que acabamento, organização e repertório também fazem parte do crescimento artesanal',
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

        <div className="text-center mb-12">
          <FadeIn delay={80}>
            <h2 className="font-headline text-[clamp(1.75rem,4vw,3rem)] font-bold text-white leading-[1.15] max-w-2xl mx-auto mb-5">
              Para artesãs que querem crescer{' '}
              <em className="text-cream not-italic">para além das técnicas</em>
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-cream text-[16px] max-w-xl mx-auto font-medium leading-relaxed mb-2">
              O Laboratório da Encadernação foi pensado para quem deseja desenvolver não apenas habilidade manual, mas também presença, identidade e visão dentro da economia criativa.
            </p>
            <p className="text-cream/90 text-[15px] max-w-md mx-auto font-medium leading-relaxed">
              Se você se identifica com algum desses caminhos, provavelmente o Laboratório foi feito para você:
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-14">
          {profiles.map((profile, i) => (
            <FadeIn key={profile} delay={200 + i * 80}>
              <div className="relative overflow-hidden flex items-start gap-4 bg-white/6 border border-white/15 rounded-xl px-6 py-5 hover:bg-white/10 hover:border-primary/35 transition-all duration-300 h-full">
                <span className="flex-shrink-0 w-7 h-7 mt-0.5 rounded-full flex items-center justify-center bg-accent border border-accent/40 text-cream font-bold text-[13px]">
                  ✓
                </span>
                <span className="text-cream text-[15px] font-semibold leading-snug">{profile}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Closing */}
        <FadeIn delay={700}>
          <div className="max-w-xl mx-auto text-center border-t border-white/15 pt-10">
            <p className="text-cream/90 text-[16px] font-medium leading-relaxed mb-4">
              O Laboratório nasce justamente para esse momento:
            </p>
            <p className="text-cream text-[17px] leading-[1.9] font-semibold">
              quando a artesã percebe que não quer apenas produzir peças bonitas,<br />
              mas construir um trabalho com mais intenção, presença e valor.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
