import { FaqAccordion } from "@/components/faq-accordion"
import type { FaqItem } from "@/components/faq-accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Respostas diretas para as dúvidas mais comuns sobre a Banzai.",
  openGraph: {
    title: "Perguntas frequentes | Banzai",
    description:
      "Respostas diretas para as dúvidas mais comuns sobre a Banzai.",
  },
}

const CONTA_CONEXAO: FaqItem[] = [
  {
    id: "q0",
    question: "O produto é realmente gratuito?",
    answer:
      "Sim. A Banzai é gratuita para você usar: não cobramos mensalidade nem taxa para conectar suas contas e ver seus gastos organizados.",
  },
  {
    id: "q1",
    question: "É seguro conectar minhas contas?",
    answer:
      "Sim. A conexão acontece via Open Finance com consentimento do usuário. Você pode revogar o acesso quando quiser.",
  },
  {
    id: "q2",
    question: "Quais bancos e cartões são suportados?",
    answer:
      "Depende das integrações disponíveis no Open Finance e dos conectores usados no app. Dentro do app você vê a lista atualizada ao conectar.",
  },
  {
    id: "q3",
    question: "Preciso conectar mais de uma conta?",
    answer:
      "Não. Você pode começar com apenas uma conta ou um cartão e ir adicionando depois.",
  },
  {
    id: "q4",
    question: "O app consegue atualizar automaticamente?",
    answer:
      "Sim, o app busca atualizações periódicas, dependendo da instituição e do consentimento.",
  },
]

const GASTOS_CATEGORIAS: FaqItem[] = [
  {
    id: "q5",
    question: "A Banzai classifica tudo automaticamente?",
    answer:
      "A maior parte sim. Em alguns casos, pode haver transações ambíguas. Você pode corrigir e isso ajuda a melhorar a organização.",
  },
  {
    id: "q6",
    question: "Por que algumas descrições aparecem estranhas?",
    answer:
      "Bancos e adquirentes usam padrões diferentes. A Banzai limpa e normaliza para ficar legível.",
  },
  {
    id: "q7",
    question: "Como a Banzai lida com cartão e fatura?",
    answer:
      "A Banzai busca evitar duplicidade entre compra no cartão e pagamento da fatura. Em casos específicos pode haver inconsistência e você pode reportar para ajustarmos regras.",
  },
  {
    id: "q8",
    question: "Posso editar categorias?",
    answer: "Sim, você pode ajustar categorias quando fizer sentido para você.",
  },
  {
    id: "q9",
    question: "Consigo ver gastos por semana e por mês?",
    answer:
      "Sim. A lógica principal é semanal, mas com visão do mês.",
  },
]

const METAS_SEMANA: FaqItem[] = [
  {
    id: "q10",
    question: "O que é meta semanal?",
    answer:
      "Sua meta mensal é distribuída pelas semanas do mês. Assim você acompanha o ritmo e ajusta antes do fim do mês.",
  },
  {
    id: "q11",
    question: "Posso mudar minha meta no meio do mês?",
    answer: "Sim. A meta é um guia. Ajuste quando sua realidade mudar.",
  },
  {
    id: "q12",
    question: "E se uma semana tiver gasto maior?",
    answer:
      "Você pode compensar reduzindo na semana seguinte. O importante é enxergar cedo.",
  },
]

const PRIVACIDADE: FaqItem[] = [
  {
    id: "q13",
    question: "A Banzai vende meus dados?",
    answer:
      "Não. A Banzai nunca faz venda dos seus dados e eles são mantidos anonimizados e criptografados.",
  },
  {
    id: "q14",
    question: "Quem consegue ver meus dados?",
    answer:
      "Somente você. A equipe só acessa informações necessárias para suporte e melhorias, seguindo boas práticas de segurança.",
  },
  {
    id: "q15",
    question: "Posso apagar minha conta e meus dados?",
    answer:
      "Sim. Você pode solicitar exclusão de conta e dados conforme a política.",
  },
]

const SUPORTE: FaqItem[] = [
  {
    id: "q16",
    question: "Como reporto um problema?",
    answer:
      "Entre em contato pelo canal indicado no app ou pelo email de suporte listado no site.",
  },
  {
    id: "q17",
    question: "Vocês têm roadmap público?",
    answer:
      "Ainda não. Estamos priorizando melhorias com base no feedback do uso real.",
  },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-14 sm:pt-16 pb-8 sm:pb-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-gray-900">
            Dúvidas
          </h1>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-10">
            <div>
              <h2 className="font-heading text-lg font-semibold text-gray-900 mb-4">
                Conta e conexão
              </h2>
              <FaqAccordion items={CONTA_CONEXAO} />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-gray-900 mb-4">
                Gastos, categorias e cartão
              </h2>
              <FaqAccordion items={GASTOS_CATEGORIAS} />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-gray-900 mb-4">
                Metas e semana
              </h2>
              <FaqAccordion items={METAS_SEMANA} />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-gray-900 mb-4">
                Privacidade e dados
              </h2>
              <FaqAccordion items={PRIVACIDADE} />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-gray-900 mb-4">
                Suporte e contato
              </h2>
              <FaqAccordion items={SUPORTE} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
