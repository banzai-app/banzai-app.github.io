import { Button } from "@/components/ui/button"

export function InsightsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8 max-w-[1600px] mx-auto">
          {/* Product Image - Left */}
          <div className="flex-shrink-0">
            <img 
              src="/product_2.png" 
              alt="Banzai App Insights"
              className="w-[224px] lg:w-[560px] h-auto"
            />
          </div>
          
          {/* Text Content - Right */}
          <div className="text-center lg:text-left max-w-md">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[32px] font-semibold leading-tight mb-6 sm:mb-8 text-gray-900">
              Descubra onde está<br/>indo o seu dinheiro.<br/>Sem planilhas, sem<br/>complicação.
            </h2>
            <p className="text-base lg:text-[18px] text-gray-600 leading-relaxed mb-8 sm:mb-10">
              Defina metas e receba resumos<br/>personalizados sem precisar<br/>fazer nada mais. É só conectar<br/>e começar a receber insights do<br/>seu jeito.
            </p>
            <a href="https://form.typeform.com/to/L6o7dkN9" className="inline-block" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full text-base px-8 bg-blue-600 hover:bg-blue-700 text-white" gaEvent="conversion_event_signup">
                COMEÇAR DE GRAÇA
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

