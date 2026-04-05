import CaseCard from './CaseCard'

const cases = [
  {
    company: 'PicPay',
    readTime: '~8 min',
    headline: 'O problema não era churn. Era percepção de valor.',
    href: '/cases/assistencia-saude',
    comingSoon: false,
  },
  {
    company: 'TOTVS TECHFIN',
    readTime: undefined,
    headline: 'Em breve',
    href: undefined,
    comingSoon: true,
  },
]

export default function CaseGrid() {
  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <span className="text-[#555555] text-xs tracking-widest uppercase">
            Work
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <CaseCard
              key={c.company}
              company={c.company}
              readTime={c.readTime}
              headline={c.headline}
              href={c.href}
              comingSoon={c.comingSoon}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
