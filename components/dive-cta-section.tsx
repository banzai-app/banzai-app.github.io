import { Button } from "@/components/ui/button"

export function DiveCTASection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundColor: `#1E1E1E`,
        }} />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[32px] font-semibold leading-tight mb-6 sm:mb-8 text-white">
            Mergulhe para entender seu dinheiro
          </h2>
          
          <p className="text-base lg:text-[18px] lg:max-h-none text-white/90 leading-relaxed mb-10 sm:mb-12 max-w-xs sm:max-w-none mx-auto">
            A Banzai é uma poderosa ferramenta de IA para te mostrar tudo e gerar insights sobre sua vida financeira. <br/>
            É como conversar com um amigo que entende de finanças.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://form.typeform.com/to/L6o7dkN9" className="inline-block" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full text-base px-8 bg-blue-600 hover:bg-blue-700 text-white" gaEvent="conversion_event_signup">
                ESTOU PRONTO PARA COMEÇAR
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

