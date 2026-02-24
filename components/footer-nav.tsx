import Link from "next/link"

const PRODUCT_LINKS = [
  { href: "/", label: "Home" },
  { href: "/como-funciona/", label: "Como funciona" },
  { href: "/faq/", label: "Dúvidas" },
] as const

const TRUST_LINKS = [
  { href: "/seguranca/", label: "Segurança" },
  { href: "/privacy/", label: "Privacidade" },
  { href: "/termos/", label: "Termos" },
] as const

export function FooterNav() {
  return (
    <footer
      className="relative overflow-hidden bg-[#1E1E1E] text-white"
      role="contentinfo"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Logo + microcopy em mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Banzai - Página inicial">
              <img
                src="/banzai_logo_white.png"
                alt=""
                className="w-10 h-10"
                width={40}
                height={40}
              />
            </Link>
            <p className="text-sm text-white/75 max-w-[280px] leading-relaxed">
              Conexão via Open Finance. Dados protegidos com boas práticas de
              segurança. Você controla suas conexões.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-4">
              Produto
            </h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Confiança */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-4">
              Confiança
            </h3>
            <ul className="space-y-3">
              {TRUST_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contato */}
        <div className="mt-8 pt-8 border-t border-white/15 space-y-1">
          <p className="text-sm text-white/70">
            CNPJ: 62.336.401/0001-74
          </p>
          <p className="text-sm text-white/70">
            Contato:{" "}
            <a
              href="mailto:contato@banzai.money"
              className="text-white/90 hover:text-white underline underline-offset-2"
            >
              contato@banzai.money
            </a>
          </p>
        </div>

        <p className="mt-6 text-sm text-white/60 text-center sm:text-left">
          © {new Date().getFullYear()} Banzai. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
