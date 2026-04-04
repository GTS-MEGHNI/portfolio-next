import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/constants'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    <div style={{
      background: '#0f1117',
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '80px',
      borderLeft: '6px solid #1a5fa8',
    }}>
      <p style={{ color: '#94a3b8', fontSize: 24, margin: '0 0 16px' }}>
        mohamedelaminemeghni.com
      </p>
      <h1 style={{ color: '#e2e8f0', fontSize: 64, fontWeight: 700, margin: '0 0 24px', lineHeight: 1.1 }}>
        {SITE.name}
      </h1>
      <p style={{ color: '#1a5fa8', fontSize: 28, margin: 0 }}>
        Senior Backend Engineer · DevOps · Solution Architecture
      </p>
      <p style={{ color: '#94a3b8', fontSize: 22, marginTop: 32 }}>
        Open to remote worldwide
      </p>
    </div>
  )
}
