import { cn } from '@/lib/utils'

export type BadgeVariant = 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: React.ReactNode
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  brand:   'bg-brand-primary/15 text-brand-primary border border-brand-primary/30',
  accent:  'bg-brand-accent/15 text-brand-accent border border-brand-accent/30',
  success: 'bg-success/15 text-success border border-success/30',
  warning: 'bg-warning/15 text-warning border border-warning/30',
  danger:  'bg-danger/15 text-danger border border-danger/30',
  neutral: 'bg-bg-elevated text-text-muted border border-border-subtle',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[11px]',
  md: 'px-3 py-1 text-xs',
}

export function Badge({ variant = 'brand', size = 'md', icon, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-semibold uppercase tracking-wide',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  )
}

export default Badge
