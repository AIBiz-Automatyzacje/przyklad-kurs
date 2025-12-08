import { X, Check } from '@phosphor-icons/react'

interface ComparisonTableProps {
  manual: readonly string[]
  automated: readonly string[]
}

export function ComparisonTable({ manual, automated }: ComparisonTableProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {/* Manual column */}
      <div className="bg-white/5 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3 text-error">
          <X size={20} weight="bold" />
          <span className="font-semibold text-sm">Ręcznie</span>
        </div>
        <ul className="space-y-2">
          {manual.map((item, index) => (
            <li
              key={index}
              className="text-sm text-text-muted flex items-start gap-2"
            >
              <span className="text-error mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Automated column */}
      <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
        <div className="flex items-center gap-2 mb-3 text-success">
          <Check size={20} weight="bold" />
          <span className="font-semibold text-sm">Automatycznie</span>
        </div>
        <ul className="space-y-2">
          {automated.map((item, index) => (
            <li
              key={index}
              className="text-sm text-text-light flex items-start gap-2"
            >
              <span className="text-success mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
