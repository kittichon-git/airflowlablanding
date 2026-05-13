import type { Metadata } from 'next'
import { Noto_Sans_Thai, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyBar } from '@/components/layout/MobileStickyBar'
import { AnalyticsScripts } from '@/components/analytics/AnalyticsScripts'

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://airflowlab.example.com',
  ),
  title: {
    default: 'aiflowlab — Claude Skills Bundle 500+ Skills ฿997',
    template: '%s | aiflowlab',
  },
  description:
    'Skills Pack สำหรับธุรกิจยุค AI · 500+ Skills · 16 หมวดหมู่ · ใช้กับ Claude · ราคา ฿997 · คืนเงิน 7 วัน',
  keywords: ['Claude Skills', 'AI Bundle', 'Thai business', 'productivity', 'Anthropic'],
  authors: [{ name: 'AI Flow' }],
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: '/',
    siteName: 'aiflowlab',
    title: 'Claude Skills Bundle 500+ Skills — ฿997',
    description: 'ทำให้ Claude ทำงานเหมือนทีม 16 แผนกของคุณ',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'aiflowlab' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills Bundle — ฿997',
    description: 'Skills 500+ ตัว ทำให้ Claude ทำงานเหมือนทีม 16 แผนก',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${notoThai.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-thai min-h-full flex flex-col">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-brand-primary focus:text-bg-base focus:px-4 focus:py-2 focus:rounded"
        >
          ข้ามไปเนื้อหาหลัก
        </a>
        <Header />
        <main id="main-content" role="main" className="flex-1 pt-12">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
        <AnalyticsScripts />
      </body>
    </html>
  )
}
