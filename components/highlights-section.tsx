const HIGHLIGHTS = [
  {
    image: "/highlight_1.png",
    title: "Análise visual",
    description: "Veja seus gastos por categoria em um visual intuitivo, sem precisar classificar nada.",
  },
  {
    image: "/highlight_2.png",
    title: "Transações classificadas",
    description: "A Banzai classifica automaticamente. Você só acompanha e ajusta quando quiser.",
  },
  {
    image: "/highlight_3.png",
    title: "Segurança",
    description: "Open Finance e criptografia. Você controla suas conexões e dados.",
  },
] as const

export function HighlightsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F3F3F3]" aria-labelledby="highlights-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="highlights-title"
          className="font-heading text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-10 sm:mb-12"
        >
          Tudo no app
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-4xl mx-auto">
          {HIGHLIGHTS.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-5">
                <img
                  src={item.image}
                  alt=""
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                  width={160}
                  height={160}
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
