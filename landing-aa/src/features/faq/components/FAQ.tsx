import { motion } from 'framer-motion'
import { Section, SectionTitle } from '../../../components/layout'
import { FAQ_ITEMS } from '../../../lib/constants'
import { FAQItem } from './FAQItem'

export function FAQ() {
  return (
    <Section id="faq" variant="dark" withGrid>
      <SectionTitle subtitle="Odpowiedzi na najczęściej zadawane pytania">
        Często zadawane pytania
      </SectionTitle>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl px-6 md:px-8">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
