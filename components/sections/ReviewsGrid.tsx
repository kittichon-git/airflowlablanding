import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { StarRating } from '@/components/ui/StarRating'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { REVIEWS } from '@/lib/data'

export function ReviewsGrid() {
  return (
    <Section
      id="reviews"
      eyebrow="รีวิว"
      title="อ่านรีวิวจากผู้ใช้งาน 1,000+ คน"
      align="center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {REVIEWS.map((review, i) => (
          <ScrollReveal key={review.id} delay={(i % 4) * 0.07}>
            <Card variant="review">
              <StarRating count={5} size="sm" />
              <p className="text-text-secondary text-sm italic leading-relaxed line-clamp-3">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-auto pt-1">
                <div
                  className={`w-9 h-9 rounded-full grid place-items-center text-xs font-bold text-bg-base shrink-0 ${review.color}`}
                >
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-text-primary text-xs font-semibold truncate">{review.name}</p>
                  <p className="text-text-muted text-[11px] truncate">{review.role}</p>
                  <p className="text-text-muted text-[11px]">{review.date}</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

export default ReviewsGrid
