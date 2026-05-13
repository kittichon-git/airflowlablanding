import { CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { Countdown } from '@/components/shared/Countdown'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { BUNDLE_PRICE, STRIPE_CHECKOUT_URL } from '@/lib/data'

const RECAP = [
  'Skills 500+ ตัว พร้อมใช้งานทันที ไม่ต้องพิมพ์ prompt เองอีกต่อไป',
  'ครอบคลุม 16 หมวดงาน ตั้งแต่ content, sales ไปถึง data & automation',
  'จ่ายครั้งเดียว ใช้ได้ตลอดชีพ พร้อม lifetime update ฟรี',
]

export function FinalCTA() {
  return (
    <Section
      id="final-cta"
      eyebrow=""
      align="center"
      className="bg-gradient-to-b from-bg-base to-bg-card/30"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl">
            พร้อมให้ Claude ทำงานเหมือนทีม 16 แผนกของคุณแล้วใช่ไหม?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ul className="flex flex-col gap-4 text-left w-full">
            {RECAP.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-text-secondary text-lg">
                <CheckCircle2 size={22} className="text-brand-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <ButtonLink
            as="a"
            href={STRIPE_CHECKOUT_URL}
            size="lg"
            variant="primary"
          >
            สั่งซื้อ Bundle ตอนนี้ — ฿{BUNDLE_PRICE.toLocaleString()}
          </ButtonLink>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-text-secondary">
            <span>ราคา ฿{BUNDLE_PRICE.toLocaleString()} เหลือเวลา</span>
            <Countdown hours={48} />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export default FinalCTA
