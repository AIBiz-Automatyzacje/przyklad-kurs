import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'dark' | 'light'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'dark', hover = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl p-6 md:p-8 transition-all duration-300',
          // Dark variant (glassmorphism)
          {
            'bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]':
              variant === 'dark',
            'bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)]':
              variant === 'light',
          },
          // Hover effects
          hover && {
            'hover:border-accent/30 hover:shadow-[0_0_20px_rgba(255,107,0,0.08)]':
              variant === 'dark',
            'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]':
              variant === 'light',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card }
