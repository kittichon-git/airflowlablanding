import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const FEATURES = [
  {
    icon: '⚡',
    title: 'Plug & Play',
    body: 'วาง skill ลงในโปรเจกต์ได้เลย ไม่ต้อง setup ซับซ้อน ไม่มีการติดตั้ง plugin หรือเขียน config',
  },
  {
    icon: '🎯',
    title: 'ระบบมืออาชีพ',
    body: 'แต่ละ skill ผ่านการออกแบบโดย framework จริง เช่น AIDA, SPIN Selling และ McKinsey 7S — ไม่ใช่ prompt ธรรมดา',
  },
  {
    icon: '🤖',
    title: 'เลือกอัตโนมัติ',
    body: 'ระบบ Cowork เลือก skill ที่เหมาะกับงานให้อัตโนมัติ คุณแค่บอกว่าอยากทำอะไร ไม่ต้องจำว่าจะใช้ตัวไหน',
  },
]

export function SolutionFeatures() {
  return (
    <Section
      id="solution"
      eyebrow="วิธีใหม่"
      title="นี่คือ 'Agentic Workflow' — ให้ Claude ทำงานเป็นระบบ ไม่ใช่แค่รับคำสั่ง"
      align="center"
    >
      <ScrollReveal>
        <p className="text-lg text-text-secondary leading-relaxed text-center max-w-2xl mx-auto mb-12 -mt-4">
          แทนที่จะพิมพ์ prompt เองทุกวัน Agentic Workflow เปลี่ยน Claude
          ให้เป็นทีมงานที่รู้งาน รู้บริบท และส่งงานได้สม่ำเสมอ — โดยที่คุณแค่กดปุ่มเดียว
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.1}>
            <Card variant="feature">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-full grid place-items-center mx-auto mb-4 text-2xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.body}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

export default SolutionFeatures
