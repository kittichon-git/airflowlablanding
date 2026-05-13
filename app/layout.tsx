import type { Metadata } from 'next'
import { Noto_Sans_Thai, Inter } from 'next/font/google'
import './globals.css'

const notoThai = Noto_Sans_Thai({
  variable: '--font-noto-thai',
  subsets: ['thai'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'aiflowlab — Claude Skills Bundle ฿997',
  description:
    'เรียนรู้ทักษะ Claude AI และ n8n อย่างครบถ้วน ปลดล็อคศักยภาพการทำงานด้วย AI ในราคาเพียง ฿997',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${notoThai.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-thai min-h-full flex flex-col">{children}</body>
    </html>
  )
}
