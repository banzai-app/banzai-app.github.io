import { Card, CardContent } from "@/components/ui/card"

const BENEFITS = [
  {
    title: "Meta semanal que funciona",
    description:
      "Você não precisa esperar o fim do mês para descobrir que deu errado.",
  },
  {
    title: "Categorias claras, sem esforço",
    description:
      "Veja para onde seu dinheiro foi de verdade, com transações organizadas.",
  },
  {
    title: "Resumo rápido da semana",
    description:
      "Entenda os principais gastos e o que puxou seu orçamento.",
  },
  {
    title: "Conversa com contexto quando precisar",
    description:
      "Pergunte sobre gastos, categorias e semanas, com o histórico já organizado.",
  },
] as const

export function BenefitCards() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="benefits-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="benefits-title"
          className="font-heading text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8 sm:mb-12"
        >
          Menos confusão. Mais controle.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {BENEFITS.map((benefit, i) => (
            <Card
              key={i}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4 sm:p-5">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
