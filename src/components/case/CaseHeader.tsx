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
      {/* Meta */}
      <div className="px-6 md:px-12 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-[#555555] text-xs tracking-widest uppercase">
              {company}
            </span>
            <span className="text-[#333333] text-xs">·</span>
            <span className="text-[#555555] text-xs">{readTime}</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-6 md:px-12 mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#f0f0f0] leading-[1.1] tracking-tight max-w-4xl">
            {title}
          </h1>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full bg-[#111111] overflow-hidden">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full max-h-[80vh] object-cover object-top"
        />
      </div>
    </div>
  )
}
