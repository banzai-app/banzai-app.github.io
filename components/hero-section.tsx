import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base font-medium text-muted-foreground uppercase tracking-wider mb-4 sm:mb-6">
            Seu Copiloto de IA para Gestão Financeira
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-balance mb-6 sm:mb-8">
            Aprofunde onde está indo o seu dinheiro
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 sm:mb-12 text-pretty max-w-2xl mx-auto">
            Sente que não consegue entender para onde o seu dinheiro está indo? A Banzai é uma poderosa ferramenta de IA
            para te mostrar tudo e gerar insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20">
            <a href="https://form.typeform.com/to/L6o7dkN9" className="inline-block" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full text-base px-8" gaEvent="conversion_event_signup">
                Entre na fila de espera
              </Button>
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-chart-1/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-chart-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">IA Conversacional</h3>
              <p className="text-sm text-muted-foreground text-center">Pergunte qualquer coisa sobre suas finanças</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-chart-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Insights Automáticos</h3>
              <p className="text-sm text-muted-foreground text-center">Entenda seus padrões de gastos</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-chart-3/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-chart-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">100% Seguro</h3>
              <p className="text-sm text-muted-foreground text-center">Open Banking certificado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
