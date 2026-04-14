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
        scrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[rgba(255,255,255,0.08)]'
          : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display font-bold text-sm tracking-wide text-white hover:text-[#6EE840] transition-colors"
        >
          <img
            src="/bruno-almeida.jpg"
            alt="Bruno Almeida"
            className="w-8 h-8 rounded-full object-cover object-top"
          />
          <span className="hidden sm:inline">Bruno Almeida</span>
          <span className="sm:hidden">Bruno</span>
        </Link>

        <div className="flex items-center gap-8">
          {isHome ? (
            <>
              <a
                href="#work"
                className="text-[rgba(255,255,255,0.5)] text-sm hover:text-white transition-colors"
              >
                Cases
              </a>
              <a
                href="https://wa.me/5511933794008"
                className="text-[rgba(255,255,255,0.5)] text-sm hover:text-white transition-colors"
              >
                Contato
              </a>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-[rgba(255,255,255,0.5)] text-sm hover:text-white transition-colors"
              >
                Cases
              </Link>
              <a
                href="https://wa.me/5511933794008"
                className="text-[rgba(255,255,255,0.5)] text-sm hover:text-white transition-colors"
              >
                Contato
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
