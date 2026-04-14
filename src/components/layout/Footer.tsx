export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-[rgba(255,255,255,0.4)] text-sm">
          © 2026 Bruno Almeida
        </p>
        <div className="flex items-center gap-8">
          <a
            href="mailto:brunoccp2@gmail.com"
            className="text-[rgba(255,255,255,0.5)] text-sm hover:text-white transition-colors"
          >
            brunoccp2@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/almeida-bruno/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(255,255,255,0.5)] text-sm hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
