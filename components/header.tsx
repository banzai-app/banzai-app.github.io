import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Logo className="w-8 h-8 sm:w-8 sm:h-8" />
            <span className="text-xl sm:text-2xl tracking-tight">Banzai</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Como funciona
            </Link>
            <Link
              href="#recursos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="#precos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Preços
            </Link>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
          <a href="https://form.typeform.com/to/L6o7dkN9" className="inline-block" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full text-base px-8" gaEvent="conversion_event_signup">
                Entre na fila de espera
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
