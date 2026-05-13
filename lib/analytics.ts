/* eslint-disable @typescript-eslint/no-explicit-any */
export const GA_ID =
  typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_GA_ID : undefined

export const FB_PIXEL_ID =
  typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_FB_PIXEL_ID : undefined

export function pageview(url: string) {
  if (typeof window === 'undefined') return
  const w = window as any
  if (w.gtag && GA_ID) {
    w.gtag('config', GA_ID, { page_path: url })
  }
}

export function event({
  action,
  category,
  label,
  value,
}: {
  action: string
  category?: string
  label?: string
  value?: number
}) {
  if (typeof window === 'undefined') return
  const w = window as any
  if (w.gtag) {
    w.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
  if (w.fbq && FB_PIXEL_ID) {
    w.fbq('track', action, { content_name: label, value })
  }
}
