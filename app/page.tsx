import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/sections/LogoMarquee'
import { ProblemList } from '@/components/sections/ProblemList'
import { SolutionFeatures } from '@/components/sections/SolutionFeatures'
import { StatsRow } from '@/components/sections/StatsRow'
import { PersonaCards } from '@/components/sections/PersonaCards'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { COMPATIBLE_TOOLS } from '@/lib/data'

export default function Home() {
  return (
    <>
      {/* S01 Hero */}
      <Hero />

      {/* S02 Social proof / logo bar */}
      <LogoMarquee
        id="logos-1"
        logos={COMPATIBLE_TOOLS}
        label="ใช้งานร่วมกับเครื่องมือที่คุณใช้อยู่แล้ว"
      />

      {/* S03 Problem agitation */}
      <ProblemList />

      {/* S04 Solution intro */}
      <SolutionFeatures />

      {/* S05 Stats strip */}
      <StatsRow />

      {/* S06 Who is this for */}
      <PersonaCards />

      {/* S07 What you'll learn — TODO: SkillCategoriesSection */}
      <section id="skills" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S07 Skills Viewer — P5]
      </section>

      {/* S08 Curriculum / Modules — TODO: ModulesSection */}
      <section id="modules" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S08 Modules Grid — P6]
      </section>

      {/* S09 How it works */}
      <HowItWorks />

      {/* S10 Case Studies — TODO: CaseStudiesSection */}
      <section id="case-studies" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S10 Case Studies — P6]
      </section>

      {/* S11 Instructor / Founder Story — TODO */}
      <section id="instructor" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S11 Founder Story — P6]
      </section>

      {/* S12 Platforms — TODO */}
      <section id="platforms" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S12 Platform Compat — P6]
      </section>

      {/* S13 Reviews / Testimonials — TODO */}
      <section id="reviews" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S13 Reviews Grid — P6]
      </section>

      {/* S14 Short testimonial marquee — TODO */}
      <section id="testimonial-marquee" className="py-12 border-b border-border-subtle text-center text-text-muted text-sm">
        [S14 Short Testimonials — P6]
      </section>

      {/* S15 Comparison table — TODO */}
      <section id="comparison" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S15 Comparison — P5]
      </section>

      {/* S16 Bonuses — TODO */}
      <section id="bonuses" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S16 Bonuses — P6]
      </section>

      {/* S17 Pricing — TODO */}
      <section id="pricing" className="py-20 border-b border-border-subtle text-center text-text-secondary relative">
        [S17 Pricing Card — P7]
      </section>

      {/* S18 Urgency / Skill vs Prompt — TODO */}
      <section id="urgency" className="py-12 border-b border-border-subtle text-center text-text-muted text-sm">
        [S18 Skill vs Prompt — P6]
      </section>

      {/* S19 Guarantee — TODO */}
      <section id="guarantee" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S19 Guarantee — P6]
      </section>

      {/* S20 FAQ — TODO */}
      <section id="faq" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S20 FAQ Accordion — P5]
      </section>

      {/* S21 Final CTA — TODO */}
      <section id="final-cta" className="py-20 border-b border-border-subtle text-center text-text-secondary">
        [S21 Final CTA — P7]
      </section>

      {/* S22 Second logo bar */}
      <LogoMarquee
        id="logos-2"
        logos={COMPATIBLE_TOOLS}
        label="เชื่อมต่อ apps 400+ ผ่าน n8n โดยไม่เขียน code"
      />

      {/* S23 Platform badges — TODO */}
      <section id="platform-badges" className="py-12 border-b border-border-subtle text-center text-text-muted text-sm">
        [S23 Platform Badges — incorporated in P6]
      </section>

      {/* S24 Community — incorporated in bonuses */}

      {/* S25 Sticky countdown — in Header component */}
    </>
  )
}
