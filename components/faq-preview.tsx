import Link from "next/link"

const PREVIEW_QUESTIONS = [
  "O produto é realmente gratuito?",
  "É seguro conectar minhas contas?",
  "Quais bancos e cartões são suportados?",
  "Como a Banzai lida com cartão e fatura?",
  "A Banzai vende meus dados?",
] as const

export function FaqPreview() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="faq-preview-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-preview-title"
          className="font-heading text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8 sm:mb-10"
        >
          Perguntas rápidas
        </h2>

        <ul className="max-w-2xl mx-auto space-y-3">
          {PREVIEW_QUESTIONS.map((q, i) => (
            <li key={i}>
              <Link
                href="/faq/"
                className="block py-3 px-4 rounded-lg bg-white border border-gray-200 text-gray-800 text-sm sm:text-base font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {q}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <Link
            href="/faq/"
            className="inline-flex items-center justify-center rounded-full border-2 border-gray-900 text-gray-900 font-medium text-sm sm:text-base px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors"
          >
            Ver todas as dúvidas
          </Link>
        </div>
      </div>
    </section>
  )
}
