import type { BeforeAfterPair } from '../../data/cases/assistencia-saude'

interface BeforeAfterProps {
  pairs: BeforeAfterPair[]
}

export function BeforeAfter({ pairs }: BeforeAfterProps) {
  return (
    <div className="my-8 max-w-3xl space-y-10">
      {pairs.map((pair, i) => (
        <div key={i}>
          <p className="text-xs font-semibold tracking-[0.12em] text-[#6B6B6B] uppercase mb-4">
            {pair.label}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before */}
            <div>
              <div className="rounded-xl overflow-hidden bg-[#F5F4F0] mb-3">
                <img
                  src={pair.before.src}
                  alt={`Antes — ${pair.label}`}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-[10px] font-semibold tracking-[0.12em] text-[#6B6B6B] uppercase mt-0.5 shrink-0">
                  Antes
                </span>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{pair.before.caption}</p>
              </div>
            </div>

            {/* After */}
            <div>
              <div className="rounded-xl overflow-hidden bg-[#F5F4F0] mb-3">
                <img
                  src={pair.after.src}
                  alt={`Depois — ${pair.label}`}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-[10px] font-semibold tracking-[0.12em] text-[#92712A] uppercase mt-0.5 shrink-0">
                  Depois
                </span>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{pair.after.caption}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
