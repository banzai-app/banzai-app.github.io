"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const STATS = [
  { value: "100k", label: "transações analisadas" },
  { value: "95%", label: "de classificação automática em cartão e conta corrente" },
] as const

const TESTIMONIALS = [
  "Sentia muita falta de um produto assim no mercado. Tenho MUITA dificuldade de entender com o que gasto mais dinheiro.",
  "Ahhh, o tubarão apareceu de novo na minha tela. Eita, não sabia que tava gastando tanto.",
  "Que onboarding bom. Em 1 minuto já carregou tudo da minha conta.",
  "Conversar com a IA da Banzai é como falar com um amigo que entende muito de finanças e não me julga.",
  "Finalmente eu consegui entender que tava jogando dinheiro fora.",
] as const

export function SocialProofSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    const update = () => {
      setCurrent(api.selectedScrollSnap())
      setCount(api.scrollSnapList().length)
    }

    update()
    api.on("select", update)
    api.on("reInit", update)

    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  useEffect(() => {
    if (!api) return
    const autoplay = window.setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => window.clearInterval(autoplay)
  }, [api])

  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20" aria-labelledby="proof-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="proof-title"
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center"
        >
          Nossos números
        </h2>

        <div className="mt-10 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="flex-1 px-6 py-8 text-center"
            >
              <p className="text-[44px] sm:text-[50px] font-bold leading-none text-black">
                {stat.value}
              </p>
              <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-[280px] mx-auto leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 text-center mt-12 sm:mt-14">
          Usuários reais, problemas reais
        </h3>

        <div className="mt-6 max-w-4xl mx-auto">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {TESTIMONIALS.map((quote) => (
                <CarouselItem key={quote}>
                  <article className="min-h-[220px] flex items-center justify-center px-4 sm:px-8">
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-center max-w-3xl">
                      "{quote}"
                    </p>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  current === index ? "bg-black" : "bg-black/30 hover:bg-black/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
