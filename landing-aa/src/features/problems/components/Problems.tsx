import { Section, SectionTitle } from '../../../components/layout'
import { PROBLEMS } from '../../../lib/constants'
import { ProblemCard } from './ProblemCard'

export function Problems() {
  return (
    <Section id="problems" variant="light">
      <SectionTitle>
        Czy Ty lub Twoi pracownicy codziennie...
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROBLEMS.map((problem, index) => (
          <ProblemCard
            key={problem.id}
            title={problem.title}
            description={problem.description}
            icon={problem.icon as 'Copy' | 'MagnifyingGlass' | 'Clock' | 'CreditCard'}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
