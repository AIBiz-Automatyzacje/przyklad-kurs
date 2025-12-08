import { Section, SectionTitle } from '../../../components/layout'
import { OptionCard } from './OptionCard'
import { InstallationVideo } from './InstallationVideo'
import { HostingerOffer } from './HostingerOffer'

const OPTIONS = [
  {
    variant: 'cloud' as const,
    title: 'n8n Cloud',
    description:
      'Płatny abonament. Rejestrujesz się i zaczynasz od razu, bez instalacji.',
    recommended: false,
  },
  {
    variant: 'selfhost' as const,
    title: 'Self-hosting (własny serwer)',
    description:
      'Instalujesz n8n na własnym VPS. Zero opłat za samo narzędzie – płacisz tylko za hosting.',
    recommended: true,
  },
]

export function GettingStarted() {
  return (
    <Section id="getting-started" variant="dark" withGrid>
      <SectionTitle subtitle="Masz dwie opcje:">
        Jak uruchomić n8n?
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {OPTIONS.map((option, index) => (
          <OptionCard
            key={option.variant}
            variant={option.variant}
            title={option.title}
            description={option.description}
            recommended={option.recommended}
            index={index}
          />
        ))}
      </div>

      {/* Intro text before video section */}
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <p className="text-lg text-text-muted leading-relaxed">
          Wybierasz self-hosting? Przygotowaliśmy dla Ciebie{' '}
          <span className="text-accent font-semibold">darmowe materiały</span>, które
          przeprowadzą Cię przez cały proces instalacji krok po kroku.
        </p>
      </div>

      <InstallationVideo />
      <HostingerOffer />
    </Section>
  )
}
