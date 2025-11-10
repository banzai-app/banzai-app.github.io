export function HowItWorksSection() {
  const steps = [
    {
      icon: <img src="/feature_1.svg" alt="Conecte sua conta" className="w-[70px] h-[70px]" />,
      title: "Conecte sua conta",
      description:
        "Usamos Open Banking para conectar suas contas de uma forma segura. Depois, nosso algoritmo classifica transações automaticamente.",
    },
    {
      icon: <img src="/feature_2.svg" alt="Receba insights" className="w-[70px] h-[70px]" />,
      title: "Receba insights",
      description:
        "Nossa IA analisa seus dados e gera ideias personalizadas sobre como otimizar sua vida financeira. Entenda seus padrões e evite erros.",
    },
    {
      icon: <img src="/feature_3.svg" alt="Converse com a IA" className="w-[70px] h-[70px]" />,
      title: "Converse com a IA",
      description:
        "Pergunte qualquer coisa sobre sua vida financeira. Nós vamos entender seus dados melhor do que ninguém e te oferecer o melhor caminho.",
    },
  ]

  return (
    <section id="como-funciona" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="relative inline-block mb-6">
                <div className="relative flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[24px] font-semibold mb-4 text-gray-900">
                {step.title}
              </h3>
              <p className="text-base lg:text-[18px] text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
