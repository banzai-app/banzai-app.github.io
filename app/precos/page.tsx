"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { trackCtaClickDownload } from "@/lib/analytics"
import { buildAppLinkWithUtm } from "@/lib/app-link"
import { useSearchParams } from "next/navigation"

const FREE_FEATURES = [
  "Conectar contas via Open Finance",
  "Organizar e classificar transações",
  "Meta mensal com visão semanal",
  "Resumos e insights básicos",
] as const

export default function PrecosPage() {
  const searchParams = useSearchParams()
  const appLink = buildAppLinkWithUtm(searchParams)

  return (
    <div className="min-h-screen">
      <section className="pt-14 sm:pt-16 pb-10 sm:pb-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Preços simples
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Comece grátis. Recursos avançados podem entrar como um plano
            opcional no futuro.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Free */}
            <Card className="border-2 border-gray-200 shadow-sm">
              <CardHeader>
                <h2 className="font-heading text-xl font-semibold text-gray-900">
                  Free
                </h2>
                <p className="text-3xl font-bold text-gray-900">R$ 0</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {FREE_FEATURES.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm sm:text-base text-gray-700">
                      <span className="text-green-600">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2"
                  onClick={() =>
                    trackCtaClickDownload({
                      page: "precos",
                      placement: "free_cta",
                    })
                  }
                >
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                  >
                    Baixar o app
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
