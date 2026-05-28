import type { NextRequest } from 'next/server'

const META_PIXEL_ID = '978455578134970'
const META_API_VERSION = 'v20.0'
const META_ACCESS_TOKEN = process.env.META_CONVERSIONS_ACCESS_TOKEN

type GroupTrackingData = {
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string | null
  utmTerm: string | null
  fullUrl: string
  fbclid: string | null
}

function removeEmptyValues<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== null && entry !== undefined && entry !== ''),
  )
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim()
  }

  return request.headers.get('x-real-ip') ?? undefined
}

export async function sendGrupoLeadEvent(
  request: NextRequest,
  trackingData: GroupTrackingData,
) {
  if (!META_ACCESS_TOKEN) {
    console.warn('Meta CAPI skipped: META_CONVERSIONS_ACCESS_TOKEN is not configured.')
    return
  }

  try {
    const fbp = request.cookies.get('_fbp')?.value
    const existingFbc = request.cookies.get('_fbc')?.value
    const generatedFbc = trackingData.fbclid ? `fb.1.${Date.now()}.${trackingData.fbclid}` : undefined

    const payload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          event_id: crypto.randomUUID(),
          action_source: 'website',
          event_source_url: trackingData.fullUrl,
          user_data: removeEmptyValues({
            client_ip_address: getClientIp(request),
            client_user_agent: request.headers.get('user-agent') ?? undefined,
            fbp,
            fbc: existingFbc ?? generatedFbc,
          }),
          custom_data: removeEmptyValues({
            content_name: 'Grupo WhatsApp Studio Leh Crafts',
            destination_url: trackingData.fullUrl,
            utm_source: trackingData.utmSource,
            utm_medium: trackingData.utmMedium,
            utm_campaign: trackingData.utmCampaign,
            utm_content: trackingData.utmContent,
            utm_term: trackingData.utmTerm,
          }),
        },
      ],
    }

    const response = await fetch(
      `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
        signal: AbortSignal.timeout(1500),
      },
    )

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Meta CAPI request failed', response.status, errorBody)
    }
  } catch (error) {
    console.error('Meta CAPI request errored', error)
  }
}
