import { motion } from 'framer-motion'
import { Cloud, HardDrive, Star } from '@phosphor-icons/react'
import { Card } from '../../../components/ui'

interface OptionCardProps {
  variant: 'cloud' | 'selfhost'
  title: string
  description: string
  recommended?: boolean
  index: number
}

export function OptionCard({
  variant,
  title,
  description,
  recommended = false,
  index,
}: OptionCardProps) {
  const Icon = variant === 'cloud' ? Cloud : HardDrive

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative"
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
            <Star size={12} weight="fill" />
            POLECAMY
          </span>
        </div>
      )}

      <Card
        variant="dark"
        className={`h-full text-center ${
          recommended ? 'border-accent/50 glow-accent' : ''
        }`}
      >
        <div
          className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            recommended ? 'bg-accent/20' : 'bg-white/5'
          }`}
        >
          <Icon
            size={32}
            weight="light"
            className={recommended ? 'text-accent' : 'text-text-muted'}
          />
        </div>

        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  )
}
