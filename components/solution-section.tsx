export function SolutionSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-balance mb-6">
              Gerenciar dinheiro não é apenas sobre dashboards
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              É sobre contexto, conversa e comportamento. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-4">
                Tudo pronto para começar? Do nosso lado, estamos. :)
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Você só cria uma conta e conecta seus cartões. O resto é com a gente. Simples, rápido e seguro.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-chart-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-4">
                Mergulhe conosco para entender seu dinheiro
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                A Banzai é uma poderosa ferramenta de IA para te mostrar tudo e gerar insights sobre sua vida
                financeira. Como conversar com um amigo que entende de finanças.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
