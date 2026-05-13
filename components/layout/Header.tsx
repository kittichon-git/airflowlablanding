'use client'

import { useEffect, useState } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { Countdown } from '@/components/shared/Countdown'
import { BUNDLE_PRICE } from '@/lib/data'

export function Header() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 h-12 bg-bg-base/90 backdrop-blur-md border-b border-border-subtle',
        'transition-transform duration-300',
        visible ? 'translate-y-0' : '-translate-y-full',
      ].join(' ')}
    >
      <div className="mx-auto max-w-[1200px] h-full px-4 md:px-8 lg:px-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <span className="text-sm font-bold text-brand-primary shrink-0">aiflowlab</span>

        {/* Countdown */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-text-secondary shrink-0">
          <span>ราคาพิเศษหมดใน</span>
          <Countdown hours={48} />
        </div>

        {/* CTA */}
        <ButtonLink
          as="a"
          href="#pricing"
          size="sm"
          variant="primary"
          className="shrink-0"
        >
          รับคอร์สนี้ ฿{BUNDLE_PRICE.toLocaleString()}
        </ButtonLink>
      </div>
    </header>
  )
}

export default Header
