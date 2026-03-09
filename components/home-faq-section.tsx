"use client"

import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { trackFaqExpandQuestion } from "@/lib/analytics"

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "O produto é realmente gratuito?",
    answer:
      "Sim! A Banzai é 100% gratuita. Todas as funcionalidades disponíveis podem ser usadas sem custo. No futuro, ofereceremos serviços transacionais complementares ao nosso produto.",
  },
  {
    id: "faq-2",
    question: "É seguro conectar minhas contas?",
    answer:
      "Absolutamente. Usamos o Open Finance, o padrão oficial regulamentado pelo Banco Central. Você autoriza o acesso diretamente no app do seu banco, sem compartilhar senha. A Banzai não pode movimentar seu dinheiro, temos acesso apenas para visualizar transações e saldos. Todos os dados são criptografados, e você pode revogar o acesso a qualquer momento.",
  },
  {
    id: "faq-3",
    question: "Quais bancos e cartões são suportados?",
    answer:
      "Suportamos todos os bancos e instituições financeiras participantes do Open Finance, incluindo Nubank, Inter, C6, Itaú, Bradesco, Santander, Banco do Brasil, Caixa e centenas de outros. Novas instituições são adicionadas continuamente.",
  },
  {
    id: "faq-4",
    question: "Como a Banzai lida com cartão e fatura?",
    answer:
      "Importamos tanto suas transações de cartão de crédito quanto da conta corrente. A IA identifica automaticamente cobranças parceladas, faturas fechadas e abertas, e distingue entre gasto no cartão e pagamento da fatura para evitar duplicação na análise.",
  },
  {
    id: "faq-5",
    question: "A Banzai vende meus dados?",
    answer:
      "Não. Nunca. Seus dados financeiros são seus e somente seus. Não vendemos, não compartilhamos com terceiros para publicidade, e não usamos para nenhum propósito além de fornecer insights para você. Nossa política de privacidade é transparente e você tem controle total sobre suas informações.",
  },
] as const

export function HomeFaqSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="home-faq-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="home-faq-title"
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-10"
        >
          Perguntas rápidas
        </h2>

        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-xl border border-gray-200 overflow-hidden"
            onValueChange={(value) => {
              if (value) trackFaqExpandQuestion(value)
            }}
          >
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200 last:border-b-0">
                <AccordionTrigger className="px-5 sm:px-6 py-5 text-left text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors [&>svg]:size-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 sm:px-6 pb-6 text-base leading-relaxed text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-6 text-center">
            <Link
              href="/faq/"
              className="inline-flex items-center text-black font-semibold hover:underline underline-offset-2"
            >
              Ver todas as perguntas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
