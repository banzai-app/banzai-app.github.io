import { Button } from "@/components/ui/button"

export function PricingSection() {
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-chart-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )

  return (
    <section id="precos" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-balance mb-6">
            Comece grátis, evolua quando precisar
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Experimente todos os recursos gratuitamente. Faça upgrade para desbloquear recursos premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="font-heading text-2xl font-semibold mb-2">Grátis</h3>
            <p className="text-muted-foreground mb-6">Para começar a entender suas finanças</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">R$ 0</span>
              <span className="text-muted-foreground">/mês</span>
            </div>
            <Button variant="outline" className="w-full rounded-full mb-8 bg-transparent">
              Começar grátis
            </Button>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm">Conecte até 1 conta</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm">Classificação automática de transações</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm">Insights avançados e previsões</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm">5 conversas por mês com a IA</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm">1 meta financeira</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-chart-1 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Popular
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-2">Premium</h3>
            <p className="text-primary-foreground/80 mb-6">Para quem quer controle total</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">R$ 29,90</span>
              <span className="text-primary-foreground/80">/mês</span>
            </div>
            <Button
              variant="secondary"
              className="w-full rounded-full mb-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Começar teste grátis
            </Button>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm">Contas ilimitadas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm">Conversas ilimitadas com a IA</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm">Metas ilimitadas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm">Insights avançados e previsões</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
