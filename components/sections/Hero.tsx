'use client'

import { CheckCircle2, Brain } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { event } from '@/lib/analytics'
import { BUNDLE_PRICE, STRIPE_CHECKOUT_URL } from '@/lib/data'

const BULLETS = [
  'Skills 500+ ตัวพร้อมใช้งานทันที ไม่ต้องพิมพ์ prompt เองอีก',
  'ครอบคลุม 16 หมวดงาน ตั้งแต่ content ถึง data & strategy',
  'ใช้งานได้บน Claude.ai, Claude Code และ n8n',
  'ตั้งค่าเพียง 2 นาที เริ่มผลิตงานได้ทันที',
  'Lifetime update เมื่อ Claude ออกเวอร์ชันใหม่ — ฟรีตลอด',
]

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 md:pt-32 pb-16 bg-bg-base"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* ── Left col ── */}
          <div className="flex flex-col gap-6">
            <Badge variant="brand" size="sm">
              Skills Pack สำหรับธุรกิจยุค AI
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] text-text-primary">
              Skills 500+ ตัว
              <br />
              ทำให้ Claude ทำงาน
              <br />
              <em className="text-brand-primary not-italic">
                เหมือนทีม 16 แผนก
              </em>
              ของคุณ
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              หยุดเสียเวลาพิมพ์ prompt เองทุกวัน — ติดตั้ง Skills Bundle
              แล้วให้ Claude จัดการงานทุก department แทนคุณ ตั้งแต่ content,
              sales, data ไปถึง automation
            </p>

            <ul className="flex flex-col gap-3">
              {BULLETS.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2
                    size={20}
                    className="text-brand-primary shrink-0 mt-0.5"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <ButtonLink
                as="a"
                href={STRIPE_CHECKOUT_URL}
                size="lg"
                variant="primary"
                onClick={() => event({ action: 'click_cta', category: 'conversion', label: 'hero', value: BUNDLE_PRICE })}
              >
                สั่งซื้อ Bundle — ฿{BUNDLE_PRICE.toLocaleString()}
              </ButtonLink>
              <ButtonLink
                as="a"
                href="#modules"
                size="lg"
                variant="secondary"
              >
                ดูเนื้อหาทั้งหมด
              </ButtonLink>
            </div>

            <p className="text-sm text-text-muted">
              คืนเงิน 100% ภายใน 7 วัน · ดาวน์โหลดทันที · ใช้งานตลอดชีพ
            </p>
          </div>

          {/* ── Right col (desktop only) — ScrollReveal only on visual, not text (LCP) ── */}
          <ScrollReveal delay={0.2} className="hidden lg:flex items-center justify-center">
            <div className="bg-gradient-to-br from-brand-primary/20 to-bg-card aspect-square rounded-[24px] grid place-items-center w-full max-w-sm border border-brand-primary/20">
              <div className="flex flex-col items-center gap-4 p-8 text-center">
                <div className="w-20 h-20 rounded-[20px] bg-brand-primary/20 border border-brand-primary/30 grid place-items-center">
                  <Brain size={40} className="text-brand-primary" />
                </div>
                <div>
                  <p className="text-5xl font-black text-brand-primary">500+</p>
                  <p className="text-text-secondary text-sm mt-1">Skills พร้อมใช้งาน</p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full text-xs">
                  {['Claude Core', 'Content & Copy', 'Sales & CRM', 'n8n Automation'].map((m) => (
                    <div
                      key={m}
                      className="bg-bg-card rounded-[8px] p-2 border border-border-subtle text-text-muted text-center"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
