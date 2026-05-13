import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export type StarCount = 1 | 2 | 3 | 4 | 5
export type StarSize = 'sm' | 'md' | 'lg'

export interface StarRatingProps {
  count: StarCount
  size?: StarSize
  className?: string
}

const sizeMap: Record<StarSize, number> = { sm: 12, md: 16, lg: 20 }

export function StarRating({ count, size = 'md', className }: StarRatingProps) {
  const px = sizeMap[size]

  return (
    <span
      className={cn('inline-flex items-center gap-0.5', className)}
      aria-label={`Rated ${count} out of 5`}
      role="img"
    >
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < count
        return (
          <Star
            key={i}
            width={px}
            height={px}
            className={filled ? 'text-brand-accent' : 'text-text-muted'}
            fill={filled ? 'currentColor' : 'none'}
            strokeWidth={1.5}
          />
        )
      })}
    </span>
  )
}

export default StarRating
