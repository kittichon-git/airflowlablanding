import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/sections/LogoMarquee'
import { ProblemList } from '@/components/sections/ProblemList'
import { SolutionFeatures } from '@/components/sections/SolutionFeatures'
import { StatsRow } from '@/components/sections/StatsRow'
import { PersonaCards } from '@/components/sections/PersonaCards'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { SkillsViewer } from '@/components/sections/SkillsViewer'
import { ModulesGrid } from '@/components/sections/ModulesGrid'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { FounderStory } from '@/components/sections/FounderStory'
import { PlatformCompat } from '@/components/sections/PlatformCompat'
import { ReviewsGrid } from '@/components/sections/ReviewsGrid'
import { ShortTestimonials } from '@/components/sections/ShortTestimonials'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { BonusList } from '@/components/sections/BonusList'
import { SkillVsPrompt } from '@/components/sections/SkillVsPrompt'
import { Guarantee } from '@/components/sections/Guarantee'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { PricingCard } from '@/components/sections/PricingCard'
import { FinalCTA } from '@/components/sections/FinalCTA'
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

      {/* S07 Skills Viewer */}
      <SkillsViewer />

      {/* S08 Curriculum / Modules */}
      <ModulesGrid />

      {/* S09 How it works */}
      <HowItWorks />

      {/* S10 Case Studies */}
      <CaseStudies />

      {/* S11 Founder Story */}
      <FounderStory />

      {/* S12 Platforms */}
      <PlatformCompat />

      {/* S13 Reviews */}
      <ReviewsGrid />

      {/* S14 Short Testimonials */}
      <ShortTestimonials />

      {/* S15 Comparison table */}
      <ComparisonTable />

      {/* S16 Bonuses */}
      <BonusList />

      {/* S17 Pricing */}
      <PricingCard />

      {/* S18 Skill vs Prompt */}
      <SkillVsPrompt />

      {/* S19 Guarantee */}
      <Guarantee />

      {/* S20 FAQ */}
      <FAQAccordion />

      {/* S21 Final CTA */}
      <FinalCTA />

      {/* S22 Second logo bar */}
      <LogoMarquee
        id="logos-2"
        logos={COMPATIBLE_TOOLS}
        label="เชื่อมต่อ apps 400+ ผ่าน n8n โดยไม่เขียน code"
      />
    </>
  )
}
