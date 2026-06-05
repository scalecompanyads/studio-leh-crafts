'use client'

import { useState } from 'react'
import FadeIn from '@/components/FadeIn'

const faqs = [
  {
    q: 'Eu nunca fiz encadernação na vida. Vou conseguir acompanhar?',
    a: 'Sim. A aula começa do zero absoluto, sem pré-requisitos.',
  },
  {
    q: 'Preciso ter ateliê ou ferramentas profissionais?',
    a: 'Não. O método foi pensado pro ateliê artesanal, com material acessível.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative bg-cream py-24 md:py-28">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-primary/6 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-headline text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-dark leading-tight">
              Perguntas frequentes.
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  open === i
                    ? 'border-primary/40 shadow-[0_12px_32px_rgba(0,0,0,0.08)]'
                    : 'border-muted/22 shadow-card hover:border-primary/30'
                } bg-white`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-[16px] text-dark leading-snug">{faq.q}</span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-primary/12 border border-primary/35 text-primary text-lg font-light transition-transform duration-300 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 pt-0 text-[15px] text-dark/95 font-medium leading-relaxed border-t border-muted/15">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
