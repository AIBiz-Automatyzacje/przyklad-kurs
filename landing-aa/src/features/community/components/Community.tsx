import { motion } from 'framer-motion'
import { Check, ArrowRight, Lightning, BookOpen, Chats, Rocket } from '@phosphor-icons/react'
import { Section, SectionTitle } from '../../../components/layout'
import { SOCIAL_LINKS, COMMUNITY_BENEFITS } from '../../../lib/constants'
import strefaBaner from '../../../assets/baner-strefa-aa.png'

const benefitIcons = [BookOpen, Lightning, Chats, Rocket]

export function Community() {
  return (
    <Section id="community" variant="light">
      <SectionTitle>Dołącz do społeczności</SectionTitle>

      <div className="max-w-5xl mx-auto">
        {/* Main hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-orange-400/20 to-amber-400/20 rounded-3xl blur-3xl animate-pulse" />

          <div className="relative bg-gradient-to-br from-white via-white to-orange-50/50 rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-tr-full" />

            {/* Floating decorative circles */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-orange-300/20 blur-xl"
              animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-amber-300/30 to-orange-200/30 blur-lg"
              animate={{ y: [0, 10, 0], scale: [1, 0.9, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="relative px-8 py-12 md:px-16 md:py-16">
              {/* Top badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-orange-100 rounded-full border border-accent/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-accent">500+ aktywnych członków</span>
                </div>
              </motion.div>

              {/* Logo banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <div className="relative">
                  {/* Glow effect behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-orange-400/30 to-accent/30 blur-2xl scale-110" />
                  <img
                    src={strefaBaner}
                    alt="Strefa Akademii Automatyzacji"
                    className="relative w-full max-w-xs rounded-xl shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
              >
                Darmowa społeczność dla osób, które chcą automatyzować swój biznes z n8n i innymi narzędziami no-code
              </motion.p>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
                {COMMUNITY_BENEFITS.map((benefit, index) => {
                  const BenefitIcon = benefitIcons[index] || Check
                  return (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:border-accent/30 hover:bg-white hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-orange-100 flex items-center justify-center flex-shrink-0 group-hover:from-accent/20 group-hover:to-orange-200 transition-all duration-300 group-hover:scale-110">
                        <BenefitIcon size={24} weight="duotone" className="text-accent" />
                      </div>
                      <span className="font-medium text-gray-800 group-hover:text-accent transition-colors">{benefit}</span>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center"
              >
                <a
                  href={SOCIAL_LINKS.skool}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent via-orange-500 to-accent bg-[length:200%_100%] hover:bg-[position:100%_0] text-white rounded-2xl font-bold text-xl shadow-[0_8px_32px_rgba(255,107,0,0.4)] hover:shadow-[0_12px_48px_rgba(255,107,0,0.5)] hover:-translate-y-1 transition-all duration-500"
                >
                  <span>Dołącz za darmo</span>
                  <ArrowRight size={24} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Check size={18} weight="bold" className="text-green-500" />
                    <span className="text-sm">100% za darmo</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Check size={18} weight="bold" className="text-green-500" />
                    <span className="text-sm">Bez zobowiązań</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Check size={18} weight="bold" className="text-green-500" />
                    <span className="text-sm">Natychmiastowy dostęp</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
