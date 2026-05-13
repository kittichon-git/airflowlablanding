import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { FOUNDER_STORY } from '@/lib/data'

export function FounderStory() {
  return (
    <Section
      id="instructor"
      eyebrow="เรื่องราวของเรา"
      title="ทำไมเราถึงสร้าง Bundle นี้"
      align="left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image placeholder */}
        <ScrollReveal>
          <div className="bg-gradient-to-br from-brand-primary/15 to-bg-elevated aspect-[4/5] rounded-[24px] border border-brand-primary/20 grid place-items-center max-w-sm">
            <div className="text-center p-8">
              <p className="text-6xl mb-4">🧠</p>
              <p className="text-brand-primary font-bold text-lg">ทีม AI Flow</p>
              <p className="text-text-muted text-sm mt-1">500+ ชั่วโมงทดสอบ Skills</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Text */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-5">
            {FOUNDER_STORY.paragraphs.map((para, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {para}
              </p>
            ))}
            <p className="text-text-primary font-semibold mt-2">— ทีม AI Flow</p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export default FounderStory
