'use client'

import { useEffect, useRef, useState } from 'react'
import { getOrCreateDeadline, msToHMS, pad2 } from '@/lib/countdown'

const STORAGE_KEY = 'aiflow_deadline'

function useCountdown(hours = 48) {
  const [timeLeft, setTimeLeft] = useState<{ h: number; m: number; s: number } | null>(null)
  const deadlineRef = useRef<number>(0)

  useEffect(() => {
    deadlineRef.current = getOrCreateDeadline(hours)

    function tick() {
      const diff = deadlineRef.current - Date.now()
      if (diff <= 0) {
        setTimeLeft({ h: 0, m: 0, s: 0 })
        return
      }
      const { hours: h, minutes: m, seconds: s } = msToHMS(diff)
      setTimeLeft({ h, m, s })
    }

    // Multi-tab sync: another tab may have reset the deadline
    function onStorage(e: StorageEvent) {
      if (e.key === STORAGE_KEY && e.newValue) {
        const parsed = parseInt(e.newValue, 10)
        if (!isNaN(parsed)) {
          deadlineRef.current = parsed
          tick()
        }
      }
    }

    tick()
    const id = setInterval(tick, 1000)
    window.addEventListener('storage', onStorage)
    return () => {
      clearInterval(id)
      window.removeEventListener('storage', onStorage)
    }
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
    <span className="inline-flex flex-col items-center leading-none bg-bg-card border border-border-subtle px-3 py-2 rounded-md shadow-sm">
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
