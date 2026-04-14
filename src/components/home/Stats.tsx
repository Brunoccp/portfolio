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

              <div className="flex flex-col gap-2">
                <span className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight">
                  84%
                </span>
                <p className="text-[rgba(255,255,255,0.6)] text-xs font-semibold tracking-[0.1em] uppercase mt-2">
                  Redução de chamados
                </p>
                <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                  Por dúvida na TOTVS TECHFIN
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
