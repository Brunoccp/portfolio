const stats = [
  {
    value: '↓ 0,97 p.p.',
    label: 'Redução de churn',
    description: 'Preservando ~5 mil apólices no PicPay',
  },
  {
    value: '84%',
    label: 'Redução de chamados',
    description: 'Por dúvida na TOTVS TECHFIN',
  },
  {
    value: '8+',
    label: 'Anos',
    description: 'Construindo produtos em fintech, pagamentos e saúde',
  },
]

export default function Stats() {
  return (
    <section className="px-6 md:px-12 py-20 border-t border-[rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-2">
              <span className="font-display font-black text-5xl md:text-6xl text-[#7F1D1D] leading-none tracking-tight">
                {stat.value}
              </span>
              <p className="text-[#1A1A1A] text-xs font-semibold tracking-[0.1em] uppercase mt-2">
                {stat.label}
              </p>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
