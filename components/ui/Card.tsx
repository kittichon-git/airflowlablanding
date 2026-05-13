import { cn } from '@/lib/utils'

export type CardVariant = 'default' | 'feature' | 'persona' | 'module' | 'bonus' | 'review'

export interface CardProps {
  variant?: CardVariant
  as?: React.ElementType
  hover?: boolean
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<CardVariant, string> = {
  default:  'bg-bg-card border border-border-subtle rounded-[12px] p-6 sm:p-8',
  feature:  'bg-bg-card border border-border-subtle rounded-[12px] p-6 sm:p-8 text-center',
  persona:  'bg-bg-card border border-border-subtle rounded-[12px] p-6',
  module:   'bg-bg-card border border-border-subtle rounded-[12px] p-6 sm:p-8 pt-8 sm:pt-10',
  bonus:    'bg-bg-elevated border border-border-strong rounded-[12px] p-6',
  review:   'bg-bg-card border border-border-subtle rounded-[12px] p-6 flex flex-col gap-3',
}

export function Card({
  variant = 'default',
  as: Tag = 'div',
  hover = false,
  className,
  children,
}: CardProps) {
  return (
    <Tag
      className={cn(
        variantClasses[variant],
        hover && 'hover:bg-bg-card-hover hover:border-border-strong transition-colors duration-200 cursor-pointer',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export default Card
