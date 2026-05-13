'use client'

import { useEffect, useState } from 'react'
import { getOrCreateDeadline, msToHMS, pad2 } from '@/lib/countdown'

function useCountdown(hours = 48) {
  const [timeLeft, setTimeLeft] = useState<{ h: number; m: number; s: number } | null>(null)

  useEffect(() => {
    const deadline = getOrCreateDeadline(hours)

    function tick() {
      const diff = deadline - Date.now()
      if (diff <= 0) {
        setTimeLeft({ h: 0, m: 0, s: 0 })
        return
      }
      const { hours: h, minutes: m, seconds: s } = msToHMS(diff)
      setTimeLeft({ h, m, s })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [hours])

  return timeLeft
}

export interface CountdownProps {
  hours?: number
  className?: string
}

export function Countdown({ hours = 48, className }: CountdownProps) {
  const time = useCountdown(hours)

  // SSR-safe: render placeholder before hydration
  if (time === null) {
    return (
      <span className={className} aria-live="polite">
        <CountdownDisplay h={0} m={0} s={0} />
      </span>
    )
  }

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      <CountdownDisplay h={time.h} m={time.m} s={time.s} />
    </span>
  )
}

function CountdownDisplay({ h, m, s }: { h: number; m: number; s: number }) {
  return (
    <>
      <TimeUnit value={pad2(h)} label="ชั่วโมง" />
      <Separator />
      <TimeUnit value={pad2(m)} label="นาที" />
      <Separator />
      <TimeUnit value={pad2(s)} label="วินาที" />
    </>
  )
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className="text-2xl font-bold tabular-nums text-brand-accent">{value}</span>
      <span className="text-[10px] text-text-muted uppercase tracking-wide mt-0.5">{label}</span>
    </span>
  )
}

function Separator() {
  return (
    <span className="mx-1 text-xl font-bold text-text-muted self-start mt-1" aria-hidden="true">
      :
    </span>
  )
}

export default Countdown
