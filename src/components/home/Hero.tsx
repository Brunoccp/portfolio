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
              className="inline-flex self-start items-center px-3 py-1 rounded-full border border-[rgba(110,232,64,0.3)] text-[#6EE840] text-[10px] font-semibold tracking-[0.12em] uppercase mb-6 fade-in-up"
            >
              Product Designer · São Paulo
            </span>

            {/* Headline */}
            <h1
              className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-[-0.02em] mb-8 fade-in-up"
              style={{ animationDelay: '0.05s' }}
            >
              Olá, me chamo Bruno!
            </h1>

            {/* Subtitle */}
            <p
              className="text-[rgba(255,255,255,0.55)] text-base md:text-lg leading-relaxed mb-6 md:mb-12 max-w-lg fade-in-up"
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
                className="inline-flex items-center gap-2 bg-[#6EE840] text-[#0D0D0D] px-6 py-3 text-sm font-semibold rounded hover:bg-[#8FF563] transition-colors"
              >
                LinkedIn →
              </a>

              <a
                href="https://wa.me/5511933794008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.5)] text-sm hover:text-white transition-colors"
              >
                Fale comigo
              </a>
            </div>
          </div>

          {/* Photo */}
          <div
            className="order-2 lg:order-2 mt-10 lg:mt-0 mb-5 lg:mb-0 fade-in"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="relative w-full max-w-[230px] lg:max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              {/* Glassmorphism circle — offset 20% top-left */}
              <div
                className="absolute rounded-full"
                style={{
                  top: '-20%',
                  left: '-20%',
                  right: '20%',
                  bottom: '20%',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  boxShadow: '0 0 24px rgba(255,255,255,0.06)',
                }}
              />
              {/* Glassmorphism circle — offset 20% bottom-right */}
              <div
                className="absolute rounded-full"
                style={{
                  top: '20%',
                  left: '20%',
                  right: '-20%',
                  bottom: '-20%',
                  background: 'rgba(110,232,64,0.07)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(110,232,64,0.25)',
                  boxShadow: '0 0 24px rgba(110,232,64,0.08)',
                }}
              />
              {/* Image square with green border */}
              <div className="relative aspect-square overflow-hidden border-2 border-[#6EE840]">
                <img
                  src="/bruno-almeida-2.jpeg"
                  alt="Bruno Almeida"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
