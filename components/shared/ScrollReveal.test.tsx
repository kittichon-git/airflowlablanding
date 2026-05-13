import { describe, it, expect, vi, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScrollReveal } from './ScrollReveal'

// Mock framer-motion — simulate useReducedMotion returning true
vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>()
  return {
    ...actual,
    useReducedMotion: vi.fn().mockReturnValue(true),
    useInView: vi.fn().mockReturnValue(false),
  }
})

// IntersectionObserver stub needed in jsdom
beforeAll(() => {
  if (typeof window.IntersectionObserver === 'undefined') {
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      value: class {
        observe() {}
        unobserve() {}
        disconnect() {}
      },
    })
  }
})

describe('ScrollReveal', () => {
  it('renders children directly when prefers-reduced-motion is true', () => {
    render(
      <ScrollReveal>
        <span data-testid="child">Content</span>
      </ScrollReveal>,
    )
    expect(screen.getByTestId('child')).toBeTruthy()
  })

  it('renders without motion wrapper when reduced motion', () => {
    const { container } = render(
      <ScrollReveal>
        <p>Hello</p>
      </ScrollReveal>,
    )
    // Should render a plain div, not a motion.div (no style attribute injected)
    const div = container.firstChild as HTMLElement
    expect(div.tagName).toBe('DIV')
    expect(div.textContent).toBe('Hello')
  })

  it('accepts className prop', () => {
    const { container } = render(
      <ScrollReveal className="test-class">
        <span>Text</span>
      </ScrollReveal>,
    )
    expect((container.firstChild as HTMLElement).className).toContain('test-class')
  })
})
