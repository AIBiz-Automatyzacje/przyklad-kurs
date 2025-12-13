import { motion } from 'framer-motion'
import { VideoPlayer } from './VideoPlayer'
import { ComparisonTable } from './ComparisonTable'

interface ExampleCardProps {
  title: string
  description: string
  image: string
  videoUrl: string
  comparison: {
    manual: readonly string[]
    automated: readonly string[]
  }
  index: number
  reversed?: boolean
}

export function ExampleCard({
  title,
  description,
  image,
  videoUrl,
  comparison,
  index,
  reversed = false,
}: ExampleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        reversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Content */}
      <div className={reversed ? 'lg:order-2' : ''}>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-text-muted leading-relaxed mb-6">{description}</p>
        <ComparisonTable manual={comparison.manual} automated={comparison.automated} />
      </div>

      {/* Visual */}
      <div className={reversed ? 'lg:order-1' : ''}>
        <VideoPlayer
          thumbnailSrc={image}
          videoUrl={videoUrl}
          title={title}
        />
      </div>
    </motion.div>
  )
}
