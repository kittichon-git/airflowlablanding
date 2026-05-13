import { Globe, Terminal, Bot } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PLATFORMS } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Globe:    <Globe size={40} className="text-brand-primary" />,
  Terminal: <Terminal size={40} className="text-brand-primary" />,
  Bot:      <Bot size={40} className="text-brand-primary" />,
}

export function PlatformCompat() {
  return (
    <Section
      id="platforms"
      eyebrow="3 แพลตฟอร์ม"
      title="ที่เดียว ที่ครอบคลุมทั้ง ecosystem"
      align="center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PLATFORMS.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 0.1}>
            <Card variant="feature" className="relative">
              {p.badge && (
                <div className="absolute top-4 right-4">
                  <Badge variant="accent" size="sm">{p.badge}</Badge>
                </div>
              )}
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full grid place-items-center mx-auto mb-4">
                {iconMap[p.icon] ?? <Globe size={40} className="text-brand-primary" />}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">{p.name}</h3>
              <p className="text-text-muted text-xs mb-3">{p.subtitle}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{p.description}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

export default PlatformCompat
