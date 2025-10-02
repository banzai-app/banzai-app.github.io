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

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-full bg-chart-4/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-chart-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-crimson)] text-2xl sm:text-3xl font-semibold mb-4">
                  Sua consultoria personalizada
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Converse com a Banzai sobre qualquer dúvida financeira. Como ter um consultor que conhece toda sua
                  vida financeira disponível 24/7.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-chart-4 flex-shrink-0 mt-2" />
                    <span>Perguntas ilimitadas sobre seus gastos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-chart-4 flex-shrink-0 mt-2" />
                    <span>Sugestões personalizadas baseadas no seu perfil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-chart-4 flex-shrink-0 mt-2" />
                    <span>Respostas instantâneas com contexto completo</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative mx-auto max-w-sm">
                <img
                  src="/banzai_app1.jpeg"
                  alt="Interface de chat da Banzai mostrando consultoria personalizada"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
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
