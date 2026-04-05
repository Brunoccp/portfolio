interface Metric {
  value: string
  description: string
}

interface CaseMetricsProps {
  metrics: Metric[]
  note?: string
}

export default function CaseMetrics({ metrics, note }: CaseMetricsProps) {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#555555] text-xs tracking-widest uppercase block mb-16">
          Results
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {metrics.map((metric) => (
            <div key={metric.value} className="flex flex-col gap-4">
              <span className="text-4xl md:text-5xl font-light text-[#f0f0f0] tracking-tight leading-none">
                {metric.value}
              </span>
              <p className="text-[#888888] text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {note && (
          <p className="text-[#555555] text-xs leading-relaxed max-w-2xl border-t border-[#1f1f1f] pt-8">
            {note}
          </p>
        )}
      </div>
    </section>
  )
}
