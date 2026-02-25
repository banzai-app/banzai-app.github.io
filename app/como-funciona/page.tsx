"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { trackCtaClickDownload, trackCtaClickHowItWorks } from "@/lib/analytics"
import { useAppLink } from "@/hooks/use-app-link"

const STEPS = [
  {
    title: "Conecte banco e cartão",
    description: "Escolha suas instituições e conecte com segurança via Open Finance.",
  },
  {
    title: "Importamos e organizamos",
    description:
      "A Banzai limpa descrições, identifica padrões e classifica transações.",
  },
  {
    title: "Defina sua meta mensal",
    description:
      "Você escolhe quanto quer gastar no mês. A Banzai divide isso em metas semanais.",
  },
  {
    title: "Acompanhe a semana e ajuste cedo",
    description:
      "Você vê seu progresso semanal e recebe resumos para corrigir rota.",
  },
] as const

export default function ComoFuncionaPage() {
  const appLink = useAppLink()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-14 sm:pt-16 pb-10 sm:pb-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Como a Banzai funciona
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Em poucos passos, você transforma transações em clareza semanal.
          </p>
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackCtaClickDownload({
                page: "como-funciona",
                placement: "hero",
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
      </section>

      {/* Passo a passo */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">
            Passo a passo
          </h2>
          <ol className="space-y-8">
            {STEPS.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* O que você vê no dia 1 */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-6">
            O valor aparece rápido
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Já no primeiro dia você enxerga seus gastos organizados por categoria, com
            destaque para as transações que mais pesaram na semana.
            <br /><br />A meta semanal aparece
            junto do seu progresso, em uma visão simples que resume o que puxou o seu
            orçamento e onde vale prestar atenção.
          </p>
        </div>
      </section>

      {/* O que você recebe toda semana */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-6">
            Ritual semanal, sem planilha
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Toda semana você recebe um resumo do que mudou: quais categorias puxaram mais
            o orçamento, quanto falta para terminar a semana com tranquilidade e quais
            ajustes simples podem ajudar. <br /><br />É um ritual leve, sem planilha, que te mantém no
            controle sem precisar acompanhar tudo o tempo todo.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            Teste na prática
          </h2>
          <p className="text-gray-600 mb-8">
            Conecte uma conta e veja o seu primeiro resumo.
          </p>
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackCtaClickDownload({
                page: "como-funciona",
                placement: "final_cta",
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
      </section>
    </div>
  )
}
