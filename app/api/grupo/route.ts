import { NextRequest, NextResponse } from 'next/server'
import {
  getMetaRequestContext,
  sendGrupoLeadEvent,
  type GroupTrackingData,
} from '@/lib/meta-conversions'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const trackingData = (await request.json()) as GroupTrackingData

  console.info('grupo track', trackingData)
  await sendGrupoLeadEvent(
    getMetaRequestContext({
      headers: request.headers,
      fbp: request.cookies.get('_fbp')?.value,
      fbc: request.cookies.get('_fbc')?.value,
    }),
    trackingData,
  )

  return NextResponse.json({ ok: true })
}
