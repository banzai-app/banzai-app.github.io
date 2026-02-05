import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="12" height="7" rx="2" />
                <rect x="6" y="13" width="12" height="7" rx="2" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">Banzai</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Como funciona
            </Link>
            <Link
              href="#recursos"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Recursos
            </Link>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href="https://onelink.to/apfcdm" className="inline-block" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full text-base px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white" gaEvent="conversion_event_signup">
                Baixar agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
