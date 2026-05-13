import { Download, FolderOpen, Zap } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { STEPS } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Download: <Download size={48} className="text-brand-primary" />,
  FolderOpen: <FolderOpen size={48} className="text-brand-primary" />,
  Zap: <Zap size={48} className="text-brand-primary" />,
}

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="เริ่มต้นใช้งาน"
      title="3 ขั้นตอน · ใช้เวลาแค่ 2 นาที"
      align="center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {STEPS.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.12}>
            <div className="flex flex-col items-center text-center gap-4 p-6">
              <p className="text-6xl font-black text-brand-primary/50 leading-none">
                {step.number}
              </p>
              <div className="w-12 h-12 grid place-items-center">
                {iconMap[step.icon] ?? <Zap size={48} className="text-brand-primary" />}
              </div>
              <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

export default HowItWorks
