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
    image: "/features_site_transactions.png",
    imageAlt: "Painel de transações de conta e cartão no app da Banzai",
  },
  {
    id: "meta-semanas",
    title: "Meta mensal controlada em semanas",
    description:
      "Controle seus gastos de forma simples e previsível. O mês é dividido em blocos de 7 dias, e a cada semana completada você libera uma parte da sua meta mensal. Receba resumos semanais automáticos e acompanhe seu progresso sem estresse, sabendo exatamente quanto pode gastar em cada período.",
    image: "/features_site_goals.png",
    imageAlt: "Tela de metas semanais da Banzai",
  },
  {
    id: "grupos",
    title: "Despesas em grupo",
    description:
      "Crie grupos com amigos, família ou colegas de casa e divida despesas de forma justa e automática. A Banzai identifica gastos compartilhados e sugere a divisão ideal, facilitando acertos e mantendo tudo transparente.",
    image: "/features_site_groups.png",
    imageAlt: "Divisão de despesas em grupo no app da Banzai",
  },
  {
    id: "investimentos",
    title: "Investimentos",
    description:
      "Visualize todos os seus investimentos em um só lugar. Receba análises claras para entender se seus investimentos estão trabalhando a seu favor ou a favor do banco.",
    image: "/feature_site_investments.png",
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
  const itemRefs = useRef<Record<string, HTMLElement | null>>({})
  const leaveTimeoutRef = useRef<number | null>(null)
  const scrollTimeoutRef = useRef<number | null>(null)
  const pendingScrollIdRef = useRef<string | null>(null)
  const featureImageSources = useMemo(
    () => FEATURES.map((feature) => feature.image).filter(Boolean) as string[],
    []
  )

  const activeFeature = useMemo(
    () => FEATURES.find((feature) => feature.id === activeId) ?? FEATURES[0],
    [activeId]
  )

  const clearScrollTimeout = () => {
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = null
    }
  }

  const alignFeatureToTop = (featureId: string) => {
    const target = itemRefs.current[featureId]
    if (!target) return

    const stickyHeader =
      (document.querySelector("header.sticky") as HTMLElement | null) ??
      (document.querySelector("header") as HTMLElement | null)
    const headerOffset = (stickyHeader?.offsetHeight ?? 56) + 12
    const top = window.scrollY + target.getBoundingClientRect().top - headerOffset
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
  }

  useEffect(() => {
    featureImageSources.forEach((src) => {
      const img = new window.Image()
      img.decoding = "async"
      img.src = src
    })
  }, [featureImageSources])

  const selectFeature = (feature: FeatureItem, options?: { scrollIntoView?: boolean }) => {
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
    if (options?.scrollIntoView !== false) {
      if (window.innerWidth < 1024) {
        pendingScrollIdRef.current = feature.id
      } else {
        itemRefs.current[feature.id]?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    }
  }

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        window.clearTimeout(leaveTimeoutRef.current)
      }
      clearScrollTimeout()
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth >= 1024) return
    if (pendingScrollIdRef.current !== activeId) return

    const featureId = activeId
    clearScrollTimeout()

    // Run one alignment after the open/close animation settles.
    scrollTimeoutRef.current = window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        alignFeatureToTop(featureId)
        pendingScrollIdRef.current = null
        scrollTimeoutRef.current = null
      })
    }, 330)
  }, [activeId])

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
                      className="w-full text-left cursor-pointer scroll-mt-24"
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
                            "overflow-hidden transition-[max-height,opacity,transform,margin] duration-300 ease-in-out",
                            isActive
                              ? "max-h-64 opacity-100 mt-2 translate-y-0"
                              : "max-h-0 opacity-0 mt-0 -translate-y-1"
                          )}
                        >
                          <p className="text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      )}
                    </button>
                  )}

                  {!isDisabled && feature.image && isActive && (
                    <div className="mt-3 lg:hidden animate-in fade-in duration-300">
                      <img
                        src={feature.image}
                        alt={feature.imageAlt ?? feature.title}
                        className="w-[80%] h-auto mx-auto rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.16)] object-contain"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="hidden lg:block lg:col-span-3">
            {activeFeature.image && (
              <div className="mx-auto w-full max-w-[400px] rounded-xl shadow-[0_20px_48px_rgba(0,0,0,0.18)] overflow-hidden">
                <img
                  src={activeFeature.image}
                  alt={activeFeature.imageAlt ?? activeFeature.title}
                  className="w-full aspect-[9/19] object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
