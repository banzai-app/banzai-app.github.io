"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { buildWhatsAppLink } from "@/lib/whatsapp-link"

const getApiBaseUrl = () => {
  const fromEnv = process.env.NEXT_PUBLIC_API_BASE_URL
  if (fromEnv && fromEnv.length > 0) {
    return fromEnv
  }
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("banzai_whatsapp_api_base")
    if (stored && stored.length > 0) {
      return stored
    }
  }
  return "https://sk9wfett8v.us-east-1.awsapprunner.com/api"
}

const getWhatsAppBaseUrl = (apiBaseUrl: string) => {
  return apiBaseUrl.replace(/\/api\/?$/, "")
}

export default function OpenFinanceCallbackPage() {
  const apiBaseUrl = useMemo(() => getApiBaseUrl(), [])
  const whatsappBaseUrl = useMemo(
    () => getWhatsAppBaseUrl(apiBaseUrl),
    [apiBaseUrl],
  )
  const whatsappLink = useMemo(
    () => buildWhatsAppLink("Acabei de conectar minhas contas!"),
    [],
  )
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const hasRequested = useRef(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sessionToken =
      params.get("sessionToken") ?? localStorage.getItem("banzai_whatsapp_session")
    const attemptId =
      params.get("externalId") ?? localStorage.getItem("banzai_iniciador_attempt")
    const linkId =
      params.get("linkId") ?? localStorage.getItem("banzai_iniciador_link")
    const state =
      params.get("state") ?? localStorage.getItem("banzai_iniciador_state")

    if (!state || !attemptId || !linkId) {
      setStatus("error")
      setMessage("Não encontramos sua sessão. Volte ao WhatsApp e tente novamente.")
      return
    }

    const completionKey = `banzai_iniciador_completed_${state}`
    if (sessionStorage.getItem(completionKey) === "true") {
      setStatus("success")
      setMessage("Conexão concluída! Já estamos analisando seus dados.")
      return
    }

    if (hasRequested.current) {
      return
    }

    hasRequested.current = true

    if (sessionToken) {
      localStorage.setItem("banzai_whatsapp_session", sessionToken)
    }
    localStorage.setItem("banzai_iniciador_attempt", attemptId)
    localStorage.setItem("banzai_iniciador_link", linkId)
    localStorage.setItem("banzai_iniciador_state", state)

    const run = async () => {
      try {
        const response = await fetch(`${whatsappBaseUrl}/whatsapp/iniciador/link`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state,
            attemptId,
            linkId,
          }),
        })

        if (!response.ok) {
          if (response.status === 409) {
            setStatus("success")
            setMessage("Conexão concluída! Já estamos analisando seus dados.")
            sessionStorage.setItem(completionKey, "true")
            return
          }
          const payload = await response.json().catch(() => ({}))
          throw new Error(payload.error ?? "Erro ao confirmar conexão")
        }

        sessionStorage.setItem(completionKey, "true")
        setStatus("success")
        setMessage("Conexão concluída! Já estamos analisando seus dados.")
      } catch (error: any) {
        if (sessionStorage.getItem(completionKey) === "true") {
          setStatus("success")
          setMessage("Conexão concluída! Já estamos analisando seus dados.")
          return
        }

        setStatus("error")
        setMessage(error?.message ?? "Erro ao concluir conexão")
      }
    }

    run()
  }, [apiBaseUrl])

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-heading text-3xl sm:text-4xl text-gray-900">{status === "loading" ? "Finalizando" : "Tudo pronto"}</h1>
          <p className="mt-4 text-gray-600">{status === "loading" ? "Confirmando sua conexão..." : message}</p>

          {status === "success" && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              {whatsappLink && (
                <Button
                  className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    window.location.href = whatsappLink
                  }}
                >
                  Voltar ao WhatsApp
                </Button>
              )}
              <Button variant="outline" className="rounded-full px-6" onClick={() => window.location.href = "https://banzai.money"}>
                Baixar o app
              </Button>
            </div>
          )}

          {status === "error" && (
            <div className="mt-8">
              <Button className="rounded-full px-6" onClick={() => window.location.href = "https://banzai.money/whatsapp"}>
                Tentar novamente
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
