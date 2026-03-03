"use client"

import { useEffect } from "react"
import { trackCtaClickDownload } from "@/lib/analytics"

const DOWNLOAD_URL = "https://onelink.to/apfcdm"

export default function DownloadRedirectPage() {
  useEffect(() => {
    trackCtaClickDownload({ page: "download", placement: "redirect" })

    const timeout = setTimeout(() => {
      window.location.href = DOWNLOAD_URL
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-heading text-3xl sm:text-4xl text-gray-900">
            Redirecionando...
          </h1>
          <p className="mt-4 text-gray-600">
            Estamos te levando para o download do app.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            Se não redirecionar automaticamente,{" "}
            <a
              className="underline"
              href={DOWNLOAD_URL}
              rel="noreferrer"
            >
              clique aqui
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
