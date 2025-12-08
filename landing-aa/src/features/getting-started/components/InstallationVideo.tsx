import { motion } from 'framer-motion'
import { Play, Clock } from '@phosphor-icons/react'
import { Card } from '../../../components/ui'
import { useModal } from '../../../context/ModalContext'
import { VIDEOS } from '../../../lib/constants'

export function InstallationVideo() {
  const { openVideoModal } = useModal()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <Card variant="dark" className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="p-2 md:p-4">
            <h3 className="text-2xl font-semibold mb-4">
              Przekonaj się sam – instalacja w 5 minut
            </h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Przygotowaliśmy materiał, w którym pokazujemy krok po kroku, jak
              uruchomić n8n na własnym serwerze. Zobaczysz, że cały proces zajmuje
              dosłownie kilka minut.
            </p>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-accent" />
                ~7 min
              </span>
            </div>
          </div>

          {/* Video thumbnail */}
          <button
            onClick={() => openVideoModal(VIDEOS.installation)}
            className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
            aria-label="Odtwórz wideo instalacji"
          >
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-bg-dark" />

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-transform duration-300 group-hover:scale-110">
                <Play size={36} weight="fill" className="text-white ml-1" />
              </div>
              {/* Call to action text */}
              <span className="text-sm text-text-muted group-hover:text-white transition-colors duration-300">
                Kliknij i obejrzyj w 5 minut
              </span>
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-white/10 group-hover:border-accent/50 transition-colors duration-300" />
          </button>
        </div>
      </Card>
    </motion.div>
  )
}
