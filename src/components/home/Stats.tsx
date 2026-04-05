const stats = [
  {
    value: '↓ 0,97 p.p.',
    description:
      'Redução de churn preservando ~5 mil apólices e R$50k em receita no PicPay',
  },
  {
    value: '84%',
    description:
      'Redução de chamados por dúvida na TOTVS TECHFIN após redesign de plataforma',
  },
  {
    value: '8 anos',
    description:
      'Construindo produtos digitais em fintech, pagamentos e saúde',
  },
]

export default function Stats() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-4">
              <span className="text-4xl md:text-5xl font-light text-[#f0f0f0] tracking-tight leading-none">
                {stat.value}
              </span>
              <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
