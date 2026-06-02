import FadeIn from '@/components/FadeIn'

const professors = [
  {
    name: 'Jovana',
    role: 'Desenvolvimento Artístico',
    description:
      'Designer profissional, Jovana conduz a construção das coleções autorais do Laboratório. Através delas, você aprenderá a desenvolver suas próprias coleções pensando no seu público, na linguagem visual das peças e na construção de uma identidade mais autoral para o seu ateliê.',
    footer: 'Mais do que reproduzir projetos, a proposta é desenvolver olhar criativo.',
  },
  {
    name: 'Mayara',
    role: 'Desenvolvimento Criativo e Cultural',
    description:
      'Encadernadora, estudiosa da área e especialista em Canva, Mayara ensina como transformar as ideias da coleção em materiais gráficos de maneira simples e acessível. Você aprenderá a desenvolver capas, miolos, pastas e elementos da coleção utilizando o Canva sem complicação.',
    footer:
      'Além disso, Mayara conduz parte do aprofundamento cultural do Laboratório, apresentando a história da técnica Sewn Boards Binding e suas origens dentro da encadernação.',
  },
  {
    name: 'Leandro Mendes',
    role: 'Técnica e Processo',
    tag: 'Idealizador do projeto',
    description:
      'Com mais de 30 anos de experiência em encadernação e processos produtivos, Leandro conduz toda a parte técnica do Laboratório. Além da construção completa das peças da coleção, você aprenderá organização, acabamento e maneiras mais eficientes de produzir dentro da rotina do ateliê.',
    footer: 'Porque técnica também precisa caminhar junto com clareza de processo.',
  },
]

export default function Mechanism() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-dark">
      {/* Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-56 bg-primary/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-48 bg-accent/8 blur-3xl rounded-full pointer-events-none" />

      {/* Map background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <style>{`
          @keyframes mapDashDraw {
            from { stroke-dashoffset: 1200; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes mapPulseRing {
            0%   { transform: scale(1); opacity: 0.65; }
            100% { transform: scale(7); opacity: 0; }
          }
          @keyframes mapContourA {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-8px); }
          }
          @keyframes mapContourB {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(6px); }
          }
          @keyframes mapScan {
            0%   { transform: translateX(-280px); opacity: 0; }
            8%   { opacity: 1; }
            92%  { opacity: 1; }
            100% { transform: translateX(1480px); opacity: 0; }
          }
          @keyframes mapDotBlink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.35; }
          }
        `}</style>

        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1200 700"
        >
          <defs>
            <linearGradient id="scanGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%"   stopColor="rgba(196,107,75,0)" />
              <stop offset="40%"  stopColor="rgba(196,107,75,0.04)" />
              <stop offset="50%"  stopColor="rgba(196,107,75,0.09)" />
              <stop offset="60%"  stopColor="rgba(196,107,75,0.04)" />
              <stop offset="100%" stopColor="rgba(196,107,75,0)" />
            </linearGradient>
            <linearGradient id="routeFade" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%"   stopColor="rgba(196,107,75,0.15)" />
              <stop offset="50%"  stopColor="rgba(196,107,75,0.35)" />
              <stop offset="100%" stopColor="rgba(196,107,75,0.15)" />
            </linearGradient>
          </defs>

          {/* Coordinate grid — horizontal */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`gh${i}`}
              x1="0" y1={i * 65}
              x2="1200" y2={i * 65}
              stroke="rgba(247,236,226,0.055)"
              strokeWidth="0.6"
            />
          ))}

          {/* Coordinate grid — vertical */}
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={`gv${i}`}
              x1={i * 80} y1="0"
              x2={i * 80} y2="700"
              stroke="rgba(247,236,226,0.055)"
              strokeWidth="0.6"
            />
          ))}

          {/* Coordinate labels */}
          {['12°N','24°N','36°N','48°N'].map((label, i) => (
            <text
              key={label}
              x="8" y={130 + i * 130}
              fill="rgba(247,236,226,0.12)"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="1"
            >
              {label}
            </text>
          ))}
          {['18°W','36°W','54°W','72°W'].map((label, i) => (
            <text
              key={label}
              x={160 + i * 240} y="14"
              fill="rgba(247,236,226,0.12)"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="1"
            >
              {label}
            </text>
          ))}

          {/* Topographic contour lines */}
          <path
            d="M -50 180 C 150 130, 350 230, 600 175 S 920 120, 1250 185"
            fill="none"
            stroke="rgba(247,236,226,0.07)"
            strokeWidth="1"
            style={{ animation: 'mapContourA 18s ease-in-out infinite' }}
          />
          <path
            d="M -50 260 C 200 210, 420 310, 650 255 S 980 200, 1250 265"
            fill="none"
            stroke="rgba(247,236,226,0.05)"
            strokeWidth="1"
            style={{ animation: 'mapContourB 22s ease-in-out infinite' }}
          />
          <path
            d="M -50 420 C 180 380, 400 460, 700 410 S 1000 365, 1250 425"
            fill="none"
            stroke="rgba(247,236,226,0.05)"
            strokeWidth="1"
            style={{ animation: 'mapContourA 26s ease-in-out infinite reverse' }}
          />
          <path
            d="M -50 510 C 250 480, 500 545, 750 495 S 1050 450, 1250 515"
            fill="none"
            stroke="rgba(247,236,226,0.04)"
            strokeWidth="1"
            style={{ animation: 'mapContourB 20s ease-in-out infinite reverse' }}
          />

          {/* Route path connecting 3 stops */}
          <path
            d="M 180 530 C 280 460, 380 390, 520 350 S 700 320, 820 340 C 920 355, 1000 430, 1060 480"
            fill="none"
            stroke="url(#routeFade)"
            strokeWidth="1.5"
            strokeDasharray="7 5"
            style={{
              strokeDashoffset: 1200,
              animation: 'mapDashDraw 4s cubic-bezier(0.4,0,0.2,1) 0.5s forwards',
            }}
          />

          {/* Markers at 3 stops (Jovana / Mayara / Leandro) */}
          {([
            [180, 530],
            [820, 340],
            [1060, 480],
          ] as [number, number][]).map(([cx, cy], i) => (
            <g key={i}>
              {/* Outer pulsing ring */}
              <circle
                cx={cx} cy={cy} r={5}
                fill="none"
                stroke="rgba(196,107,75,0.55)"
                strokeWidth="1.2"
                style={{
                  transformOrigin: `${cx}px ${cy}px`,
                  transformBox: 'fill-box' as React.CSSProperties['transformBox'],
                  animation: `mapPulseRing 3s ease-out ${i * 1}s infinite`,
                }}
              />
              {/* Second pulse (offset) */}
              <circle
                cx={cx} cy={cy} r={5}
                fill="none"
                stroke="rgba(196,107,75,0.3)"
                strokeWidth="1"
                style={{
                  transformOrigin: `${cx}px ${cy}px`,
                  transformBox: 'fill-box' as React.CSSProperties['transformBox'],
                  animation: `mapPulseRing 3s ease-out ${i * 1 + 1.5}s infinite`,
                }}
              />
              {/* Core dot */}
              <circle
                cx={cx} cy={cy} r={3.5}
                fill="rgba(196,107,75,0.9)"
                style={{
                  animation: `mapDotBlink 3s ease-in-out ${i * 1}s infinite`,
                }}
              />
              {/* Cross hair */}
              <line x1={cx - 10} y1={cy} x2={cx - 5} y2={cy} stroke="rgba(196,107,75,0.35)" strokeWidth="0.8" />
              <line x1={cx + 5}  y1={cy} x2={cx + 10} y2={cy} stroke="rgba(196,107,75,0.35)" strokeWidth="0.8" />
              <line x1={cx} y1={cy - 10} x2={cx} y2={cy - 5} stroke="rgba(196,107,75,0.35)" strokeWidth="0.8" />
              <line x1={cx} y1={cy + 5}  x2={cx} y2={cy + 10} stroke="rgba(196,107,75,0.35)" strokeWidth="0.8" />
            </g>
          ))}

          {/* Scanning light sweep */}
          <rect
            x="-280" y="0" width="280" height="700"
            fill="url(#scanGrad)"
            style={{ animation: 'mapScan 10s ease-in-out 1s infinite' }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14 md:mb-16 max-w-2xl mx-auto">
          <FadeIn delay={80}>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Conheça quem vai te guiar
            </p>
            <h2 className="font-headline text-[clamp(1.75rem,3.5vw,2.9rem)] font-bold text-cream leading-[1.2] mb-5">
              Mapa do Laboratório
            </h2>
          </FadeIn>
          <FadeIn delay={140}>
            <p className="text-cream/80 text-[17px] leading-relaxed mb-1">
              O Laboratório da Encadernação foi construído a partir de três pilares:
            </p>
            <p className="text-primary text-[17px] font-semibold italic leading-relaxed mb-6">
              crescimento técnico, artístico e cultural.
            </p>
            <p className="text-cream/70 text-[16px] leading-relaxed">
              E para guiar essa jornada, reunimos três professores com diferentes especialidades dentro do universo da encadernação e da criação.
            </p>
          </FadeIn>
        </div>

        {/* Divider */}
        <FadeIn>
          <div className="w-12 h-px bg-primary/50 mx-auto mb-14" />
        </FadeIn>

        {/* Professor cards — notebook covers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {professors.map((prof, i) => (
            <FadeIn key={prof.name} delay={100 + i * 100} className="h-full">
              <div className="flex min-h-[420px] h-full rounded-2xl overflow-hidden shadow-dark-card transition-transform duration-300 hover:-translate-y-1.5">

                {/* Spine */}
                <div className="w-10 shrink-0 bg-dark-deep flex flex-col items-center justify-between py-7 border-r border-white/8">
                  <span
                    className="text-primary text-[9px] font-bold tracking-[0.3em] uppercase"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {prof.role}
                  </span>
                  <span className="font-mono text-cream/25 text-[10px]">0{i + 1}</span>
                </div>

                {/* Cover */}
                <div className="relative flex flex-col flex-1 bg-white px-6 py-7 overflow-hidden">

                  {/* Ruled lines (paper texture) */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.06]"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, #3d5628 27px, #3d5628 28px)',
                      backgroundPositionY: '48px',
                    }}
                  />

                  {/* Corner bracket */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-dark/30" />

                  {/* Volume */}
                  <p className="relative z-10 font-mono text-[10px] tracking-[0.28em] text-dark/50 mb-5">
                    vol. {['I', 'II', 'III'][i]}
                  </p>

                  {/* Tag */}
                  {prof.tag && (
                    <p className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-1">
                      {prof.tag}
                    </p>
                  )}

                  {/* Name */}
                  <h3 className="relative z-10 font-headline text-[1.75rem] font-bold text-dark leading-[1.1] mb-4">
                    {prof.name}
                  </h3>

                  {/* Thin rule */}
                  <div className="relative z-10 w-full h-px bg-dark/20 mb-4" />

                  {/* Description */}
                  <p className="relative z-10 text-dark/80 text-[13px] leading-relaxed flex-1">
                    {prof.description}
                  </p>

                  {/* Elastic band line */}
                  <div className="absolute z-10 left-0 right-0 bottom-[3.75rem] h-px bg-dark/15" />

                  {/* Footer */}
                  <p className="relative z-10 text-dark/60 text-[12px] italic mt-5 leading-snug">
                    {prof.footer}
                  </p>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Closing */}
        <FadeIn delay={200}>
          <div className="max-w-2xl mx-auto text-center border-t border-white/12 pt-12">
            <p className="text-cream/75 text-[16px] leading-relaxed mb-5">
              O Laboratório nasce justamente desse encontro:
            </p>
            <div className="inline-flex flex-col gap-1 text-left mb-6">
              {[
                'técnica para construir melhor,',
                'arte para criar com identidade,',
                'e repertório para compreender o valor do que se produz.',
              ].map((line) => (
                <p key={line} className="flex items-start gap-2 text-cream text-[17px] font-medium">
                  <span className="text-primary mt-1 text-[10px]">◆</span>
                  {line}
                </p>
              ))}
            </div>
            <p className="text-cream/65 text-[15px] leading-relaxed italic">
              Mais do que aprender encadernação, você desenvolverá uma nova forma de enxergar o próprio trabalho artesanal.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
