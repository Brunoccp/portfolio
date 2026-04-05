import type { CaseSection } from '../../data/cases/assistencia-saude'

interface CaseContentProps {
  sections: CaseSection[]
}

export default function CaseContent({ sections }: CaseContentProps) {
  return (
    <article className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {sections.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>
    </article>
  )
}

function Section({ section }: { section: CaseSection }) {
  return (
    <div className="mb-24 md:mb-32">
      {section.heading && (
        <h2 className="text-2xl md:text-3xl font-light text-[#f0f0f0] leading-snug tracking-tight mb-10 max-w-2xl border-l-2 border-[#333333] pl-6">
          {section.heading}
        </h2>
      )}

      {section.blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p
                key={i}
                className="text-[#888888] text-base md:text-lg leading-relaxed mb-6 max-w-2xl"
              >
                {block.text}
              </p>
            )

          case 'blockquote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-[#f0f0f0]/30 pl-6 my-10 max-w-xl"
              >
                <p className="text-[#f0f0f0] text-lg md:text-xl font-light italic leading-relaxed">
                  "{block.text}"
                </p>
              </blockquote>
            )

          case 'list':
            return (
              <ul key={i} className="mb-8 max-w-2xl space-y-3">
                {block.items!.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[#888888] text-sm leading-relaxed">
                    <span className="text-[#555555] mt-1 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )

          case 'image':
            return (
              <figure key={i} className="my-12 md:my-16">
                <div className="w-full bg-[#111111] overflow-hidden">
                  <img
                    src={block.src}
                    alt={block.caption ?? ''}
                    className="w-full object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-4 text-[#555555] text-xs">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )

          case 'image-grid':
            return (
              <div key={i} className="my-12 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                {block.images!.map((img, j) => (
                  <figure key={j}>
                    <div className="w-full bg-[#111111] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.caption ?? ''}
                        className="w-full object-cover"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="mt-3 text-[#555555] text-xs">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )

          case 'table':
            return (
              <div key={i} className="my-10 max-w-2xl overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[#1f1f1f]">
                      {block.headers!.map((h, j) => (
                        <th
                          key={j}
                          className="text-left text-[#555555] text-xs tracking-widest uppercase pb-4 pr-8"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows!.map((row, j) => (
                      <tr key={j} className="border-b border-[#1f1f1f]">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className="text-[#888888] text-sm py-4 pr-8"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          case 'hypothesis-list':
            return (
              <div key={i} className="my-8 max-w-2xl space-y-4">
                {block.hypotheses!.map((h, j) => (
                  <div
                    key={j}
                    className="border border-[#1f1f1f] p-5 flex gap-4 items-start"
                  >
                    <span
                      className={`text-xs font-mono shrink-0 mt-0.5 px-2 py-0.5 ${
                        h.result === 'Validada'
                          ? 'bg-[#f0f0f0]/10 text-[#f0f0f0]'
                          : 'bg-[#333]/30 text-[#555555]'
                      }`}
                    >
                      {h.result}
                    </span>
                    <p className="text-[#888888] text-sm leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            )

          case 'learning-blocks':
            return (
              <div key={i} className="my-10 max-w-2xl space-y-8">
                {block.learnings!.map((l, j) => (
                  <div key={j} className="border-l border-[#1f1f1f] pl-6">
                    <p className="text-[#f0f0f0] text-sm font-medium mb-2">
                      {l.title}
                    </p>
                    <p className="text-[#888888] text-sm leading-relaxed">
                      {l.text}
                    </p>
                  </div>
                ))}
              </div>
            )

          case 'stakeholder-list':
            return (
              <div key={i} className="my-8 max-w-2xl space-y-4">
                {block.stakeholders!.map((s, j) => (
                  <div key={j} className="flex gap-6 py-4 border-b border-[#1f1f1f]">
                    <span className="text-[#f0f0f0] text-sm font-medium w-28 shrink-0">
                      {s.role}
                    </span>
                    <p className="text-[#888888] text-sm leading-relaxed">
                      {s.approach}
                    </p>
                  </div>
                ))}
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
