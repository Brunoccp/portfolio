interface SummaryItem {
  label: string
  text: string
}

interface CaseSummaryProps {
  items: SummaryItem[]
}

export default function CaseSummary({ items }: CaseSummaryProps) {
  return (
    <section className="px-6 md:px-12 py-20 md:py-24 border-b border-[rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-[rgba(0,0,0,0.08)]">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col gap-3 pt-8 md:pt-0 md:px-10 first:pt-0 first:md:pl-0 last:md:pr-0">
              <span className="text-[#92712A] text-xs font-semibold tracking-[0.15em] uppercase">
                {item.label}
              </span>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
