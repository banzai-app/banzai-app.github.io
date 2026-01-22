import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{
      backgroundColor: `#1E1E1E`,
    }}>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/banzai_logo_white.png"
            alt="Banzai Logo"
            className="w-[48px] h-[48px]"
          />
        </div>
        
        {/* Links */}
        <div className="flex justify-center mb-6">
          <Link
            href="/privacy"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-white/70 text-center">
          © 2025 Banzai. Todos os direitos reservados.
        </p>
      </div>
    
    </footer>
  )
}
