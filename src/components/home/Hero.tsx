export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Text */}
          <div className="order-1 lg:order-1 mt-5 lg:mt-0">
            {/* Eyebrow */}
            <span
              className="inline-flex self-start items-center px-3 py-1 rounded-full border border-[rgba(127,29,29,0.25)] text-[#7F1D1D] text-[10px] font-semibold tracking-[0.12em] uppercase mb-6 fade-in-up"
            >
              Product Designer · São Paulo
            </span>

            {/* Headline */}
            <h1
              className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.05] tracking-[-0.02em] mb-8 fade-in-up"
              style={{ animationDelay: '0.05s' }}
            >
              Olá, me chamo Bruno!
            </h1>

            {/* Subtitle */}
            <p
              className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-6 md:mb-12 max-w-lg fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Product Designer com foco na construção de produtos em ambientes
              de alta incerteza. Atualmente no PicPay, construindo produtos de
              seguros de saúde e crédito.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4 fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <a
                href="https://www.linkedin.com/in/almeida-bruno/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7F1D1D] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#6b1818] transition-colors"
              >
                LinkedIn →
              </a>

              <a
                href="https://wa.me/5511933794008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#6B6B6B] text-sm hover:text-[#1A1A1A] transition-colors"
              >
                Fale comigo
              </a>
            </div>
          </div>

          {/* Photo */}
          <div
            className="order-2 lg:order-2 mb-5 lg:mb-0 fade-in"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="aspect-square lg:aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-2xl bg-[#F5F4F0]">
              <img
                src="/bruno-almeida-2.jpeg"
                alt="Bruno Almeida"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
