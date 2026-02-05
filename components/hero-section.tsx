import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-show">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-image.png')",
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Logo at top */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <img
          src="/banzai_logo_white.png"
          alt="Banzai Logo"
          className="w-[48px] h-[48px]"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-12xl lg:text-[96px] text-balance mb-6 sm:mb-8 text-white">
            Aprofunde onde está indo o seu dinheiro
          </h1>
          
          <p className="text-base sm:text-lg lg:text-[18px] text-white/90 mb-10 sm:mb-12 text-pretty max-w-xs sm:max-w-none mx-auto">
          Sente que não consegue entender para onde o seu dinheiro está indo?<br/>A Banzai é uma poderosa ferramenta de IA para te mostrar tudo e gerar insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://onelink.to/apfcdm" className="inline-block" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full text-base px-8 bg-blue-600 hover:bg-blue-700 text-white" gaEvent="conversion_event_signup">
                BAIXAR O APP
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
