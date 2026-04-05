import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1f1f1f]' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-[#f0f0f0] text-sm font-medium tracking-wide hover:text-white transition-colors"
        >
          Bruno Almeida
        </Link>

        <div className="flex items-center gap-8">
          {isHome ? (
            <>
              <a
                href="#about"
                className="text-[#888888] text-sm hover:text-[#f0f0f0] transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="text-[#888888] text-sm hover:text-[#f0f0f0] transition-colors"
              >
                Work
              </a>
              <a
                href="mailto:brunoccp2@gmail.com"
                className="text-[#888888] text-sm hover:text-[#f0f0f0] transition-colors"
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-[#888888] text-sm hover:text-[#f0f0f0] transition-colors"
              >
                Work
              </Link>
              <a
                href="mailto:brunoccp2@gmail.com"
                className="text-[#888888] text-sm hover:text-[#f0f0f0] transition-colors"
              >
                Contact
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
