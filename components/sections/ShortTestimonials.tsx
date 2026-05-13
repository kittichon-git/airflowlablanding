import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SHORT_TESTIMONIALS } from '@/lib/data'

export function ShortTestimonials() {
  return (
    <Section
      id="testimonial-marquee"
      eyebrow="เสียงจากผู้ใช้งาน"
      title="ฟังจากผู้ใช้งานจริง"
      align="center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {SHORT_TESTIMONIALS.map((t, i) => (
          <ScrollReveal key={t.id} delay={i * 0.1}>
            <Card variant="review" className="items-start">
              <div className="flex items-center gap-3">
                <div
                  className={`w-14 h-14 rounded-full grid place-items-center font-bold text-bg-base text-sm shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">{t.name}</p>
                  <p className="text-text-muted text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed text-sm italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <Badge variant="accent" size="sm">
                {t.metric}
              </Badge>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

export default ShortTestimonials
