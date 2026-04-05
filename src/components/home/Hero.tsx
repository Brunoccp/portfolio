export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-24 md:py-32">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#f0f0f0] leading-[1.1] tracking-tight mb-8 fade-in-up">
              Design de produto para ambientes de alta incerteza.
            </h1>

            <p
              className="text-[#888888] text-base md:text-lg leading-relaxed mb-12 max-w-lg fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Product Designer com foco em produtos onde o problema ainda não tem nome.
              Atualmente no PicPay, construindo produtos de seguros e saúde.
              Antes na TOTVS TECHFIN.
            </p>

            <div
              className="flex flex-wrap items-center gap-4 fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <a
                href="mailto:brunoccp2@gmail.com"
                className="inline-flex items-center gap-2 bg-[#f0f0f0] text-[#0a0a0a] px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
              >
                Fale comigo
              </a>

              <a
                href="https://www.linkedin.com/in/almeida-bruno/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#1f1f1f] text-[#888888] px-6 py-3 text-sm hover:border-[#555555] hover:text-[#f0f0f0] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Photo */}
          <div
            className="order-1 lg:order-2 fade-in"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto overflow-hidden bg-[#141414]">
              <img
                src="/bruno-almeida.jpg"
                alt="Bruno Almeida"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
