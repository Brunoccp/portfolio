import { useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

const GLOW_COLOR = '127, 29, 29'

interface BentoCaseCard {
  company: string
  context: string
  readTime?: string
  title: string
  description?: string
  tags?: string[]
  href?: string
  comingSoon?: boolean
  large?: boolean
}

const cases: BentoCaseCard[] = [
  {
    company: 'PicPay',
    context: 'Seguros',
    readTime: '8 min',
    title: 'O problema não era churn. Era percepção de valor.',
    description:
      'Com 16% de churn, o time buscava retenção. Identifiquei que o problema estava antes — no desalinhamento entre promessa e experiência de pós-venda.',
    tags: ['Discovery', 'Pesquisa', 'Influência', 'Churn'],
    href: '/cases/assistencia-saude',
    large: true,
  },
  {
    company: 'PICPAY',
    context: 'Em breve',
    title: 'Um novo seguro de vida + IA',
    comingSoon: true,
    large: false,
  },
]

function GlowCard({ card }: { card: BentoCaseCard }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setGlowPos({ x, y })
  }, [])

  const inner = (
    <div
      ref={cardRef}
      onMouseMove={card.comingSoon ? undefined : handleMouseMove}
      onMouseEnter={() => !card.comingSoon && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-8 md:p-10 h-full transition-all duration-300 ${
        card.comingSoon
          ? 'opacity-50 cursor-default'
          : 'cursor-pointer hover:border-[rgba(127,29,29,0.2)] hover:shadow-lg'
      }`}
      style={{
        background: hovered
          ? `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(${GLOW_COLOR}, 0.06) 0%, #FFFFFF 60%)`
          : '#FFFFFF',
      }}
    >
      {/* Glow border overlay */}
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(${GLOW_COLOR}, 0.15) 0%, transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#7F1D1D] text-xs font-semibold tracking-[0.12em] uppercase">
            {card.company} · {card.context}
          </span>
          {card.readTime && (
            <span className="text-[#6B6B6B] text-xs">· {card.readTime}</span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-display font-bold text-xl md:text-2xl text-[#1A1A1A] leading-snug tracking-tight mb-4">
          {card.title}
        </h2>

        {/* Description (large card only) */}
        {card.description && (
          <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6 max-w-md">
            {card.description}
          </p>
        )}

        {/* Tags (large card only) */}
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-[#6B6B6B] text-xs border border-[rgba(0,0,0,0.1)] rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Arrow link */}
        {!card.comingSoon && (
          <div className="mt-auto flex items-center gap-2 text-[#7F1D1D] text-sm font-medium group-hover:gap-3 transition-all">
            Ver case →
          </div>
        )}
      </div>
    </div>
  )

  if (card.comingSoon || !card.href) return inner
  return <Link to={card.href} className="block h-full">{inner}</Link>
}

export default function CaseGrid() {
  return (
    <section id="work" className="py-12 md:py-16 border-t border-[rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-10">
          <span className="text-[#6B6B6B] text-xs tracking-[0.15em] uppercase font-semibold">
            Cases
          </span>
        </div>

        {/* Bento grid: 3 cols, large card spans 2, small card spans 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card — col-span-2 */}
          <div className="md:col-span-2">
            <GlowCard card={cases[0]} />
          </div>
          {/* Small card */}
          <div>
            <GlowCard card={cases[1]} />
          </div>
        </div>
      </div>
    </section>
  )
}
