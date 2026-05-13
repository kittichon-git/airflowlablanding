import type { Tool } from '@/lib/data'

export interface LogoMarqueeProps {
  logos: Tool[]
  label?: string
  id?: string
}

export function LogoMarquee({ logos, label, id }: LogoMarqueeProps) {
  return (
    <div id={id} className="py-8 border-y border-border-subtle bg-bg-base">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-16">
        {label && (
          <p className="text-center text-sm text-text-muted mb-6">{label}</p>
        )}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {logos.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center justify-center py-3 px-2 rounded-[8px] border border-border-subtle bg-bg-card opacity-60 hover:opacity-100 hover:text-text-primary transition-opacity duration-200 text-text-muted text-sm font-medium text-center"
            >
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoMarquee
