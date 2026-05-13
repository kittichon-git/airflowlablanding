'use client'

import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { BUNDLE_PRICE } from '@/lib/data'

export function MobileStickyBar() {
  const [hidden, setHidden] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide the bar when #pricing sentinel is visible
        setHidden(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Sentinel placed at the top of #pricing section — rendered wherever MobileStickyBar is mounted */}
      <div
        ref={sentinelRef}
        id="pricing-sentinel"
        className="absolute top-0 left-0 w-px h-px pointer-events-none"
        aria-hidden="true"
      />

      <div
        className={[
          'fixed bottom-0 inset-x-0 z-40 md:hidden',
          'bg-bg-base/95 backdrop-blur-md border-t border-border-subtle',
          'px-4 py-3 flex items-center justify-between gap-3',
          'transition-transform duration-300',
          hidden ? 'translate-y-full' : 'translate-y-0',
        ].join(' ')}
      >
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] text-text-muted line-through">฿23,993</span>
          <span className="text-lg font-bold text-brand-primary">฿{BUNDLE_PRICE.toLocaleString()}</span>
        </div>

        <ButtonLink
          as="a"
          href="#pricing"
          size="md"
          variant="primary"
          className="flex-1 max-w-[220px]"
        >
          รับคอร์สนี้เลย
        </ButtonLink>
      </div>
    </>
  )
}

export default MobileStickyBar
