"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  trackCtaClickDownloadApp,
  trackCtaClickDownloadWhatsApp,
} from "@/lib/analytics"
import { useAppLink } from "@/hooks/use-app-link"

const WHAT_YOU_SEE = [
  {
    title: "Recorrências e assinaturas",
    description: "Exemplos claros de cobranças repetidas.",
  },
  {
    title: "Custos e cobranças",
    description: "Tarifas, juros e cobranças identificáveis no seu histórico.",
  },
  {
    title: "Mudanças de padrão",
    description: "Quando algo muda no seu comportamento financeiro.",
  },
  {
    title: "Sinais de atenção",
    description: "Pontos que merecem atenção explicados de forma objetiva.",
  },
] as const

const WHY_HELP = [
  "Clareza sobre recorrências e custos",
  "Visibilidade sobre mudanças relevantes",
  "Menos surpresa e mais entendimento do que está acontecendo",
] as const

const SECURITY_POINTS = [
  "Consentimento via Open Finance",
  "A Banzai não movimenta seu dinheiro",
  "O acesso pode ser revogado quando quiser e seus dados são mantidos em ambiente criptografado e seguro.",
] as const

const FAQS = [
  {
    question: "A Banzai movimenta meu dinheiro?",
    answer: "Não. A Banzai apenas lê informações necessárias para gerar análises.",
  },
  {
    question: "Preciso informar senha do banco?",
    answer: "Não. O consentimento acontece no ambiente do seu banco via Open Finance.",
  },
  {
    question: "Posso revogar o acesso?",
    answer: "Sim. Você pode revogar quando quiser.",
  },
] as const

export default function RaioXPage() {
  const appLink = useAppLink()
  const whatsappLink = "https://wa.me/message/STNGOA3DNQWJI1"

  return (
    <div className="min-h-screen">
      <section className="pt-14 sm:pt-16 pb-10 sm:pb-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Seu dinheiro, explicado.
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Conecte via Open Finance e entenda o que está acontecendo com seu dinheiro. A
            Banzai fornece evidências claras de cobranças recorrentes, custos e sinais de
            atenção.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCtaClickDownloadWhatsApp({
                  page: "raio-x",
                  placement: "hero_whatsapp",
                })
              }
            >
              <Button
                size="lg"
                className="rounded-full bg-green-600 hover:bg-green-700 text-white font-medium"
              >
                Começar pelo WhatsApp
              </Button>
            </a>
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCtaClickDownloadApp({
                  page: "raio-x",
                  placement: "hero_app",
                })
              }
            >
              <Button
                size="lg"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                Baixar o app
              </Button>
            </a>
          </div>
          <Link
            href="/seguranca/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Segurança
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">
            O que você vai ver
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHAT_YOU_SEE.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-6">
            Por que isso ajuda
          </h2>
          <ul className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 list-disc list-inside">
            {WHY_HELP.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-6">
            Segurança
          </h2>
          <ul className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-2 list-disc list-inside mb-6">
            {SECURITY_POINTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/seguranca/">
            <Button variant="outline" className="rounded-full">
              Saiba mais
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-6">
            Perguntas rápidas
          </h2>
          <div className="space-y-6">
            {FAQS.map((item) => (
              <div key={item.question} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
