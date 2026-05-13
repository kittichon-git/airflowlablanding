import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { CASE_STUDIES } from '@/lib/data'

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="ผลลัพธ์"
      title="ผลลัพธ์จริงจากผู้ใช้งานภายใน 90 วันแรก"
      align="center"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {CASE_STUDIES.map((cs, i) => (
          <ScrollReveal key={cs.id} delay={i * 0.12}>
            <div className="bg-bg-card border border-border-subtle rounded-[16px] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 items-start">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-brand-primary/20 grid place-items-center text-brand-primary font-black text-2xl border border-brand-primary/30">
                {cs.persona.charAt(0)}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold text-text-primary">{cs.persona}</p>
                  <p className="text-text-muted text-sm">{cs.business}</p>
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-danger/10 border border-danger/20 rounded-[8px] p-3">
                    <p className="text-xs font-semibold text-danger uppercase tracking-wide mb-1">Before</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{cs.before}</p>
                  </div>
                  <div className="bg-success/10 border border-success/20 rounded-[8px] p-3">
                    <p className="text-xs font-semibold text-success uppercase tracking-wide mb-1">After</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{cs.after}</p>
                  </div>
                </div>

                {/* Big metric */}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-brand-primary">{cs.metric}</span>
                  <span className="text-text-secondary text-sm">{cs.metricLabel}</span>
                </div>

                <blockquote className="italic text-text-secondary text-sm border-l-2 border-brand-primary/40 pl-3">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <p className="mt-6 text-center text-xs italic text-text-muted">
        ผลลัพธ์ขึ้นกับการนำไปใช้และบริบทธุรกิจของแต่ละคน · ตัวอย่างนี้คือ case study จริง
      </p>
    </Section>
  )
}

export default CaseStudies
