import { Link } from 'react-router-dom'

interface CaseCardProps {
  company: string
  readTime?: string
  headline: string
  href?: string
  comingSoon?: boolean
  index: number
}

export default function CaseCard({
  company,
  readTime,
  headline,
  href,
  comingSoon = false,
  index,
}: CaseCardProps) {
  const content = (
    <div
      className={`group relative border border-[#1f1f1f] p-8 md:p-10 transition-all duration-300 ${
        comingSoon
          ? 'cursor-default opacity-60'
          : 'hover:border-[#333333] hover:bg-[#0f0f0f] cursor-pointer'
      }`}
    >
      {/* Index */}
      <span className="text-[#333333] text-xs font-mono mb-8 block">
        0{index + 1}
      </span>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[#555555] text-xs tracking-widest uppercase">
          {company}
        </span>
        {readTime && (
          <>
            <span className="text-[#333333] text-xs">·</span>
            <span className="text-[#555555] text-xs">{readTime}</span>
          </>
        )}
        {comingSoon && (
          <>
            <span className="text-[#333333] text-xs">·</span>
            <span className="text-[#555555] text-xs">Em breve</span>
          </>
        )}
      </div>

      {/* Headline */}
      <h2 className="text-[#f0f0f0] text-xl md:text-2xl font-light leading-snug tracking-tight max-w-md">
        {headline}
      </h2>

      {/* Arrow */}
      {!comingSoon && (
        <div className="mt-8 flex items-center gap-2 text-[#555555] text-sm transition-all duration-300 group-hover:text-[#f0f0f0] group-hover:gap-3">
          <span>Ver case</span>
          <span>→</span>
        </div>
      )}
    </div>
  )

  if (comingSoon || !href) return content

  return <Link to={href}>{content}</Link>
}
