'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

type GrupoRedirectProps = {
  eventId: string
  whatsappGroupUrl: string
}

export default function GrupoRedirect({
  eventId,
  whatsappGroupUrl,
}: GrupoRedirectProps) {
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()

  useEffect(() => {
    let hasRedirected = false
    let waitTimer: number | undefined

    const redirectToWhatsapp = () => {
      if (hasRedirected) {
        return
      }

      hasRedirected = true
      window.location.replace(whatsappGroupUrl)
    }

    const fireAndRedirect = () => {
      window.fbq?.(
        'track',
        'Lead',
        {
          content_name: 'Grupo WhatsApp Studio Leh Crafts',
        },
        {
          eventID: eventId,
        },
      )

      window.setTimeout(redirectToWhatsapp, 1500)
    }

    const waitForPixel = () => {
      if (typeof window.fbq === 'function') {
        fireAndRedirect()
        return
      }

      waitTimer = window.setTimeout(waitForPixel, 50)
    }

    waitForPixel()

    const fallbackTimer = window.setTimeout(redirectToWhatsapp, 3000)

    return () => {
      if (waitTimer) {
        window.clearTimeout(waitTimer)
      }

      window.clearTimeout(fallbackTimer)
    }
  }, [eventId, queryString, whatsappGroupUrl])

  return (
    <main className="min-h-screen bg-[#DFCDAD] text-dark flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-headline text-3xl text-primary mb-4">Quase l&aacute;...</p>
        <p className="text-dark/70 mb-6">
          Estamos te levando para o grupo VIP no WhatsApp.
        </p>
        <a
          href={whatsappGroupUrl}
          className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-4 font-bold"
        >
          Entrar agora
        </a>
      </div>
    </main>
  )
}
