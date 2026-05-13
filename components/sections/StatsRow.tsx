'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Users, Zap, Grid3x3, Timer } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { STATS } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={24} className="text-brand-primary" />,
  Zap: <Zap size={24} className="text-brand-primary" />,
  Grid: <Grid3x3 size={24} className="text-brand-primary" />,
  Timer: <Timer size={24} className="text-brand-primary" />,
}

function parseNumeric(value: string): number {
  return parseInt(value.replace(/,/g, ''), 10) || 0
}

function formatNumeric(n: number, original: string): string {
  // replicate comma formatting based on original
  if (original.includes(',')) {
    return n.toLocaleString()
  }
  return String(n)
}

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const startTime = performance.now()
    let raf: number

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return count
}

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const target = parseNumeric(stat.value)
  const count = useCountUp(target, 2000, isInView)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 py-8 px-4 text-center"
    >
      <div className="mb-1">{iconMap[stat.icon]}</div>
      <p className="text-5xl md:text-6xl font-black text-brand-primary tabular-nums leading-none">
        {formatNumeric(count, stat.value)}
        <span className="text-3xl">{stat.unit}</span>
      </p>
      <p className="text-text-secondary text-sm">{stat.label}</p>
    </div>
  )
}

export function StatsRow() {
  return (
    <Section
      id="stats"
      eyebrow="ทำไมต้อง AI Flow"
      title="ตัวเลขที่บอกทุกอย่าง"
      align="center"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-bg-card border border-border-subtle rounded-[16px] divide-x divide-border-subtle">
        {STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </Section>
  )
}

export default StatsRow
