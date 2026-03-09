import Link from "next/link"

export function SecuritySection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F3F3F3]" aria-labelledby="security-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="security-title"
            className="font-heading text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-gray-900 mb-6"
          >
            Segurança e privacidade em primeiro lugar
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            Você conecta suas contas pelo padrão oficial do Open Finance e mantém o
            controle do consentimento.
            <br />
            <br />
            A Banzai não solicita sua senha, não movimenta seu dinheiro e utiliza os
            dados exclusivamente para explicar o que está acontecendo com suas
            transações e padrões.
            <br />
            <br />
            O acesso pode ser revogado quando quiser e seus dados são mantidos em
            ambiente criptografado e seguro.
          </p>
          <Link
            href="/seguranca/"
            className="inline-flex items-center text-black font-semibold hover:underline underline-offset-2"
          >
            Saiba mais sobre segurança →
          </Link>
        </div>
      </div>
    </section>
  )
}
