"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { trackCtaClickDownload, trackCtaClickHowItWorks } from "@/lib/analytics"
import { useAppLink } from "@/hooks/use-app-link"

export function HeroSection() {
  const appLink = useAppLink()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image.png')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] text-white text-balance mb-6 sm:mb-8 leading-tight">
            Controle seus gastos por semana, sem planilha.
          </h1>

          <p className="text-base sm:text-lg lg:text-[18px] text-white/90 mb-10 sm:mb-12 text-pretty max-w-xl mx-auto leading-relaxed">
            Conecte suas contas via Open Finance, a Banzai organiza suas
            transações e te dá clareza do que fazer nesta semana.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto inline-block"
              onClick={() =>
                trackCtaClickDownload({ page: "home", placement: "hero_primary" })
              }
            >
              <Button
                size="lg"
                className="w-full xs:w-auto rounded-full text-base px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                Baixar o app
              </Button>
            </a>
            <Link
              href="/como-funciona/"
              className="w-full xs:w-auto inline-block"
              onClick={() =>
                trackCtaClickHowItWorks({ page: "home", placement: "hero_secondary" })
              }
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full xs:w-auto rounded-full text-base px-6 sm:px-8 border-white/40 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                Ver como funciona
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/70 max-w-md mx-auto">
            Leva menos de 2 minutos para conectar e ver seus gastos organizados.
          </p>
        </div>
      </div>
    </section>
  )
}
