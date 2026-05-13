import { FileText, MessageSquare, Users, RefreshCw } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { BONUSES, BONUS_VALUE } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  FileText:     <FileText size={28} className="text-brand-primary" />,
  MessageSquare:<MessageSquare size={28} className="text-brand-primary" />,
  Users:        <Users size={28} className="text-brand-primary" />,
  RefreshCw:    <RefreshCw size={28} className="text-brand-primary" />,
}

export function BonusList() {
  return (
    <Section
      id="bonuses"
      eyebrow="โบนัสพิเศษ"
      title={`Bonus เฉพาะวันนี้ มูลค่ารวม ฿${BONUS_VALUE.toLocaleString()} — ฟรี`}
      align="center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BONUSES.map((bonus, i) => (
          <ScrollReveal key={bonus.id} delay={i * 0.08}>
            <Card variant="bonus" className="relative">
              {/* Number badge */}
              <p className="absolute top-4 left-4 text-4xl font-black text-text-muted/20 select-none leading-none">
                {String(i + 1).padStart(2, '0')}
              </p>

              <div className="pt-8 flex flex-col gap-3">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full grid place-items-center">
                  {iconMap[bonus.icon] ?? <FileText size={28} className="text-brand-primary" />}
                </div>
                <h3 className="text-lg font-bold text-text-primary">{bonus.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{bonus.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="line-through text-text-muted text-sm">
                    ฿{bonus.value.toLocaleString()}
                  </span>
                  <span className="bg-success/20 text-success px-3 py-1 rounded-full font-bold text-sm">
                    ฟรี
                  </span>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-8 bg-success/10 border border-success/30 rounded-[12px] p-6 text-center">
          <p className="text-text-primary font-semibold">
            Total Bonus Value{' '}
            <strong className="text-success text-2xl">฿{BONUS_VALUE.toLocaleString()}</strong>
            {' '}— ทั้งหมดฟรี เมื่อสั่งซื้อภายใน countdown
          </p>
        </div>
      </ScrollReveal>
    </Section>
  )
}

export default BonusList
