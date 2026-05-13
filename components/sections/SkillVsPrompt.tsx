import { Zap, Layout, FileCode } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SKILL_VS_PROMPT } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={28} className="text-brand-primary" />,
  Layout: <Layout size={28} className="text-brand-primary" />,
  FileCode: <FileCode size={28} className="text-brand-primary" />,
}

export function SkillVsPrompt() {
  return (
    <Section
      id="urgency"
      eyebrow="ความแตกต่าง"
      title="Skill ≠ Prompt"
      align="center"
    >
      {/* Large quote */}
      <ScrollReveal>
        <blockquote className="italic border-l-4 border-brand-accent bg-bg-elevated p-8 rounded-[12px] text-xl text-text-primary font-semibold mb-8 max-w-2xl mx-auto">
          &ldquo;Prompt คือคำสั่ง · Skill คือระบบ&rdquo;
        </blockquote>
      </ScrollReveal>

      {/* 3 sub-cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {SKILL_VS_PROMPT.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.1}>
            <Card variant="feature">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-full grid place-items-center mx-auto mb-4">
                {iconMap[card.icon] ?? <Zap size={28} className="text-brand-primary" />}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{card.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{card.description}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      {/* Code example callout */}
      <ScrollReveal delay={0.3}>
        <div className="bg-bg-elevated rounded-[12px] p-6 font-mono text-sm border border-border-subtle mb-8 text-left max-w-3xl mx-auto">
          <p className="text-text-muted text-xs mb-2">ตัวอย่าง Skill</p>
          <p className="text-text-secondary">
            Skill{' '}
            <span className="text-brand-accent">`sales-funnel-builder`</span>{' '}
            ใช้ AIDA + Hormozi Value Equation + Foundr wireframe
          </p>
          <p className="text-text-muted mt-2 text-xs">
            → สร้าง sales page เต็มรูปแบบพร้อม hook, offer stack, guarantee ใน 1 command
          </p>
        </div>
      </ScrollReveal>

      {/* Closing line */}
      <ScrollReveal delay={0.4}>
        <p className="text-center text-lg font-bold text-text-primary">
          นี่คือเหตุผลที่ผลลัพธ์ของ Bundle นี้{' '}
          <strong className="text-brand-primary">พร้อม ship</strong>{' '}
          — ไม่ใช่{' '}
          <strong className="text-danger">draft แรก</strong>
        </p>
      </ScrollReveal>
    </Section>
  )
}

export default SkillVsPrompt
