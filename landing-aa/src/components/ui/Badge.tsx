import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-4 py-2 rounded-full font-mono text-sm backdrop-blur-sm',
        {
          'bg-white/[0.02] border border-white/[0.08] text-text-muted': variant === 'default',
          'bg-accent/10 border border-accent/30 text-accent': variant === 'accent',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
