'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-bg-base font-semibold hover:bg-brand-primary-dark active:scale-95',
  secondary:
    'border border-border-strong bg-bg-card text-text-primary hover:bg-bg-card-hover active:scale-95',
  ghost:
    'bg-transparent text-text-secondary hover:bg-bg-card active:scale-95',
  link:
    'bg-transparent text-brand-primary underline-offset-4 hover:underline p-0 h-auto',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm rounded-[8px]',
  md: 'h-11 px-5 text-base rounded-[8px]',
  lg: 'h-14 px-7 text-lg font-bold rounded-[8px]',
}

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  className?: string
  children?: React.ReactNode
}

type AsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
    href?: never
  }

type AsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a'
    href: string
  }

export type ButtonProps = AsButton | AsAnchor

const Button = forwardRef<HTMLButtonElement, AsButton>(function Button(
  {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    leftIcon,
    rightIcon,
    loading = false,
    className,
    children,
    disabled,
    ...rest
  },
  ref,
) {
  const base =
    'inline-flex items-center justify-center gap-2 transition-all duration-150 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ' +
    'focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base ' +
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(base, variantClasses[variant], sizeClasses[size], fullWidth && 'w-full', className)}
      {...rest}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </button>
  )
})

Button.displayName = 'Button'

// Anchor variant — separate component for type safety
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading = false,
  className,
  children,
  href,
  ...rest
}: AsAnchor) {
  const base =
    'inline-flex items-center justify-center gap-2 transition-all duration-150 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ' +
    'focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base'

  return (
    <a
      href={href}
      className={cn(base, variantClasses[variant], sizeClasses[size], fullWidth && 'w-full', className)}
      {...rest}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </a>
  )
}

export { Button }
export default Button
