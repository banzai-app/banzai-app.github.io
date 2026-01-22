import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - Banzai",
  description: "Política de Privacidade do aplicativo Banzai - LGPD e Open Finance",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-2">
            Política de Privacidade – Banzai
          </h1>
          <p className="text-sm text-gray-600 mb-12">
            Última atualização: 09/10/2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8 leading-relaxed">
              A sua privacidade é uma prioridade para nós. Esta Política explica como o aplicativo Banzai coleta, utiliza e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e com as regras do Open Finance estabelecidas pelo Banco Central do Brasil.
            </p>

            <p className="text-gray-700 mb-12 leading-relaxed">
              Ao utilizar o aplicativo, você declara estar ciente e de acordo com esta Política.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                1. Quais dados coletamos
              </h2>

              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4 mt-8">
                1.1. Dados fornecidos por você
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>Nome, e-mail e foto de perfil (quando você faz login com Google ou Apple);</li>
                <li>Informações enviadas voluntariamente dentro do app.</li>
              </ul>

              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4 mt-8">
                1.2. Dados financeiros via Open Finance (somente com consentimento)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Se você optar por conectar suas contas bancárias via Open Finance, coletaremos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Dados de contas e saldos;</li>
                <li>Histórico de transações;</li>
                <li>Informações de cartões, investimentos ou empréstimos, se você autorizar.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Esse acesso só acontece após sua autorização expressa, com prazo determinado e nas condições definidas pelo Banco Central.
              </p>

              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4 mt-8">
                1.3. Dados de uso e dispositivo
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Modelo do celular, sistema operacional, idioma, IP e interações dentro do app (via serviços de analytics);</li>
                <li>Tokens de dispositivos para envio de notificações push.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                2. Como usamos seus dados
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Utilizamos seus dados para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>Exibir suas informações financeiras de forma consolidada;</li>
                <li>Enviar insights, lembretes e notificações úteis para sua organização financeira;</li>
                <li>Autenticar seu acesso com Google ou Apple;</li>
                <li>Melhorar o funcionamento e segurança do app.</li>
              </ul>
              <p className="text-gray-700 font-semibold leading-relaxed">
                Nunca vendemos seus dados pessoais.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                3. Com quem compartilhamos os dados
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Compartilhamos informações apenas quando necessário para o funcionamento do app:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li><strong>Provedores de Open Finance:</strong> Conectar com bancos e instituições financeiras;</li>
                <li><strong>Serviços de analytics:</strong> Estatísticas de uso;</li>
                <li><strong>Push notifications:</strong> Enviar alertas e lembretes;</li>
                <li><strong>Autenticação Google/Apple:</strong> Login e criação de conta.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Também podemos compartilhar dados com autoridades legais, se houver obrigação prevista em lei.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                4. Segurança e armazenamento
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Utilizamos criptografia para proteger seus dados em trânsito e em repouso;</li>
                <li>Os dados são armazenados em servidores seguros na nuvem com controle de acesso restrito;</li>
                <li>Você pode revogar o consentimento do Open Finance a qualquer momento, interrompendo novas coletas.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                5. Seus direitos (LGPD)
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Você pode, a qualquer momento:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>Acessar ou corrigir seus dados;</li>
                <li>Revogar consentimentos concedidos;</li>
                <li>Solicitar a exclusão da sua conta e dados;</li>
                <li>Pedir mais informações sobre como tratamos seus dados.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Basta entrar em contato pelo e-mail{" "}
                <a 
                  href="mailto:contato@banzai.money" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  contato@banzai.money
                </a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                6. Retenção e exclusão
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Se você encerrar a conta ou revogar autorizações, os dados serão excluídos ou anonimizados, salvo quando houver obrigação legal para mantê-los por mais tempo.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                7. Uso por menores
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O Banzai não é recomendado para menores de 18 anos. Caso identifiquemos uma conta criada por menor sem autorização do responsável, ela poderá ser removida.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                8. Alterações nesta Política
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de tempos em tempos. Quando isso acontecer, avisaremos pelo aplicativo ou por e-mail.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                9. Contato
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Se tiver qualquer dúvida sobre esta Política ou sobre seus dados, fale com a gente:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-900 font-semibold mb-2">Banzai</p>
                <p className="text-gray-700">CNPJ: 62.336.401/0001-74</p>
                <p className="text-gray-700">
                  E-mail:{" "}
                  <a 
                    href="mailto:contato@banzai.money" 
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    contato@banzai.money
                  </a>
                </p>
                <p className="text-gray-700">São Paulo – SP, Brasil</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
