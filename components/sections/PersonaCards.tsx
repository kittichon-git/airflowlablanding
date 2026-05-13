import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PERSONAS } from '@/lib/data'

export function PersonaCards() {
  return (
    <Section
      id="for-who"
      eyebrow="เหมาะกับใคร"
      align="center"
      title=""
    >
      <div className="-mt-8 mb-12 text-center">
        <h2 className="text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl">
          ออกแบบมาสำหรับ{' '}
          <em className="text-brand-primary not-italic">คนทำงานจริง</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PERSONAS.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 0.08}>
            <Card variant="persona" className="relative overflow-hidden flex flex-col gap-3">
              <p className="absolute top-4 left-4 text-5xl font-black text-text-muted/20 select-none leading-none">
                {String(i + 1).padStart(2, '0')}
              </p>
              <div className="pt-10">
                <span className="text-3xl">{p.emoji}</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary">{p.title}</h3>
              <p className="text-sm text-text-muted">{p.subtitle}</p>
              <div className="mt-1 space-y-2 text-sm">
                <p className="text-danger">
                  <span className="font-semibold">ปัญหา:</span> {p.painPoint}
                </p>
                <p className="text-success">
                  <span className="font-semibold">ผลลัพธ์:</span> {p.gain}
                </p>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

export default PersonaCards
