import { NextRequest, NextResponse } from 'next/server'
import { sendGrupoLeadEvent } from '@/lib/meta-conversions'

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/FGS2YZAmMPAEv1NvPKklJI'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const trackingData = {
    utmSource: searchParams.get('utm_source') ?? 'direto',
    utmMedium: searchParams.get('utm_medium') ?? 'sem_medium',
    utmCampaign: searchParams.get('utm_campaign') ?? 'sem_campanha',
    utmContent: searchParams.get('utm_content') ?? null,
    utmTerm: searchParams.get('utm_term') ?? null,
    fullUrl: request.url,
    fbclid: searchParams.get('fbclid') ?? null,
  }

  console.info('grupo redirect', trackingData)
  await sendGrupoLeadEvent(request, trackingData)

  return NextResponse.redirect(WHATSAPP_GROUP_URL, { status: 302 })
}
