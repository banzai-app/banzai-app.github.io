"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  trackCtaClickDownloadApp,
  trackCtaClickDownloadWhatsApp,
} from "@/lib/analytics"
import { useAppLink } from "@/hooks/use-app-link"

export function HeroSection() {
  const appLink = useAppLink()
  const whatsappLink = "https://wa.me/message/SU5NST24OSAWP1"
  const showWhatsApp = true
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const fallback = window.setTimeout(() => setImageLoaded(true), 350)
    return () => window.clearTimeout(fallback)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo hero */}
      <img
        src="/hero-image.png"
        alt=""
        aria-hidden
        loading="eager"
        decoding="async"
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
          imageLoaded ? "blur-0 scale-100 opacity-100" : "blur-2xl scale-105 opacity-90"
        }`}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
            imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] text-white text-balance mb-6 sm:mb-8 leading-tight">
            Seu dinheiro, explicado.
          </h1>

          <p className="text-base sm:text-lg lg:text-[18px] text-white/90 mb-10 sm:mb-12 text-pretty max-w-xl mx-auto leading-relaxed">
            Conecte via Open Finance e entenda o que está acontecendo com seu dinheiro. A
            Banzai fornece evidências claras de cobranças recorrentes, custos e sinais de
            atenção.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center">
            {showWhatsApp && whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto inline-block"
                onClick={() =>
                  trackCtaClickDownloadWhatsApp({
                    page: "home",
                    placement: "hero_whatsapp",
                  })
                }
              >
                  <Button
                    size="lg"
                    className="w-full xs:w-auto rounded-full text-base px-6 sm:px-8 bg-green-600 hover:bg-green-700 text-white font-medium"
                  >
                    Começar pelo WhatsApp
                  </Button>
                </a>
            )}
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto inline-block"
              onClick={() =>
                trackCtaClickDownloadApp({
                  page: "home",
                  placement: "hero_primary",
                })
              }
            >
              <Button
                size="lg"
                className="w-full xs:w-auto rounded-full text-base px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                Baixar o app
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
