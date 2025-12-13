import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'
import { Highlight, HeroHighlight } from '../../../components/ui'
import { Container } from '../../../components/layout'
import { Particles } from '../../../components/effects'
import n8nLogo from '../../../assets/images/n8n-logo.png'

export function Hero() {
  return (
    <HeroHighlight containerClassName="overflow-hidden">

      {/* Particles */}
      <Particles />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[length:var(--font-size-hero)] font-bold leading-[1.1] tracking-tight mb-8"
          >
            <span className="text-gradient">Zautomatyzuj</span>{' '}
            <Highlight className="text-white">
              powtarzalne zadania
            </Highlight>
            <span className="text-gradient">.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl text-accent font-semibold mb-12"
          >
            Skup się na tym, co naprawdę rozwija Twój biznes.
          </motion.h2>

          {/* n8n blurb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-center gap-4 mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-accent/20 rounded-full scale-150" />
              <img src={n8nLogo} alt="n8n logo" className="relative h-12 md:h-14" />
            </div>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
              Najpopularniejsze narzędzie do automatyzacji
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="#examples"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-accent to-accent-hover text-white rounded-full font-semibold text-lg shadow-[0_4px_20px_rgba(255,107,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,107,0,0.5)] hover:-translate-y-0.5 transition-all duration-300 animate-pulse-glow"
            >
              Zobacz jak to działa
              <ArrowDown size={20} className="animate-bounce" />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2.5 bg-accent rounded-full shadow-[0_0_8px_rgba(255,107,0,0.6)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </HeroHighlight>
  )
}
