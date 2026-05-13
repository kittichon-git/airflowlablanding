import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button, ButtonLink } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeTruthy()
  })

  it('default variant is primary', () => {
    render(<Button>Primary</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-brand-primary')
  })

  it('secondary variant applies correct class', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-bg-card')
  })

  it('ghost variant applies correct class', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-transparent')
  })

  it('link variant applies correct class', () => {
    render(<Button variant="link">Link</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('underline-offset-4')
  })

  it('size sm applies h-9', () => {
    render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button').className).toContain('h-9')
  })

  it('size lg applies h-14', () => {
    render(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button').className).toContain('h-14')
  })

  it('fullWidth applies w-full', () => {
    render(<Button fullWidth>Full</Button>)
    expect(screen.getByRole('button').className).toContain('w-full')
  })

  it('calls onClick handler', () => {
    const handler = vi.fn()
    render(<Button onClick={handler}>Clickable</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('disabled button does not call onClick', () => {
    const handler = vi.fn()
    render(<Button disabled onClick={handler}>Disabled</Button>)
    const btn = screen.getByRole('button')
    expect(btn.hasAttribute('disabled')).toBe(true)
    fireEvent.click(btn)
    expect(handler).not.toHaveBeenCalled()
  })

  it('loading state disables button and shows spinner', () => {
    render(<Button loading>Loading</Button>)
    const btn = screen.getByRole('button')
    expect(btn.hasAttribute('disabled')).toBe(true)
    // spinner is a span inside the button
    expect(btn.querySelector('span.animate-spin')).toBeTruthy()
  })

  it('loading hides leftIcon and rightIcon', () => {
    render(
      <Button loading leftIcon={<span data-testid="left">L</span>} rightIcon={<span data-testid="right">R</span>}>
        Loading
      </Button>,
    )
    expect(screen.queryByTestId('left')).toBeNull()
    expect(screen.queryByTestId('right')).toBeNull()
  })

  it('renders leftIcon and rightIcon when not loading', () => {
    render(
      <Button leftIcon={<span data-testid="left">L</span>} rightIcon={<span data-testid="right">R</span>}>
        Normal
      </Button>,
    )
    expect(screen.getByTestId('left')).toBeTruthy()
    expect(screen.getByTestId('right')).toBeTruthy()
  })
})

describe('ButtonLink', () => {
  it('renders as anchor with correct href', () => {
    render(<ButtonLink href="/pricing">Buy Now</ButtonLink>)
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toBe('/pricing')
    expect(screen.getByText('Buy Now')).toBeTruthy()
  })

  it('applies primary variant classes by default', () => {
    render(<ButtonLink href="/">CTA</ButtonLink>)
    expect(screen.getByRole('link').className).toContain('bg-brand-primary')
  })

  it('secondary variant applies to anchor', () => {
    render(<ButtonLink href="/" variant="secondary">Secondary Link</ButtonLink>)
    expect(screen.getByRole('link').className).toContain('bg-bg-card')
  })
})
