import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do aplicativo Banzai.",
  openGraph: {
    title: "Termos de Uso | Banzai",
    description: "Termos de uso do aplicativo Banzai.",
  },
}

export default function TermosPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-14 sm:pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
            Termos de Uso
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Última atualização: fevereiro de 2025
          </p>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Ao utilizar o aplicativo Banzai, você concorda com estes Termos de
              Uso. Recomendamos a leitura em conjunto com a nossa{" "}
              <a href="/privacy/" className="text-blue-600 hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Banzai é oferecido &quot;como está&quot;, para uso pessoal e
              não comercial. Você é responsável por manter a confidencialidade do
              seu acesso e pelo uso que fizer do aplicativo. Não utilizamos seus
              dados para fins que não sejam os descritos na Política de
              Privacidade.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para dúvidas ou solicitações relacionadas a estes Termos, entre em
              contato:{" "}
              <a
                href="mailto:contato@banzai.money"
                className="text-blue-600 hover:underline"
              >
                contato@banzai.money
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
