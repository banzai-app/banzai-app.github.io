import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SecuritySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="security-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="security-title"
            className="font-heading text-2xl sm:text-3xl font-semibold text-gray-900 mb-6"
          >
            Segurança e privacidade em primeiro lugar
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
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
          <Link href="/seguranca/">
            <Button variant="outline" className="rounded-full">
              Saiba mais sobre segurança
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
