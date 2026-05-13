'use client'

import { CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { event } from '@/lib/analytics'
import { MODULES, BONUSES, BUNDLE_PRICE, ORIGINAL_VALUE, BONUS_VALUE, STRIPE_CHECKOUT_URL } from '@/lib/data'

const TOTAL_VALUE = ORIGINAL_VALUE + BONUS_VALUE // 23993 + 8490 = 32483

const TRUST_POINTS = [
  'ผ่อน 0% บัตรเครดิต',
  'คืนเงิน 7 วัน ไม่มีเงื่อนไข',
  'ดาวน์โหลดได้ทันที',
  'เข้าถึงตลอดชีพ',
  'บัตร / QR / TrueMoney',
  'LINE Official Support',
]

export function PricingCard() {
  return (
    <Section
      id="pricing"
      eyebrow="โปรโมชั่นพิเศษ"
      title="สั่งซื้อ Bundle วันนี้"
      align="center"
    >
      <ScrollReveal>
        <div className="bg-bg-card rounded-[24px] border-2 border-brand-primary/50 relative overflow-hidden max-w-4xl mx-auto shadow-2xl ring-2 ring-brand-primary/10">
          {/* Corner ribbon */}
          <div className="absolute top-6 right-0 z-10 pointer-events-none">
            <div className="bg-danger text-white px-8 py-2 font-bold tracking-wide text-sm rotate-45 translate-x-8 -translate-y-2">
              Save 96%
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: product mockup */}
            <div className="p-8 flex items-center justify-center border-b border-border-subtle lg:border-b-0 lg:border-r lg:border-border-subtle">
              <div className="bg-gradient-to-br from-brand-primary/15 to-bg-elevated aspect-square rounded-[20px] grid place-items-center w-full max-w-xs border border-brand-primary/20">
                <div className="text-center p-8">
                  <p className="text-6xl font-black text-brand-primary">500+</p>
                  <p className="text-text-secondary mt-2 text-sm">Claude Skills Bundle</p>
                  <p className="text-text-muted text-xs mt-1">7 Modules · 16 Categories</p>
                </div>
              </div>
            </div>

            {/* Right: breakdown */}
            <div className="p-8 flex flex-col gap-3">
              <p className="text-text-muted text-sm font-semibold uppercase tracking-wide mb-1">รายละเอียด</p>

              {/* Modules */}
              {MODULES.map((mod, i) => (
                <div key={mod.id} className="flex justify-between items-center text-sm py-1">
                  <span className="text-text-secondary">Module {i + 1} — {mod.title}</span>
                  <span className="text-text-muted shrink-0 ml-4">฿{mod.price.toLocaleString()}</span>
                </div>
              ))}

              <div className="border-t border-border-subtle my-1" />

              {/* Bonuses */}
              {BONUSES.map((bonus, i) => (
                <div key={bonus.id} className="flex justify-between items-center text-sm py-1">
                  <span className="text-text-secondary">Bonus {i + 1} — {bonus.title}</span>
                  <span className="text-success shrink-0 ml-4">ฟรี
                    <span className="text-text-muted line-through ml-1 text-xs">฿{bonus.value.toLocaleString()}</span>
                  </span>
                </div>
              ))}

              <div className="border-t-2 border-border-strong my-2" />

              {/* Totals */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-text-secondary">มูลค่ารวม</span>
                <span className="text-text-muted line-through">฿{TOTAL_VALUE.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-text-secondary">ราคาขาย</span>
                <span className="text-text-muted line-through">฿{ORIGINAL_VALUE.toLocaleString()}</span>
              </div>

              <div className="flex flex-col items-end mt-1">
                <p className="text-text-muted text-sm">ราคาพิเศษวันนี้</p>
                <p className="text-5xl md:text-6xl font-black text-brand-primary leading-none">
                  ฿{BUNDLE_PRICE.toLocaleString()}
                </p>
                <span className="mt-1 bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm font-semibold">
                  ประหยัด ฿{(TOTAL_VALUE - BUNDLE_PRICE).toLocaleString()}
                </span>
              </div>

              {/* CTA */}
              <ButtonLink
                as="a"
                href={STRIPE_CHECKOUT_URL}
                size="lg"
                variant="primary"
                fullWidth
                className="mt-4"
                onClick={() => event({ action: 'click_cta', category: 'conversion', label: 'pricing-card', value: BUNDLE_PRICE })}
              >
                สั่งซื้อ Bundle เลย — ฿{BUNDLE_PRICE.toLocaleString()}
              </ButtonLink>

              {/* Trust points */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-1.5 text-xs text-text-secondary">
                    <CheckCircle2 size={13} className="text-success shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}

export default PricingCard
