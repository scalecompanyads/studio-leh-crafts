import Script from 'next/script'
import { Suspense } from 'react'
import GrupoRedirect from '@/components/grupo/GrupoRedirect'

export const dynamic = 'force-dynamic'

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

export default function GrupoPage() {
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
        <GrupoRedirect />
      </Suspense>
    </>
  )
}
