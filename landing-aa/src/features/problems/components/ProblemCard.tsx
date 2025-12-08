import { motion } from 'framer-motion'
import {
  Copy,
  MagnifyingGlass,
  Clock,
  CreditCard,
} from '@phosphor-icons/react'
import { Card } from '../../../components/ui'

const iconMap = {
  Copy,
  MagnifyingGlass,
  Clock,
  CreditCard,
} as const

interface ProblemCardProps {
  title: string
  description: string
  icon: keyof typeof iconMap
  index: number
}

export function ProblemCard({ title, description, icon, index }: ProblemCardProps) {
  const Icon = iconMap[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card
        variant="light"
        className="h-full group"
      >
        <div className="mb-4 text-accent">
          <Icon size={48} weight="light" />
        </div>
        <h3 className="text-lg font-semibold text-text-dark mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">
          {description}
        </p>
      </Card>
    </motion.div>
  )
}
