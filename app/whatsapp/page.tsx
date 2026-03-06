"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  trackWhatsAppConnectionPageViewed,
  trackWebFormSubmitted,
} from "@/lib/analytics"
import { getOrCreateLeadId } from "@/lib/funnel-context"

const getApiBaseUrl = () => {
  const fromEnv = process.env.NEXT_PUBLIC_API_BASE_URL
  if (fromEnv && fromEnv.length > 0) {
    return fromEnv
  }
  return "https://sk9wfett8v.us-east-1.awsapprunner.com/api"
}

const getWhatsAppBaseUrl = (apiBaseUrl: string) => {
  return apiBaseUrl.replace(/\/api\/?$/, "")
}

function WhatsAppOnboardingContent() {
  const params = useSearchParams()
  const sessionToken = params.get("sessionToken")

  const apiBaseUrl = useMemo(() => getApiBaseUrl(), [])
  const whatsappBaseUrl = useMemo(
    () => getWhatsAppBaseUrl(apiBaseUrl),
    [apiBaseUrl],
  )

  const [name, setName] = useState("")
  const [nickname, setNickname] = useState("")
  const [cpf, setCpf] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (sessionToken) {
      trackWhatsAppConnectionPageViewed("whatsapp_link")
    }
  }, [sessionToken])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)

    if (!sessionToken) {
      setError("Sessão inválida. Volte ao WhatsApp e clique no link novamente.")
      return
    }

    if (!name || !nickname || !cpf || !birthDate) {
      setError("Preencha todos os campos.")
      return
    }

    setLoading(true)

    try {
      const redirectURL = new URL(
        `${window.location.origin}/open-finance/callback`,
      )

      redirectURL.searchParams.set("sessionToken", sessionToken)

      const response = await fetch(`${whatsappBaseUrl}/whatsapp/iniciador/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionToken,
          leadId: getOrCreateLeadId(),
          name,
          nickname,
          document: {
            "@type": "app.banzai.document.CPF",
            value: cpf,
          },
          iso8601BirthDate: new Date(birthDate).toISOString(),
          redirectURL: redirectURL.toString(),
        }),
      })

      if (!response.ok) {
        trackWebFormSubmitted("error")
        const payload = await response.json().catch(() => ({}))
        throw new Error(payload.error ?? "Erro ao iniciar conexão")
      }

      trackWebFormSubmitted("success")
      const data = await response.json()

      localStorage.setItem("banzai_whatsapp_api_base", whatsappBaseUrl)
      localStorage.setItem("banzai_whatsapp_session", sessionToken)
      localStorage.setItem("banzai_iniciador_attempt", data.externalId)
      localStorage.setItem("banzai_iniciador_link", data.iniciadorId)
      if (data.state) {
        localStorage.setItem("banzai_iniciador_state", data.state)
      }

      window.location.href = data.interfaceURL
    } catch (err: any) {
      setError(err?.message ?? "Erro inesperado")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Banzai via WhatsApp</p>
            <h1 className="mt-4 font-heading text-3xl sm:text-4xl text-gray-900">
              Conecte suas contas em poucos minutos
            </h1>
            <p className="mt-4 text-gray-600">
              Preencha seus dados para abrir o Open Finance. Você será redirecionado para o iniciador e voltará para
              concluir.
            </p>
          </div>

          {!sessionToken && (
            <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Abra este link pelo WhatsApp para continuar seu onboarding.
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome completo</label>
              <input
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Como prefere ser chamado</label>
              <input
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                placeholder="Seu apelido"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CPF</label>
              <input
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                placeholder="000.000.000-00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Data de nascimento</label>
              <input
                type="date"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <Button
              type="submit"
              size="lg"
              disabled={loading || !sessionToken}
              className="w-full rounded-full text-base px-6 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? "Abrindo Open Finance..." : "Conectar agora"}
            </Button>
          </form>

          <p className="mt-6 text-xs text-gray-500 text-center">
            Ao continuar, você concorda em compartilhar seus dados financeiros com a Banzai para gerar seus insights.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function WhatsAppOnboardingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <WhatsAppOnboardingContent />
    </Suspense>
  )
}
