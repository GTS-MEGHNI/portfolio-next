import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/constants'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    <div style={{ background: '#262b30', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', height: 64, alignItems: 'center', padding: '0 56px', color: '#fff', fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
        MEGHNI
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div
          style={{
            flex: 1,
            background: '#f7f8f8',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 56px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: '#14a44d' }} />
            <p style={{ color: '#4f5961', fontSize: 26, margin: 0 }}>Available for full-time remote roles</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ color: '#14181b', fontSize: 92, fontWeight: 700, lineHeight: 0.95, margin: 0, textTransform: 'uppercase', letterSpacing: -1 }}>
              Mohamed El Amine Meghni
            </h1>
            <p style={{ color: '#1f3fbf', fontSize: 38, fontWeight: 700, margin: '18px 0 0', textTransform: 'uppercase' }}>
              Engineering Leader · Backend &amp; Platform
            </p>
            <p style={{ color: '#4f5961', fontSize: 30, margin: '10px 0 0' }}>CTO @ Sadeem Informatique</p>
          </div>
          <p style={{ color: '#4f5961', fontSize: 26, margin: 0 }}>
            Laravel · NestJS · Linux servers · CI/CD · Observability · {SITE.url.replace('https://', '')}
          </p>
        </div>
      </div>
    </div>
  )
}
