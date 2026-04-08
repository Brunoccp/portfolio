import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface Step {
  label: string
  deadline: string
}

interface ResearchTimelineProps {
  duration: string
  objective: string
  steps: Step[]
  className?: string
}

export function ResearchTimeline({
  duration,
  objective,
  steps,
  className,
}: ResearchTimelineProps) {
  return (
    <div className={cn('my-8 max-w-2xl border border-[rgba(0,0,0,0.08)] rounded-xl overflow-hidden', className)}>
      {/* Header */}
      <div className="bg-[#F5F4F0] px-6 py-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] text-[#92712A] uppercase mb-1">
            Plano de pesquisa
          </p>
          <p className="text-sm text-[#1A1A1A] max-w-sm leading-snug">{objective}</p>
        </div>
        <span className="text-xs text-[#6B6B6B] bg-white border border-[rgba(0,0,0,0.08)] rounded-full px-3 py-1 whitespace-nowrap shrink-0">
          Duração: {duration}
        </span>
      </div>

      {/* Timeline steps using Timeline9 pattern */}
      <div className="relative px-6 py-4">
        {/* Vertical line */}
        <Separator
          orientation="vertical"
          className="absolute top-6 bottom-6 left-[2.125rem] bg-[rgba(127,29,29,0.15)]"
        />

        <div className="space-y-0 divide-y divide-[rgba(0,0,0,0.06)]">
          {steps.map((step, i) => (
            <div key={i} className="relative flex items-center gap-4 py-3">
              {/* Dot — Timeline9 pattern */}
              <div className="relative z-10 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-[#7F1D1D] bg-[#FAFAF8]">
                <span className="size-2 rounded-full bg-[#7F1D1D]" />
              </div>

              <span className="flex-1 text-sm text-[#1A1A1A]">{step.label}</span>

              {step.deadline !== '—' && (
                <span className="text-xs text-[#6B6B6B] shrink-0">{step.deadline}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
