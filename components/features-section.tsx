export function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
      title: "Análise Visual Completa",
      description: "Veja seus gastos organizados por categoria com gráficos interativos e insights automáticos.",
      highlights: [
        "Resumos semanais e mensais automáticos",
        "Comparações com períodos anteriores",
        "Alertas quando você está perto do limite",
      ],
      color: "chart-1",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      title: "Transações Classificadas",
      description: "Todas as suas transações organizadas e categorizadas automaticamente pela nossa IA.",
      highlights: [
        "Classificação automática por IA",
        "Ícones personalizados para cada categoria",
        "Busca e filtros inteligentes",
      ],
      color: "chart-2",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "Metas Financeiras",
      description: "Crie e acompanhe suas metas financeiras com sugestões personalizadas da IA.",
      highlights: [
        "Metas personalizadas para seu perfil",
        "Acompanhamento em tempo real",
        "Dicas para alcançar seus objetivos",
      ],
      color: "chart-3",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Chat com IA",
      description: "Converse com a Banzai sobre qualquer dúvida financeira. Como ter um consultor 24/7.",
      highlights: ["Respostas instantâneas", "Contexto completo das suas finanças", "Sugestões personalizadas"],
      color: "chart-4",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      title: "Notificações Inteligentes",
      description: "Receba alertas importantes sobre seus gastos e oportunidades de economia.",
      highlights: ["Alertas de gastos incomuns", "Lembretes de contas a pagar", "Oportunidades de economia"],
      color: "chart-5",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Segurança Total",
      description: "Seus dados protegidos com criptografia de ponta e Open Banking certificado.",
      highlights: ["Criptografia de ponta a ponta", "Open Banking certificado", "Seus dados são só seus"],
      color: "chart-1",
    },
  ]

  return (
    <section id="recursos" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-balance mb-6">
            Uma solução completa para gestão financeira
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Banzai vai te ajudar com cada decisão financeira
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative mx-auto max-w-sm">
              <img
                src="/banzai_app2.jpeg"
                alt="Interface da Banzai mostrando resumo semanal e acompanhamento de metas"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-crimson)] text-2xl sm:text-3xl font-semibold mb-4">
                Acompanhe suas metas em tempo real
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Receba resumos semanais personalizados e veja se você está dentro das suas metas. A Banzai te parabeniza
                quando você está no caminho certo e te ajuda a ajustar quando necessário.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-chart-3 flex-shrink-0 mt-2" />
                  <span>Resumos semanais e mensais automáticos</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-chart-3 flex-shrink-0 mt-2" />
                  <span>Comparações inteligentes com períodos anteriores</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-chart-3 flex-shrink-0 mt-2" />
                  <span>Insights sobre onde você pode economizar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div
                className={`w-12 h-12 rounded-full bg-${feature.color}/10 flex items-center justify-center mb-6 text-${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color} flex-shrink-0 mt-2`} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
