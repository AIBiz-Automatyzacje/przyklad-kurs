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
        className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="mb-5 relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300 group-hover:scale-110">
            <Icon size={32} weight="duotone" className="text-accent" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent/30 group-hover:bg-accent/50 transition-colors" />
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
