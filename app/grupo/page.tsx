import Script from 'next/script'
import { Suspense } from 'react'
import { cookies, headers } from 'next/headers'
import GrupoRedirect from '@/components/grupo/GrupoRedirect'
import {
  getMetaRequestContext,
  sendGrupoLeadEvent,
  type GroupTrackingData,
} from '@/lib/meta-conversions'

export const dynamic = 'force-dynamic'
const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/FGS2YZAmMPAEv1NvPKklJI'

function LoadingState() {
  return (
    <main className="min-h-screen bg-[#DFCDAD] text-dark flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-headline text-3xl text-primary mb-4">Redirecionando...</p>
        <p className="text-dark/70">
          Estamos te levando para o grupo VIP no WhatsApp.
        </p>
      </div>
    </main>
  )
}

type GrupoPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function getFirstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function GrupoPage({ searchParams }: GrupoPageProps) {
  const resolvedSearchParams = await searchParams
  const requestHeaders = await headers()
  const cookieStore = await cookies()
  const protocol = requestHeaders.get('x-forwarded-proto') ?? 'https'
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host')
  const eventId = crypto.randomUUID()
  const url = new URL('/grupo', `${protocol}://${host}`)

  Object.entries(resolvedSearchParams).forEach(([key, value]) => {
    const firstValue = getFirstValue(value)

    if (firstValue) {
      url.searchParams.set(key, firstValue)
    }
  })

  const trackingData: GroupTrackingData = {
    utmSource: getFirstValue(resolvedSearchParams.utm_source) ?? 'direto',
    utmMedium: getFirstValue(resolvedSearchParams.utm_medium) ?? 'sem_medium',
    utmCampaign: getFirstValue(resolvedSearchParams.utm_campaign) ?? 'sem_campanha',
    utmContent: getFirstValue(resolvedSearchParams.utm_content) ?? null,
    utmTerm: getFirstValue(resolvedSearchParams.utm_term) ?? null,
    fullUrl: url.toString(),
    fbclid: getFirstValue(resolvedSearchParams.fbclid) ?? null,
    eventId,
    fbp: cookieStore.get('_fbp')?.value ?? null,
    fbc: cookieStore.get('_fbc')?.value ?? null,
  }

  await sendGrupoLeadEvent(
    getMetaRequestContext({
      headers: requestHeaders,
      fbp: cookieStore.get('_fbp')?.value,
      fbc: cookieStore.get('_fbc')?.value,
    }),
    trackingData,
  )

  return (
    <>
      <Script id="meta-pixel-base" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '978455578134970');
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src="https://www.facebook.com/tr?id=978455578134970&ev=PageView&noscript=1"
        />
      </noscript>

      <Suspense fallback={<LoadingState />}>
        <GrupoRedirect
          eventId={eventId}
          whatsappGroupUrl={WHATSAPP_GROUP_URL}
        />
      </Suspense>
    </>
  )
}
