export default function Stats() {
  return (
    <section className="pt-10 pb-20 md:py-20 bg-[#7F1D1D]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">

          {/* Experiência — destaque principal */}
          <div className="flex flex-col gap-8">
            <span className="inline-flex self-start items-center px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] text-white text-[10px] font-semibold tracking-[0.12em] uppercase">
              Experiência
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight">
                8+
              </span>
              <p className="text-[rgba(255,255,255,0.6)] text-xs font-semibold tracking-[0.1em] uppercase mt-2">
                Anos
              </p>
              <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                Sendo 4 anos em projetos complexos e 4 anos construindo produtos em fintechs
              </p>
            </div>
          </div>

          {/* Resultados selecionados */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <span className="inline-flex self-start items-center px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] text-white text-[10px] font-semibold tracking-[0.12em] uppercase">
              Resultados selecionados
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight">
                  ↓ 0,97 p.p.
                </span>
                <p className="text-[rgba(255,255,255,0.6)] text-xs font-semibold tracking-[0.1em] uppercase mt-2">
                  Redução de churn
                </p>
                <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                  Preservando ~5 mil apólices no PicPay
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Empresas */}
        <div className="mt-12 pt-10 border-t border-[rgba(255,255,255,0.15)] flex flex-col sm:flex-row sm:items-center gap-6">
          <span className="inline-flex self-start sm:self-auto items-center px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] text-white text-[10px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap">
            Empresas que atuei
          </span>
          <div className="flex items-center gap-4">
            {[
              { src: '/logos/totvs.png', alt: 'TOTVS' },
              { src: '/logos/techfin.png', alt: 'TOTVS TechFin' },
              { src: '/logos/compass_uol_logo.jpeg', alt: 'Compass UOL' },
              { src: '/logos/picpay.jpeg', alt: 'PicPay' },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="w-12 h-12 rounded-full bg-white border-2 border-[rgba(255,255,255,0.2)] overflow-hidden flex-shrink-0 flex items-center justify-center"
              >
                <img src={src} alt={alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
