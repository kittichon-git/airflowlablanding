import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'aiflowlab — Claude Skills Bundle'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0e1a',
          color: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 80,
        }}
      >
        <div style={{ fontSize: 32, color: '#00d4c8', marginBottom: 16, fontWeight: 700 }}>
          aiflowlab
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Claude Skills Bundle
          <br />
          500+ Skills · ฿997
        </div>
        <div style={{ fontSize: 28, color: '#b8c0d0', marginTop: 24 }}>
          ทำให้ Claude ทำงานเหมือนทีม 16 แผนก
        </div>
        <div
          style={{
            marginTop: 40,
            background: '#00d4c8',
            color: '#0a0e1a',
            borderRadius: 12,
            padding: '12px 32px',
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          คืนเงิน 7 วัน · ดาวน์โหลดทันที · ตลอดชีพ
        </div>
      </div>
    ),
    size,
  )
}
