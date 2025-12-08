import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { Container } from './Container'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  variant?: 'dark' | 'light'
  withContainer?: boolean
  withGrid?: boolean
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      variant = 'dark',
      withContainer = true,
      withGrid = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative py-16 md:py-24 overflow-hidden',
          {
            'bg-bg-dark text-text-light': variant === 'dark',
            'bg-bg-light text-text-dark': variant === 'light',
          },
          withGrid && variant === 'dark' && 'bg-grid-pattern',
          className
        )}
        {...props}
      >
        {withContainer ? (
          <Container>{children}</Container>
        ) : (
          children
        )}
      </section>
    )
  }
)

Section.displayName = 'Section'

// Animated section title
interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionTitle({
  children,
  subtitle,
  className,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12 md:mb-16', centered && 'text-center', className)}
    >
      <h2 className="text-[length:var(--font-size-section)] font-semibold tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export { Section }
