"use client"

import { Button } from "@/components/ui/button"
import { trackCtaClickDownloadWhatsApp } from "@/lib/analytics"

export function FinalCTASection() {
  const whatsappLink = "https://wa.me/message/STNGOA3DNQWJI1"
  const showWhatsApp = true

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-visible" aria-labelledby="final-cta-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="relative flex flex-col items-center max-w-6xl mx-auto">
          <div className="text-center max-w-xl">
            <h2
              id="final-cta-title"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
            >
              Comece agora
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8">
              Comece pelo WhatsApp e veja seu dinheiro com clareza usando dados das suas
              transações.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {showWhatsApp && whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  onClick={() =>
                    trackCtaClickDownloadWhatsApp({
                      page: "home",
                      placement: "final_cta_whatsapp",
                    })
                  }
                >
                  <Button
                    size="lg"
                    className="rounded-full text-base px-8 bg-green-600 hover:bg-green-700 text-white font-medium"
                  >
                    Começar pelo WhatsApp
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
