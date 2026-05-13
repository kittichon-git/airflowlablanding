const STORAGE_KEY = 'aiflow_deadline'

export function getOrCreateDeadline(hours = 48): number {
  if (typeof window === 'undefined') return Date.now() + hours * 3600 * 1000

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const deadline = parseInt(stored, 10)
    if (deadline > Date.now()) return deadline
  }

  // create new deadline
  const deadline = Date.now() + hours * 3600 * 1000
  localStorage.setItem(STORAGE_KEY, String(deadline))
  return deadline
}

export function msToHMS(ms: number): { hours: number; minutes: number; seconds: number } {
  const total = Math.max(0, Math.floor(ms / 1000))
  return {
    hours: Math.floor(total / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  }
}

export function pad2(n: number): string {
  return String(n).padStart(2, '0')
}
