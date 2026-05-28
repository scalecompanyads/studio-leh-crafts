'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/FGS2YZAmMPAEv1NvPKklJI'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

function getCookie(name: string) {
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${name}=`))

  return cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : null
}

export default function GrupoRedirect() {
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()

  useEffect(() => {
    const currentUrl = new URL(window.location.href)
    const eventId =
      typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`

    const trackingData = {
      utmSource: searchParams.get('utm_source') ?? 'direto',
      utmMedium: searchParams.get('utm_medium') ?? 'sem_medium',
      utmCampaign: searchParams.get('utm_campaign') ?? 'sem_campanha',
      utmContent: searchParams.get('utm_content'),
      utmTerm: searchParams.get('utm_term'),
      fullUrl: currentUrl.toString(),
      fbclid: searchParams.get('fbclid'),
      eventId,
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc'),
    }

    let hasRedirected = false
    let hasSentServerEvent = false
    let waitTimer: number | undefined

    const redirectToWhatsapp = () => {
      if (hasRedirected) {
        return
      }

      hasRedirected = true
      window.location.replace(WHATSAPP_GROUP_URL)
    }

    const sendServerEvent = () => {
      if (hasSentServerEvent) {
        return
      }

      hasSentServerEvent = true

      void fetch('/api/grupo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trackingData),
        keepalive: true,
      }).catch(() => undefined)
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

      sendServerEvent()
      window.setTimeout(redirectToWhatsapp, 700)
    }

    const waitForPixel = () => {
      if (typeof window.fbq === 'function') {
        fireAndRedirect()
        return
      }

      waitTimer = window.setTimeout(waitForPixel, 50)
    }

    waitForPixel()

    const fallbackTimer = window.setTimeout(() => {
      sendServerEvent()
      redirectToWhatsapp()
    }, 1800)

    return () => {
      if (waitTimer) {
        window.clearTimeout(waitTimer)
      }

      window.clearTimeout(fallbackTimer)
    }
  }, [queryString])

  return (
    <main className="min-h-screen bg-[#DFCDAD] text-dark flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-headline text-3xl text-primary mb-4">Quase l&aacute;...</p>
        <p className="text-dark/70 mb-6">
          Estamos te levando para o grupo VIP no WhatsApp.
        </p>
        <a
          href={WHATSAPP_GROUP_URL}
          className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-4 font-bold"
        >
          Entrar agora
        </a>
      </div>
    </main>
  )
}
