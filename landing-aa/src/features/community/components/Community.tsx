import { motion } from 'framer-motion'
import { Users, Check, ArrowRight } from '@phosphor-icons/react'
import { Section, SectionTitle } from '../../../components/layout'
import { Card } from '../../../components/ui'
import { SOCIAL_LINKS, COMMUNITY_BENEFITS } from '../../../lib/constants'

export function Community() {
  return (
    <Section id="community" variant="light">
      <SectionTitle>Dołącz do społeczności</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <Card variant="light" className="text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Users size={40} className="text-accent" />
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-text-dark mb-2">
              Strefa Akademii Automatyzacji
            </h3>

            {/* Description */}
            <p className="text-text-muted mb-8">
              Darmowa społeczność dla osób, które chcą automatyzować swój biznes z
              n8n
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
              {COMMUNITY_BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-left"
                >
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} weight="bold" className="text-success" />
                  </div>
                  <span className="text-sm text-text-dark">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={SOCIAL_LINKS.skool}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-accent to-accent-hover text-white rounded-full font-semibold text-lg shadow-[0_4px_20px_rgba(255,107,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,107,0,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Dołącz za darmo
              <ArrowRight size={20} />
            </a>

            {/* Note */}
            <p className="mt-4 text-xs text-text-muted">
              Dołączenie jest całkowicie bezpłatne
            </p>
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}
