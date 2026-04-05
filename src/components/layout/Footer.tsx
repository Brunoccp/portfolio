export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-[#555555] text-sm">
          © 2024 Bruno Almeida
        </p>
        <div className="flex items-center gap-8">
          <a
            href="mailto:brunoccp2@gmail.com"
            className="text-[#555555] text-sm hover:text-[#f0f0f0] transition-colors"
          >
            brunoccp2@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/almeida-bruno/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555555] text-sm hover:text-[#f0f0f0] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
