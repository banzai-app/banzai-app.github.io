const STEPS = [
  {
    icon: "/feature_1.svg",
    title: "Conecte com Open Finance",
    description:
      "Você concede consentimento diretamente no seu banco. O acesso pode ser revogado quando quiser.",
  },
  {
    icon: "/feature_2.svg",
    title: "Análise automática",
    description:
      "A Banzai analisa transações dos últimos meses para identificar recorrências, custos e padrões.",
  },
  {
    icon: "/feature_3.svg",
    title: "O que importa, com contexto",
    description:
      "Você recebe sinais de atenção com explicações objetivas do porquê cada item apareceu.",
  },
] as const

export function StepsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="metodo-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="metodo-title"
          className="font-heading text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-10 sm:mb-12"
        >
          Como funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-4xl mx-auto">
          {STEPS.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <img
                  src={step.icon}
                  alt=""
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] object-contain"
                  width={70}
                  height={70}
                />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
