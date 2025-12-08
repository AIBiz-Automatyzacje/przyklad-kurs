import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'
import { Badge } from '../../../components/ui'
import { Container } from '../../../components/layout'
import { Particles } from '../../../components/effects'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Particles */}
      <Particles />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Badge variant="accent" className="mb-8">
              Akademia Automatyzacji
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[length:var(--font-size-hero)] font-bold leading-[1.1] tracking-tight mb-6"
          >
            <span className="text-gradient">
              Zautomatyzuj powtarzalne zadania.
            </span>
            <br />
            <span className="text-accent">
              Skup się na tym, co naprawdę rozwija Twój biznes.
            </span>
            <span className="text-accent animate-[blink_1s_step-end_infinite]">_</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10"
          >
            Bez kodowania. Bez limitu automatyzacji. Odzyskaj kilkanaście godzin
            miesięcznie.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="#examples"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-accent to-accent-hover text-white rounded-full font-semibold text-lg shadow-[0_4px_20px_rgba(255,107,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,107,0,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Zobacz jak to działa
              <ArrowDown size={20} className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
