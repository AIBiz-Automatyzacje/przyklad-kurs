import { Section, SectionTitle } from '../../../components/layout'
import { EXAMPLES } from '../../../lib/constants'
import { ExampleCard } from './ExampleCard'

// Import images for proper bundling
import workflowAdsAnalysis from '../../../assets/images/workflow-ads-analysis.png'
import workflowFbLeads from '../../../assets/images/workflow-fb-leads.png'

const EXAMPLE_IMAGES: Record<string, string> = {
  'workflow-ads-analysis.png': workflowAdsAnalysis,
  'workflow-fb-leads.png': workflowFbLeads,
}

export function Examples() {
  return (
    <Section id="examples" variant="dark" withGrid>
      <SectionTitle subtitle="Poznaj praktyczne zastosowania workflow automation. Te zautomatyzowane workflow działają 24/7. Od pozyskiwania leadów po integrację aplikacji – wszystko bez kodowania.">
        Zobacz jak działa automatyzacja
      </SectionTitle>

      <div className="space-y-16 md:space-y-24">
        {EXAMPLES.map((example, index) => (
          <ExampleCard
            key={example.id}
            title={example.title}
            description={example.description}
            image={EXAMPLE_IMAGES[example.image]}
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
