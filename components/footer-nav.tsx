import Link from "next/link"

const PRODUCT_LINKS = [
  { href: "/como-funciona/", label: "Como funciona" },
  { href: "/seguranca/", label: "Segurança" },
  { href: "/faq/", label: "FAQ" },
] as const

const COMPANY_LINKS = [
  { href: "mailto:contato@banzai.money", label: "Contato" },
] as const

const LEGAL_LINKS = [
  { href: "/termos/", label: "Termos de Uso" },
  { href: "/privacy/", label: "Política de Privacidade" },
] as const

type FooterLink = {
  href: string
  label: string
}

type FooterColumnProps = {
  title: string
  links: readonly FooterLink[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-3">{title}</h3>
      <ul>
        {links.map(({ href, label }) => (
          <li key={label}>
            {href.startsWith("mailto:") || href.startsWith("http") ? (
              <a
                href={href}
                className="text-sm leading-8 text-white/75 hover:text-white hover:underline transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                className="text-sm leading-8 text-white/75 hover:text-white hover:underline transition-colors"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FooterNav() {
  return (
    <footer className="relative overflow-hidden bg-[#1E1E1E] text-white" role="contentinfo">
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-20 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <FooterColumn title="Produto" links={PRODUCT_LINKS} />
          <FooterColumn title="Empresa" links={COMPANY_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        <div className="mt-8 pt-6 border-t border-white/15 space-y-1">
          <p className="text-sm text-white/70">Banzai Serviços de Tecnologia LTDA.</p>
          <p className="text-sm text-white/70">CNPJ: 62.336.401/0001-74</p>
        </div>

        <p className="mt-5 text-sm text-white/65">© 2026 Banzai. Seus dados, seu controle.</p>
      </div>
    </footer>
  )
}
