"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { trackNavClick, trackCtaClickDownloadApp } from "@/lib/analytics"
import { useAppLink } from "@/hooks/use-app-link"

const NAV_LINKS = [
  { href: "/como-funciona/", label: "Como funciona" },
  { href: "/seguranca/", label: "Segurança" },
  { href: "/faq/", label: "Dúvidas" },
] as const

export function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const appLink = useAppLink()

  const handleNavClick = (label: string) => {
    trackNavClick(label)
  }

  const handleCtaDownload = () => {
    trackCtaClickDownloadApp({ page: pathname || "/", placement: "header" })
  }

  const linkClass = (href: string) =>
    `text-sm md:text-base font-medium transition-colors ${
      pathname === href ? "text-white" : "text-white/80 hover:text-white"
    }`

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-14 sm:h-16 min-h-[3.5rem] gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => handleNavClick("logo")}
            aria-label="Banzai - Página inicial"
          >
            <img
              src="/banzai_logo_white.png"
              alt=""
              className="w-9 h-9 sm:w-10 sm:h-10 md:mr-0"
              width={40}
              height={40}
            />
          </Link>

          {/* Mobile: botão Baixar o app + ícone de menu à direita */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaDownload}
            >
              <button
                type="button"
                className="rounded-full text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Baixar o app
              </button>
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              className="w-9 h-9 flex items-center justify-center"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <IconX className="w-5 h-5 text-white" />
              ) : (
                <IconMenu2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* Desktop nav - centralizado na página */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2 z-10"
            aria-label="Principal"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={linkClass(href)}
                onClick={() => handleNavClick(label)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaDownload}
            >
              <button
                type="button"
                className="rounded-full text-sm sm:text-base px-5 sm:px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                Baixar o app
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu (overlay simples) */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black text-white">
          <nav
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3"
            aria-label="Menu móvel"
          >
            <Link
              href="/"
              className="block text-base font-medium text-white/90 hover:text-white"
              onClick={() => {
                handleNavClick("Início")
                setMenuOpen(false)
              }}
            >
              Início
            </Link>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-base font-medium text-white/90 hover:text-white"
                onClick={() => {
                  handleNavClick(label)
                  setMenuOpen(false)
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
