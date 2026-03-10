"use client"

import { Button } from "@/components/ui/button"
import { useAppLink } from "@/hooks/use-app-link"
import { useWhatsAppLink } from "@/hooks/use-whatsapp-link"
import {
  trackCtaClickDownloadApp,
  trackCtaClickDownloadWhatsApp,
} from "@/lib/analytics"

const ENABLE_WHATSAPP_CTA = false

export function FinalCTASection() {
  const appLink = useAppLink()
  const whatsappLink = useWhatsAppLink()
  const showWhatsApp = ENABLE_WHATSAPP_CTA && Boolean(whatsappLink)

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#111111] overflow-visible"
      aria-labelledby="final-cta-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="relative flex flex-col items-center max-w-6xl mx-auto">
          <div className="text-center max-w-3xl">
            <h2
              id="final-cta-title"
              className="font-heading text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-white mb-4 leading-tight"
            >
              Comece agora
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Conecte suas contas em minutos e veja seu dinheiro com clareza usando dados das
              suas transações.
            </p>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-[260px]"
                onClick={() =>
                  trackCtaClickDownloadApp({
                    page: "home",
                    placement: "final_cta_primary",
                  })
                }
              >
                <Button className="w-full md:w-[260px] h-14 rounded-full text-base px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold font-button">
                  Baixar o app
                </Button>
              </a>

              {showWhatsApp && whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-[260px]"
                  onClick={() =>
                    trackCtaClickDownloadWhatsApp({
                      page: "home",
                      placement: "final_cta_whatsapp",
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
      </div>
    </section>
  )
}
