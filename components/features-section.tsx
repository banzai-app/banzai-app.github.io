"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type FeatureItem = {
  id: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
  comingSoon?: boolean
}

const FEATURES: FeatureItem[] = [
  {
    id: "transacoes",
    title: "Inteligência automática de transações",
    description:
      "Suas transações são importadas via conexão segura na rede de Open Finance do Banco Central. Nossa inteligência artificial classifica todas suas transações, identifica padrões e responde qualquer pergunta que você tiver.",
    image: "/product_1.png",
    imageAlt: "Painel de transações de conta e cartão no app da Banzai",
  },
  {
    id: "meta-semanas",
    title: "Meta mensal controlada em semanas",
    description:
      "Controle seus gastos de forma simples e previsível. O mês é dividido em blocos de 7 dias, e a cada semana completada você libera uma parte da sua meta mensal. Receba resumos semanais automáticos e acompanhe seu progresso sem estresse, sabendo exatamente quanto pode gastar em cada período.",
    image: "/product_2_new.png",
    imageAlt: "Tela de metas semanais da Banzai",
  },
  {
    id: "grupos",
    title: "Despesas em grupo",
    description:
      "Crie grupos com amigos, família ou colegas de casa e divida despesas de forma justa e automática. A Banzai identifica gastos compartilhados e sugere a divisão ideal, facilitando acertos e mantendo tudo transparente.",
    image: "/product_3.png",
    imageAlt: "Divisão de despesas em grupo no app da Banzai",
  },
  {
    id: "investimentos",
    title: "Investimentos",
    description:
      "Visualize todos os seus investimentos em um só lugar. Receba análises claras e independentes para entender se seus investimentos estão realmente rendendo ou se você está sendo empurrado para produtos bons para o banco.",
    image: "/highlight_1.png",
    imageAlt: "Visão consolidada de investimentos no app da Banzai",
  },
  {
    id: "planejamento",
    title: "Planejamento financeiro",
    comingSoon: true,
  },
]

export function FeaturesSection() {
  const [activeId, setActiveId] = useState(FEATURES[0].id)
  const [leavingId, setLeavingId] = useState<string | null>(null)
  const [imageVisible, setImageVisible] = useState(true)
  const itemRefs = useRef<Record<string, HTMLElement | null>>({})
  const leaveTimeoutRef = useRef<number | null>(null)

  const activeFeature = useMemo(
    () => FEATURES.find((feature) => feature.id === activeId) ?? FEATURES[0],
    [activeId]
  )

  useEffect(() => {
    setImageVisible(false)
    const timeout = window.setTimeout(() => setImageVisible(true), 40)
    return () => window.clearTimeout(timeout)
  }, [activeId])

  const selectFeature = (feature: FeatureItem) => {
    if (feature.comingSoon || feature.id === activeId) return
    const previousId = activeId
    setLeavingId(previousId)
    if (leaveTimeoutRef.current) {
      window.clearTimeout(leaveTimeoutRef.current)
    }
    leaveTimeoutRef.current = window.setTimeout(() => {
      setLeavingId((current) => (current === previousId ? null : current))
    }, 300)
    setActiveId(feature.id)
    itemRefs.current[feature.id]?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        window.clearTimeout(leaveTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="features-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="features-title"
          className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 lg:hidden"
        >
          Tudo que o seu banco não entrega, você encontra aqui
        </h2>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-2 space-y-3 lg:space-y-2">
            <h2 className="hidden lg:block font-heading text-4xl xl:text-[44px] font-bold text-gray-900 leading-tight mb-8">
              Tudo que o seu banco não entrega, você encontra aqui
            </h2>

            {FEATURES.map((feature) => {
              const isActive = feature.id === activeId
              const isLeaving = feature.id === leavingId
              const isDisabled = Boolean(feature.comingSoon)

              return (
                <div
                  key={feature.id}
                  className={cn("py-0 lg:py-1 transition-all", isDisabled && "opacity-75")}
                >
                  <div className="h-[2px] mb-1.5 lg:mb-2 bg-[#1E1E1E]/30 overflow-hidden">
                    <div
                      className={cn(
                        "h-full bg-[#1E1E1E] origin-left transition-transform duration-300 ease-in-out",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </div>

                  {isDisabled ? (
                    <div
                      ref={(node) => {
                        itemRefs.current[feature.id] = node
                      }}
                      className="select-none"
                    >
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-heading text-xl text-gray-500">{feature.title}</h3>
                        <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-1 text-xs font-semibold text-gray-600">
                          EM BREVE
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      ref={(node) => {
                        itemRefs.current[feature.id] = node
                      }}
                      type="button"
                      onClick={() => selectFeature(feature)}
                      className="w-full text-left cursor-pointer"
                    >
                      <h3
                        className={cn(
                          "font-heading text-xl transition-colors",
                          isActive ? "text-[#1E1E1E]" : "text-gray-700"
                        )}
                      >
                        {feature.title}
                      </h3>
                      {feature.description && (isActive || isLeaving) && (
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300 ease-in-out",
                            isActive ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                          )}
                        >
                          <p className="text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      )}
                    </button>
                  )}

                  {!isDisabled && feature.image && (isActive || isLeaving) && (
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
                        isActive ? "max-h-[320px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                      )}
                    >
                      <img
                        src={feature.image}
                        alt={feature.imageAlt ?? feature.title}
                        className="w-full rounded-xl shadow-sm aspect-[16/10] object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="hidden lg:block lg:col-span-3">
            {activeFeature.image && (
              <div className="rounded-xl shadow-sm overflow-hidden bg-gray-100">
                <img
                  src={activeFeature.image}
                  alt={activeFeature.imageAlt ?? activeFeature.title}
                  className={cn(
                    "w-full aspect-[16/10] object-cover transition-all duration-300 ease-in-out",
                    imageVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-[0.985]"
                  )}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
