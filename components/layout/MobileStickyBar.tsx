'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'
import { event } from '@/lib/analytics'
import { BUNDLE_PRICE, STRIPE_CHECKOUT_URL, ORIGINAL_VALUE } from '@/lib/data'

export function MobileStickyBar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const pricing = document.getElementById('pricing')
    if (!pricing) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide when #pricing section is intersecting; show again when it leaves
        setHidden(entry.isIntersecting)
      },
      { threshold: 0.05 },
    )

    observer.observe(pricing)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-bg-base/95 backdrop-blur-md border-t border-border-subtle px-4 py-3 flex items-center justify-between gap-3"
      animate={{ y: hidden ? '100%' : 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      initial={false}
    >
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] text-text-muted line-through">
          ฿{ORIGINAL_VALUE.toLocaleString()}
        </span>
        <span className="text-lg font-bold text-brand-primary">
          ฿{BUNDLE_PRICE.toLocaleString()}
        </span>
      </div>

      <ButtonLink
        as="a"
        href={STRIPE_CHECKOUT_URL}
        size="md"
        variant="primary"
        className="flex-1 max-w-[220px]"
        onClick={() => event({ action: 'click_cta', category: 'conversion', label: 'mobile-sticky', value: BUNDLE_PRICE })}
      >
        รับคอร์สนี้เลย
      </ButtonLink>
    </motion.div>
  )
}

export default MobileStickyBar
