interface CaseHeaderProps {
  company: string
  readTime: string
  title: string
  heroImage: string
  heroImageAlt: string
}

export default function CaseHeader({
  company,
  readTime,
  title,
  heroImage,
  heroImageAlt,
}: CaseHeaderProps) {
  return (
    <div className="pt-24 md:pt-32">
      {/* Badge + read time */}
      <div className="px-6 md:px-12 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="inline-block bg-[rgba(127,29,29,0.08)] text-[#7F1D1D] text-xs font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded">
              {company} · Seguros
            </span>
            <span className="text-[#6B6B6B] text-xs">· {readTime}</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-6 md:px-12 mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.05] tracking-[-0.02em] max-w-[780px] whitespace-pre-line">
            {title}
          </h1>
        </div>
      </div>

      {/* Hero Image */}
      <div className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="w-full rounded-2xl overflow-hidden bg-[#F5F4F0] max-h-[75vh]">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
