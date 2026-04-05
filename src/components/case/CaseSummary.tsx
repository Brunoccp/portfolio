interface SummaryItem {
  label: string
  text: string
}

interface CaseSummaryProps {
  items: SummaryItem[]
}

export default function CaseSummary({ items }: CaseSummaryProps) {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-b border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col gap-4">
              <span className="text-[#555555] text-xs tracking-widest uppercase">
                {item.label}
              </span>
              <p className="text-[#888888] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
