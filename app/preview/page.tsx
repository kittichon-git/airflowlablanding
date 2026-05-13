import { Badge } from '@/components/ui/Badge'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { StarRating } from '@/components/ui/StarRating'
import { Countdown } from '@/components/shared/Countdown'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Zap, Shield, Star } from 'lucide-react'

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary p-8 space-y-16">
      <h1 className="text-4xl font-bold text-brand-primary">Component Preview</h1>

      {/* ── Badge ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-secondary">Badge</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="brand">Brand</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge variant="brand" size="sm">Small Brand</Badge>
          <Badge variant="accent" size="sm" icon={<Zap size={10} />}>With Icon</Badge>
        </div>
      </section>

      {/* ── Button ────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-secondary">Button</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button leftIcon={<Zap size={16} />}>With Icon</Button>
          <Button rightIcon={<Shield size={16} />} variant="secondary">Right Icon</Button>
        </div>
        <div>
          <Button fullWidth>Full Width</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink as="a" href="#" variant="primary">Anchor Primary</ButtonLink>
          <ButtonLink as="a" href="#" variant="secondary">Anchor Secondary</ButtonLink>
        </div>
      </section>

      {/* ── StarRating ────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-secondary">StarRating</h2>
        <div className="flex flex-col gap-2">
          <StarRating count={5} size="lg" />
          <StarRating count={4} size="md" />
          <StarRating count={3} size="sm" />
          <StarRating count={1} />
        </div>
      </section>

      {/* ── Card ──────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-secondary">Card</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card variant="default">
            <p className="text-text-primary font-semibold">Default Card</p>
            <p className="text-text-secondary text-sm mt-1">bg-bg-card with subtle border</p>
          </Card>
          <Card variant="feature">
            <Star className="mx-auto mb-2 text-brand-accent" size={24} />
            <p className="text-text-primary font-semibold">Feature Card</p>
            <p className="text-text-secondary text-sm mt-1">Centered text layout</p>
          </Card>
          <Card variant="module">
            <p className="text-text-primary font-semibold">Module Card</p>
            <p className="text-text-secondary text-sm mt-1">Extra top padding</p>
          </Card>
          <Card variant="bonus">
            <p className="text-text-primary font-semibold">Bonus Card</p>
            <p className="text-text-secondary text-sm mt-1">Elevated background</p>
          </Card>
          <Card variant="review">
            <StarRating count={5} size="sm" />
            <p className="text-text-primary text-sm">"Review Card variant"</p>
            <p className="text-text-muted text-xs">— Reviewer Name</p>
          </Card>
          <Card variant="default" hover>
            <p className="text-text-primary font-semibold">Hover Card</p>
            <p className="text-text-secondary text-sm mt-1">Hover to see effect</p>
          </Card>
        </div>
      </section>

      {/* ── Section ───────────────────────────────────────── */}
      <Section
        id="preview-section"
        eyebrow="Example"
        title="Section Component"
        subtitle="This is a Section with eyebrow, title, and subtitle. It has a max-width container and vertical padding."
        align="center"
      >
        <div className="bg-bg-card border border-border-subtle rounded-[12px] p-8 text-center text-text-secondary">
          Section children go here
        </div>
      </Section>

      <Section
        id="preview-section-left"
        eyebrow="Left Aligned"
        title="Left-Aligned Section"
        subtitle="This version uses align=left, useful for content-heavy sections."
        align="left"
      >
        <div className="bg-bg-card border border-border-subtle rounded-[12px] p-8 text-text-secondary">
          Left-aligned children
        </div>
      </Section>

      {/* ── Countdown ─────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-secondary">Countdown</h2>
        <div className="flex items-center gap-4 bg-bg-card border border-border-subtle rounded-[12px] p-6 inline-flex">
          <span className="text-text-secondary text-sm">ราคาพิเศษหมดใน:</span>
          <Countdown hours={48} />
        </div>
      </section>

      {/* ── ScrollReveal ──────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-secondary">ScrollReveal</h2>
        <div className="space-y-4">
          {Array.from({ length: 4 }, (_, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card variant="default">
                <p className="text-text-primary font-semibold">Scroll Reveal Item {i + 1}</p>
                <p className="text-text-secondary text-sm mt-1">Fades up with delay={i * 0.1}s</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
