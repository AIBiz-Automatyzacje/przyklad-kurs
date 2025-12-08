import { motion } from 'framer-motion'
import { Tag, ArrowRight } from '@phosphor-icons/react'
import { Button, Card } from '../../../components/ui'
import { useModal } from '../../../context/ModalContext'
import { HOSTINGER } from '../../../lib/constants'

export function HostingerOffer() {
  const { openHostingerModal } = useModal()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="mt-12"
    >
      <Card
        variant="dark"
        className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Tag size={32} className="text-accent" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">
              Specjalna oferta na VPS dla n8n
            </h3>
            <p className="text-text-muted">
              Mamy dla Ciebie zniżkę na serwer VPS idealny do uruchomienia n8n.
              Tańszy start, pełna kontrola nad swoimi automatyzacjami.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <Button onClick={openHostingerModal} size="lg">
              Sprawdź ofertę
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        {/* Discount badge */}
        <div className="absolute -top-3 -right-3 md:top-4 md:right-4">
          <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-bold rounded-full shadow-lg">
            -{HOSTINGER.discount}
          </span>
        </div>
      </Card>
    </motion.div>
  )
}
