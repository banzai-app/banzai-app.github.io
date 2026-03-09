"use client"

import { useAppLink } from "@/hooks/use-app-link"
import { trackCtaClickDownloadApp } from "@/lib/analytics"
import { cn } from "@/lib/utils"

type AiCard = {
  id: string
  title: string
  question: string
  answer?: string
  description: string
  image: string
  available?: boolean
}

const AI_CARDS: AiCard[] = [
  {
    id: "transacoes",
    title: "Análise de Transações",
    question: '"Quanto gastei com alimentação esse mês?"',
    answer:
      "Você gastou R$ 1.247,30 com alimentação em março. Isso representa 23% dos seus gastos totais.",
    description:
      "Pergunte sobre gastos, recorrências e evolução mensal e receba respostas claras em segundos.",
    image: "/chat_site_1.png",
    available: true,
  },
  {
    id: "investimentos",
    title: "Análise de Investimentos",
    question: '"Como está meu portfólio de investimentos?"',
    description:
      "Entenda desempenho, concentração e custos dos investimentos com explicações simples e acionáveis.",
    image: "/chat_site_1.png",
  },
  {
    id: "planejamento",
    title: "Planejamento Financeiro",
    question: '"Quanto preciso poupar para aposentar?"',
    description:
      "Simule metas e cenários para decidir quanto guardar e como ajustar seu plano mês a mês.",
    image: "/chat_site_1.png",
  },
  {
    id: "aquisicao-bens",
    title: "Aquisição de Bens",
    question: '"Em quanto tempo consigo comprar um carro?"',
    description:
      "Calcule prazos de compra com base na sua renda, gastos e capacidade real de poupança.",
    image: "/chat_site_1.png",
  },
]

export function AiSkillsSection() {
  const appLink = useAppLink()

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="ai-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12">
          <h2
            id="ai-title"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
          >
            Converse com uma IA que realmente ajuda você
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Nossa inteligência artificial responde suas dúvidas, analisa padrões e oferece
            insights personalizados sobre seu dinheiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {AI_CARDS.map((card) => {
            const cardContent = (
              <article className={cn("group", card.available ? "cursor-pointer" : "cursor-default")}>
                <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm aspect-[4/3]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={cn(
                      "absolute inset-0 h-full w-full object-contain",
                      card.available ? "blur-0" : "blur-sm"
                    )}
                    loading="lazy"
                  />
                  <div
                    className={cn(
                      "absolute inset-0",
                      card.id === "transacoes" ? "bg-transparent" : card.available ? "bg-black/20" : "bg-black/35"
                    )}
                  />

                  {card.id !== "transacoes" && (
                    <div className={cn("relative h-full p-4 flex flex-col justify-end", !card.available && "blur-sm")}>
                      <div className="max-w-[88%] rounded-xl bg-white px-3 py-2 text-sm text-gray-900 shadow-sm">
                        {card.question}
                      </div>
                      {card.answer && (
                        <div className="mt-2 max-w-[92%] rounded-xl bg-blue-700 px-3 py-2 text-sm text-white shadow-sm">
                          {card.answer}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className={cn("pt-4", !card.available && "opacity-80")}>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-heading text-xl text-gray-900">{card.title}</h3>
                    {!card.available && (
                      <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-1 text-xs font-semibold text-gray-600">
                        EM BREVE
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-base text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              </article>
            )

            if (!card.available) {
              return <div key={card.id}>{cardContent}</div>
            }

            return (
              <a
                key={card.id}
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackCtaClickDownloadApp({
                    page: "home",
                    placement: "ai_card_transacoes",
                  })
                }
                aria-label="Baixar o app para conversar com a IA da Banzai"
              >
                {cardContent}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
