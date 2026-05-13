import { X } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PROBLEMS } from '@/lib/data'

export function ProblemList() {
  return (
    <Section
      id="problem"
      eyebrow="ปัญหา"
      title="ทำไมเจ้าของธุรกิจยุคนี้ ทำงานหนักขึ้น — แต่ผลลัพธ์เท่าเดิม?"
      align="center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROBLEMS.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 0.08}>
            <Card variant="default" className="flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-full bg-danger/10 grid place-items-center">
                <X size={22} className="text-danger" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-10 bg-danger/10 border border-danger/30 p-6 rounded-[12px] text-center">
          <p className="text-text-primary font-semibold text-lg leading-relaxed">
            ทุกวันที่ยังพิมพ์ prompt เอง ={' '}
            <span className="text-danger">เสียเวลา 3-5 ชม./วัน</span> ={' '}
            <span className="text-danger font-bold">฿15,000–25,000/เดือน</span>
          </p>
        </div>
      </ScrollReveal>
    </Section>
  )
}

export default ProblemList
