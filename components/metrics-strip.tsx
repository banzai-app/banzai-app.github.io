const METRICS = [
  { value: "100k", label: "transações analisadas" },
  { value: "1k+", label: "usuários em beta" },
  { value: "95%", label: "de classificação automática em cartão e conta corrente" },
] as const

export function MetricsStrip() {
  return (
    <section className="py-12 sm:py-16 bg-[#1E1E1E] text-white" aria-labelledby="metrics-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="metrics-title"
          className="font-heading text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-10"
        >
          Feito para o mundo real
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto text-center">
          {METRICS.map((m, i) => (
            <div key={i}>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {m.value}
              </p>
              <p className="text-sm sm:text-base text-white/80">{m.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-white/70 text-center max-w-xl mx-auto">
          A Banzai não vende seus dados. Você tem controle sobre suas conexões e
          informações.
        </p>
      </div>
    </section>
  )
}
