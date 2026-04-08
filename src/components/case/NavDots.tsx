import { useState, useEffect, useCallback } from 'react'

interface NavSection {
  id: string
  label: string
}

interface NavDotsProps {
  sections: NavSection[]
}

export default function NavDots({ sections }: NavDotsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
    }
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, id: string) => {
      const idx = sections.findIndex((s) => s.id === id)
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        const next = sections[idx + 1]
        if (next) scrollTo(next.id)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        const prev = sections[idx - 1]
        if (prev) scrollTo(prev.id)
      }
    },
    [sections, scrollTo]
  )

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
      aria-label="Navegação por seção"
    >
      {sections.map(({ id, label }) => {
        const isActive = activeId === id
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onKeyDown={(e) => handleKeyDown(e, id)}
            title={label}
            aria-label={label}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center justify-end focus:outline-none"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 bg-[#7F1D1D]'
                  : 'w-2 h-2 bg-[rgba(0,0,0,0.2)] group-hover:bg-[rgba(127,29,29,0.4)]'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
