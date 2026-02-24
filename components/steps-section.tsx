const STEPS = [
  {
    icon: "/feature_1.svg",
    title: "Conecte suas contas",
    description:
      "Conecte banco e cartão via Open Finance para importar suas transações com segurança.",
  },
  {
    icon: "/feature_2.svg",
    title: "A Banzai organiza tudo",
    description:
      "Limpamos e classificamos seus gastos automaticamente para virar informação útil.",
  },
  {
    icon: "/feature_3.svg",
    title: "Controle por semana",
    description:
      "Sua meta mensal vira um teto semanal. Você acompanha o ritmo e ajusta antes de estourar.",
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
          Um método simples para o que é difícil
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
