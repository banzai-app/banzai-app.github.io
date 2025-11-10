import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="py-0 sm:py-0 xl:py-0 lg-px-6 bg-white overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 xl:px-8 xl:pb-36 xl:mx-72">
        <div className="relative flex flex-col xl:flex-row items-center xl:justify-between xl:min-h-[550px]">
          {/* Text Content - Left on desktop, top on mobile */}
          <div className="relative z-10 text-center xl:text-right md:max-w-[50%] xl:max-w-[50%] mb-12 xl:mb-0 order-2 xl:order-1">
            <h2 className="font-heading text-3xl sm:text-4xl xl:text-[32px] font-semibold leading-tight mb-4 sm:mb-6 text-gray-900">
            Tudo pronto<br/>para sair da<br/>superfície das<br/>suas finanças?
            </h2>
            <p className="text-base xl:text-[18px] text-gray-600 leading-relaxed">
            Mergulhe com a Banzai e<br/>aprenda como viver melhor do<br/>jeito mais simples e saudável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-end">
              <a href="https://form.typeform.com/to/L6o7dkN9" className="inline-block" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full text-base px-8 bg-blue-600 hover:bg-blue-700 text-white" gaEvent="conversion_event_signup">
                  QUERO COMEÇAR
                </Button>
              </a>
            </div>
          </div>
          
          {/* Product Image - Right on desktop, overlapping slightly */}
          <div className="relative xl:absolute xl:-right-0 xl:top-1/2 xl:-translate-y-1/2 flex justify-center xl:justify-end">
            <img 
              src="/product_3.png" 
              alt="Banzai App Interface"
              className="w-full min-w-[900px] h-auto xl:max-w-none xl:w-[1296px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}



