import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { MODULES, ORIGINAL_VALUE } from '@/lib/data'

export function ModulesGrid() {
  return (
    <Section
      id="modules"
      eyebrow="เนื้อหาทั้งหมด"
      title="ภายใน Bundle: Skills 500+ ตัว ใน 16 หมวดหมู่"
      subtitle="7 modules ครอบคลุมทุกแผนกในธุรกิจของคุณ"
      align="center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MODULES.map((mod, i) => (
          <ScrollReveal key={mod.id} delay={i * 0.06}>
            <Card variant="module" className="relative">
              {/* skillCount badge top-right */}
              <div className="absolute top-4 right-4 bg-brand-primary/15 text-brand-primary px-3 py-1 rounded-full text-sm font-bold">
                {mod.skillCount}+ Skills
              </div>

              <h3 className="text-lg font-bold text-text-primary pr-24 mb-2">
                {mod.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {mod.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-bg-elevated border border-border-subtle text-text-primary px-2 py-1 rounded text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {mod.description}
              </p>

              <p className="text-text-muted text-sm">
                มูลค่า{' '}
                <span className="text-2xl font-bold text-text-primary">
                  ฿{mod.price.toLocaleString()}
                </span>
              </p>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      {/* Total bar */}
      <ScrollReveal delay={0.4}>
        <div className="mt-8 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 border-2 border-brand-primary/20 rounded-[12px] p-6 text-center">
          <p className="text-text-primary leading-relaxed">
            รวม{' '}
            <strong className="text-brand-primary">7 modules</strong> ·{' '}
            <strong className="text-brand-primary">500+ Skills</strong> ·{' '}
            ครอบคลุม{' '}
            <strong className="text-brand-primary">16 หมวดงาน</strong>
            {' '}— มูลค่ารวม{' '}
            <strong className="text-2xl text-brand-primary">
              ฿{ORIGINAL_VALUE.toLocaleString()}
            </strong>
          </p>
        </div>
      </ScrollReveal>
    </Section>
  )
}

export default ModulesGrid
