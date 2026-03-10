"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  trackCtaClickDownloadApp,
  trackCtaClickDownloadWhatsApp,
} from "@/lib/analytics"
import { useAppLink } from "@/hooks/use-app-link"
import { useWhatsAppLink } from "@/hooks/use-whatsapp-link"

export function HeroSection() {
  const appLink = useAppLink()
  const whatsappLink = useWhatsAppLink()
  const showWhatsApp = Boolean(whatsappLink)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const fallback = window.setTimeout(() => setImageLoaded(true), 350)
    return () => window.clearTimeout(fallback)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/hero-image.jpg"
        alt=""
        aria-hidden
        loading="eager"
        decoding="async"
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
          imageLoaded ? "blur-0 scale-100 opacity-100" : "blur-2xl scale-105 opacity-90"
        }`}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
            imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <h1 className="font-heading text-[34px] leading-[1.05] sm:text-[40px] lg:text-[52px] font-bold text-white text-balance mb-4">
            Seu dinheiro, explicado.
          </h1>

          <p className="text-base sm:text-[17px] lg:text-[19px] text-white/90 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Conecte via Open Finance e entenda o que está acontecendo com seu dinheiro.
            <br className="hidden sm:block" /> A Banzai fornece evidências claras de cobranças
            recorrentes, custos e sinais de atenção.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[260px] inline-block"
              onClick={() =>
                trackCtaClickDownloadApp({
                  page: "home",
                  placement: "hero_primary",
                })
              }
            >
              <Button
                className="w-full md:w-[260px] h-14 rounded-full text-base px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold font-button"
              >
                Baixar o app
              </Button>
            </a>

            {showWhatsApp && whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-[260px] inline-block"
                onClick={() =>
                  trackCtaClickDownloadWhatsApp({
                    page: "home",
                    placement: "hero_whatsapp",
                  })
                }
              >
                <Button className="w-full md:w-[260px] h-14 rounded-full text-base px-8 bg-[#25D366] hover:bg-[#1fae53] text-white font-semibold font-button">
                  Continuar com o WhatsApp
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
