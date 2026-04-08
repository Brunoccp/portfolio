import type { CaseSection, NumberedItem } from '../../data/cases/assistencia-saude'
import { ResearchTimeline } from './ResearchTimeline'
import { BeforeAfter } from './BeforeAfter'

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
    <div id={section.id} className="mb-24 md:mb-32 scroll-mt-20">
      {section.heading && (
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#1A1A1A] leading-snug tracking-tight mb-10 max-w-2xl">
          {section.heading}
        </h2>
      )}

      {section.blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p
                key={i}
                className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-6 max-w-2xl"
              >
                {block.text}
              </p>
            )

          case 'paragraph-em':
            return (
              <p
                key={i}
                className="text-[#1A1A1A] text-base md:text-lg leading-relaxed mb-6 max-w-2xl italic"
              >
                {block.text}
              </p>
            )

          case 'section-label':
            return (
              <p
                key={i}
                className="text-[#6B6B6B] text-xs font-semibold tracking-[0.15em] uppercase mb-6 mt-2"
              >
                {block.text}
              </p>
            )

          case 'blockquote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-[#92712A] bg-[rgba(146,113,42,0.04)] pl-6 pr-4 py-4 my-8 max-w-2xl rounded-r"
              >
                <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed italic mb-2">
                  "{block.text}"
                </p>
                {block.attribution && (
                  <cite className="text-[#92712A] text-xs not-italic font-medium">
                    — {block.attribution}
                  </cite>
                )}
              </blockquote>
            )

          case 'list':
            return (
              <ul key={i} className="mb-8 max-w-2xl space-y-3">
                {(block.items as string[]).map((item, j) => (
                  <li key={j} className="flex gap-3 text-[#6B6B6B] text-base leading-relaxed">
                    <span className="text-[#7F1D1D] mt-1 shrink-0 font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )

          case 'numbered-list':
            return (
              <div key={i} className="my-10 max-w-2xl space-y-8">
                {(block.items as NumberedItem[]).map((item, j) => (
                  <div key={j} className="flex gap-6 items-start">
                    <span className="font-display font-bold text-2xl text-[rgba(127,29,29,0.25)] leading-none shrink-0 w-8 text-right mt-0.5">
                      {j + 1}
                    </span>
                    <div>
                      <p className="text-[#1A1A1A] font-semibold text-base mb-1">
                        {item.title}
                      </p>
                      {item.description && (
                        <p className="text-[#6B6B6B] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )

          case 'image':
            return (
              <figure key={i} className="my-12 md:my-16">
                <div className="w-full rounded-xl overflow-hidden bg-[#F5F4F0]">
                  <img
                    src={block.src}
                    alt={block.caption ?? ''}
                    className="w-full object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-[#6B6B6B] text-xs">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )

          case 'image-grid': {
            const images = block.images!
            const isMosaic = block.layout === '3col-mosaic'
            if (isMosaic && images.length >= 3) {
              return (
                <div key={i} className="my-12 md:my-16 grid grid-cols-3 grid-rows-2 gap-3" style={{ gridAutoRows: '220px' }}>
                  {/* First image spans 2 rows */}
                  <figure className="row-span-2 overflow-hidden rounded-xl bg-[#F5F4F0]">
                    <img
                      src={images[0].src}
                      alt={images[0].caption ?? ''}
                      className="w-full h-full object-cover"
                    />
                    {images[0].caption && (
                      <figcaption className="sr-only">{images[0].caption}</figcaption>
                    )}
                  </figure>
                  {/* Remaining images */}
                  {images.slice(1).map((img, j) => (
                    <figure key={j} className="overflow-hidden rounded-xl bg-[#F5F4F0]">
                      <img
                        src={img.src}
                        alt={img.caption ?? ''}
                        className="w-full h-full object-cover"
                      />
                      {img.caption && (
                        <figcaption className="sr-only">{img.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                  {/* Captions below */}
                  <div className="col-span-3 grid grid-cols-3 gap-3 mt-1">
                    {images.map((img, j) => img.caption ? (
                      <figcaption key={j} className="text-[#6B6B6B] text-xs">
                        {img.caption}
                      </figcaption>
                    ) : <span key={j} />)}
                  </div>
                </div>
              )
            }
            return (
              <div key={i} className="my-12 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((img, j) => (
                  <figure key={j}>
                    <div className="w-full rounded-xl overflow-hidden bg-[#F5F4F0]">
                      <img
                        src={img.src}
                        alt={img.caption ?? ''}
                        className="w-full object-cover"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="mt-2 text-[#6B6B6B] text-xs">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )
          }

          case 'table':
            return (
              <div key={i} className="my-10 max-w-2xl overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[rgba(0,0,0,0.08)]">
                      {block.headers!.map((h, j) => (
                        <th
                          key={j}
                          className="text-left text-[#92712A] text-xs tracking-[0.12em] uppercase pb-4 pr-8 font-semibold"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows!.map((row, j) => (
                      <tr key={j} className="border-b border-[rgba(0,0,0,0.06)]">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className="text-[#6B6B6B] text-sm py-4 pr-8"
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
              <div key={i} className="my-8 max-w-2xl space-y-3">
                {block.hypotheses!.map((h, j) => (
                  <div
                    key={j}
                    className="flex gap-4 items-start py-4 border-b border-[rgba(0,0,0,0.06)] last:border-0"
                  >
                    <span className="text-sm shrink-0 mt-0.5 w-5 text-center font-mono font-bold text-[#1A1A1A]">
                      {h.result === 'Validada' ? '✓' : '✗'}
                    </span>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                      <strong className="text-[#1A1A1A] font-semibold">{h.hypothesis}</strong>
                      {h.detail && <span className="text-[#6B6B6B]"> — {h.detail}</span>}
                    </p>
                  </div>
                ))}
              </div>
            )

          case 'learning-blocks':
            return (
              <div key={i} className="my-10 max-w-2xl space-y-8">
                {block.learnings!.map((l, j) => (
                  <div key={j} className="flex gap-6 items-start">
                    <span className="font-display font-bold text-2xl text-[rgba(127,29,29,0.25)] leading-none shrink-0 w-8 text-right mt-0.5">
                      {j + 1}
                    </span>
                    <div>
                      <p className="text-[#1A1A1A] font-semibold text-base mb-1">
                        {l.title}
                      </p>
                      <p className="text-[#6B6B6B] text-sm leading-relaxed">
                        {l.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )

          case 'stakeholder-list':
            return (
              <div key={i} className="my-8 max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                {block.stakeholders!.map((s, j) => (
                  <div
                    key={j}
                    className="border border-[rgba(0,0,0,0.08)] rounded-xl p-6 bg-white"
                  >
                    <span className="text-[#7F1D1D] text-xs font-semibold tracking-[0.1em] uppercase block mb-3">
                      {s.role}
                    </span>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                      {s.approach}
                    </p>
                    {s.quote && (
                      <p className="text-[#1A1A1A] text-xs italic mt-3 border-l-2 border-[rgba(0,0,0,0.1)] pl-3">
                        "{s.quote}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )

          case 'research-timeline':
            return (
              <ResearchTimeline
                key={i}
                duration={block.duration!}
                objective={block.objective!}
                steps={block.steps!}
              />
            )

          case 'before-after':
            return (
              <BeforeAfter key={i} pairs={block.pairs!} />
            )

          default:
            return null
        }
      })}
    </div>
  )
}
