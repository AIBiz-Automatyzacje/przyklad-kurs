import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark',
          'disabled:pointer-events-none disabled:opacity-50',
          'active:scale-[0.98]',
          // Variants
          {
            'bg-gradient-to-br from-accent to-accent-hover text-white shadow-[0_4px_20px_rgba(255,107,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,107,0,0.4)] hover:-translate-y-0.5':
              variant === 'primary',
            'bg-bg-light text-text-dark hover:bg-white':
              variant === 'secondary',
            'border-2 border-accent text-accent hover:bg-accent hover:text-white':
              variant === 'outline',
            'text-text-muted hover:text-text-light hover:bg-white/5':
              variant === 'ghost',
          },
          // Sizes
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
