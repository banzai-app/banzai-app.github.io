import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-semibold">Banzai</span>
            </Link>
            <p className="text-sm text-muted-foreground">Seu Copiloto de IA para Gestão Financeira</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#recursos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#precos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Preços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">© 2025 Banzai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
