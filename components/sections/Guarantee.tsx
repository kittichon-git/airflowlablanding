import { ShieldCheck } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export function Guarantee() {
  return (
    <Section
      id="guarantee"
      eyebrow=""
      align="center"
      className="bg-bg-card/30"
    >
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <Badge variant="success">การันตี</Badge>

        <ScrollReveal>
          {/* Big circle badge */}
          <div className="w-32 h-32 bg-brand-accent text-text-primary rounded-full grid place-items-center font-black text-3xl mx-auto leading-tight">
            7<br />Days
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl font-bold leading-tight text-text-primary md:text-4xl">
            ลองใช้ 7 วัน — ถ้าไม่ช่วยประหยัดเวลา คืนเงินเต็มจำนวน
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-text-secondary leading-relaxed">
            ไม่ถามเหตุผล · ไม่มีฟอร์ม · ไม่มี condition
            แค่ส่ง email มาภายใน 7 วันหลังซื้อ เราคืนเงินให้ทันที
            เพราะเราเชื่อมั่นใน skills ของเรา 100%
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-3xl font-black text-brand-primary">
            ความเสี่ยงของคุณ = 0
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <ShieldCheck size={64} className="text-brand-primary" />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-text-muted text-sm">— ทีม AI Flow</p>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export default Guarantee
