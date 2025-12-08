import { Section, SectionTitle } from '../../../components/layout'
import { EXAMPLES } from '../../../lib/constants'
import { ExampleCard } from './ExampleCard'

export function Examples() {
  return (
    <Section id="examples" variant="dark" withGrid>
      <SectionTitle subtitle="Poznaj praktyczne zastosowania automatyzacji w biznesie">
        Zobacz jak działa automatyzacja
      </SectionTitle>

      <div className="space-y-16 md:space-y-24">
        {EXAMPLES.map((example, index) => (
          <ExampleCard
            key={example.id}
            title={example.title}
            description={example.description}
            image={example.image}
            videoUrl={example.videoUrl}
            comparison={example.comparison}
            index={index}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </Section>
  )
}
