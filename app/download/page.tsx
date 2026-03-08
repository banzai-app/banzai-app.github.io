"use client"

import { useEffect, useMemo, useState } from "react"
import { trackCtaClickDownloadAppRedirect } from "@/lib/analytics"
import { buildStoreLinksWithAttribution } from "@/lib/app-link"

type Platform = "ios" | "android" | "desktop"

function detectPlatform(userAgent: string): Platform {
  if (/android/i.test(userAgent)) return "android"
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios"
  return "desktop"
}

export default function DownloadRedirectPage() {
  const [isReady, setIsReady] = useState(false)
  const [platform, setPlatform] = useState<Platform>("desktop")
  const [iosUrl, setIosUrl] = useState("")
  const [androidUrl, setAndroidUrl] = useState("")
  const [fallbackDownloadUrl, setFallbackDownloadUrl] = useState("")

  useEffect(() => {
    trackCtaClickDownloadAppRedirect({ page: "download", placement: "redirect" })

    const params = new URLSearchParams(window.location.search)
    const links = buildStoreLinksWithAttribution(params)
    const currentPlatform = detectPlatform(window.navigator.userAgent)

    setIosUrl(links.ios)
    setAndroidUrl(links.android)
    setFallbackDownloadUrl(window.location.href)
    setPlatform(currentPlatform)
    setIsReady(true)

    if (currentPlatform === "desktop") {
      return
    }

    const timeout = setTimeout(() => {
      window.location.href = currentPlatform === "ios" ? links.ios : links.android
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  const qrCodeUrl = useMemo(() => {
    if (!fallbackDownloadUrl) return ""
    const encodedData = encodeURIComponent(fallbackDownloadUrl)
    return `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodedData}`
  }, [fallbackDownloadUrl])

  if (!isReady) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl text-gray-900">
              Carregando...
            </h1>
          </div>
        </div>
      </div>
    )
  }

  if (platform === "desktop") {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl text-gray-900">
              Escaneie para baixar o app
            </h1>
            <p className="mt-4 text-gray-600">
              Abra a câmera do celular e escaneie o QR Code para continuar no telefone.
            </p>

            <div className="mt-8 flex justify-center">
              {qrCodeUrl ? (
                <img
                  src={qrCodeUrl}
                  alt="QR Code para baixar o app"
                  className="h-64 w-64 rounded-xl border border-gray-200"
                />
              ) : (
                <div className="h-64 w-64 rounded-xl border border-gray-200 bg-gray-50" />
              )}
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Ou abra direto:{" "}
              <a className="underline" href={fallbackDownloadUrl}>
                {fallbackDownloadUrl}
              </a>
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a className="underline" href={iosUrl} rel="noreferrer">
                App Store
              </a>
              <a className="underline" href={androidUrl} rel="noreferrer">
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
              href={platform === "ios" ? iosUrl : androidUrl}
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
