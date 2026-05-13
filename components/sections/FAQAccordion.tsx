import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { FAQS } from '@/lib/data'

export function FAQAccordion() {
  return (
    <Section
      id="faq"
      eyebrow="คำถามที่พบบ่อย"
      title="คำถามที่พบบ่อย"
      align="center"
    >
      <div className="max-w-3xl mx-auto">
        {FAQS.map((faq) => (
          <details
            key={faq.id}
            className="group border-b border-border-subtle py-4"
          >
            <summary className="flex justify-between items-center cursor-pointer py-2 list-none [&::-webkit-details-marker]:hidden">
              <span className="font-semibold text-text-primary pr-4 leading-snug">
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                className="shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="text-text-secondary pt-4 leading-relaxed pb-2">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  )
}

export default FAQAccordion
