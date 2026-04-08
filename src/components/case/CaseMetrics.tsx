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
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-[rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#6B6B6B] text-xs tracking-[0.15em] uppercase font-semibold block mb-16">
          Resultados
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {metrics.map((metric) => (
            <div key={metric.value} className="flex flex-col gap-3">
              <span className="font-display font-black text-5xl md:text-6xl text-[#92712A] leading-none tracking-tight">
                {metric.value}
              </span>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {note && (
          <div className="border-t border-[rgba(0,0,0,0.08)] pt-8">
            <p className="text-[#6B6B6B] text-xs leading-relaxed max-w-2xl italic">
              {note}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
