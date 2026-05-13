import { cn } from '@/lib/utils'
import { Badge } from './Badge'

export interface SectionProps {
  id: string
  eyebrow?: string
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  children?: React.ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  children,
}: SectionProps) {
  const isCenter = align === 'center'

  return (
    <section id={id} className={cn('py-20 md:py-[120px]', className)}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-16">
        {(eyebrow || title || subtitle) && (
          <div
            className={cn(
              'mb-12 md:mb-16',
              isCenter ? 'flex flex-col items-center text-center' : 'flex flex-col items-start text-left',
              'gap-4',
            )}
          >
            {eyebrow && (
              <Badge variant="brand" size="sm">
                {eyebrow}
              </Badge>
            )}
            {title && (
              <h2 className="text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn('text-lg text-text-secondary leading-relaxed', isCenter && 'max-w-2xl')}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
