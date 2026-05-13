'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  as?: React.ElementType
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
