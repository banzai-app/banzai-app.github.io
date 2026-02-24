import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Segurança e privacidade",
  description:
    "Você controla suas conexões. A Banzai existe para te dar clareza, não para explorar seus dados.",
  openGraph: {
    title: "Segurança e privacidade | Banzai",
    description:
      "Você controla suas conexões. A Banzai existe para te dar clareza, não para explorar seus dados.",
  },
}

export default function SegurancaPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-14 sm:pt-16 pb-10 sm:pb-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Segurança e privacidade
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Você controla suas conexões. A Banzai existe para te dar clareza,
            não para explorar seus dados.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
            O que é Open Finance?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Open Finance é um padrão que permite que você compartilhe seus dados
            financeiros com aplicativos autorizados, com seu consentimento. Você
            decide o que compartilhar e pode revogar quando quiser.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
            O que a Banzai acessa
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A Banzai acessa apenas as transações e descrições necessárias para organizar
            seus gastos.<br />
            Usa essas informações para mostrar categorias, resumos e indicadores que
            ajudam na sua clareza financeira.<br />
            Sempre trabalhamos com o mínimo de dados necessário para o funcionamento do
            app.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
            O que a Banzai não faz
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A Banzai nunca movimenta seu dinheiro e não faz Pix ou transferências em seu
            nome.<br />
            Não vende, compartilha ou comercializa seus dados com terceiros.<br />
            Nada é publicado ou exposto sem a sua autorização explícita.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
            Como protegemos suas informações
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Seus dados são protegidos com criptografia em trânsito e em repouso.<br />
            Seguimos o princípio do menor acesso necessário, restringindo permissões ao
            estritamente essencial.<br />
            Também mantemos monitoramento com logs de segurança e rotinas de revisão e
            melhoria contínua.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
            Você tem controle
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Você pode desconectar instituições e solicitar exclusão dos seus
            dados. Se quiser, você pode encerrar sua conta.
          </p>
          <Link href="/privacy/">
            <Button variant="outline" className="rounded-full">
              Ler Política de Privacidade
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
