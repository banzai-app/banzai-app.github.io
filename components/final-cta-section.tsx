import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="py-0 sm:py-0 lg:py-0 lg-px-6 bg-white overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pb-36 lg:mx-72">
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between lg:min-h-[550px]">
          {/* Text Content - Left on desktop, top on mobile */}
          <div className="relative z-10 text-center lg:text-right md:max-w-[50%] lg:max-w-[50%] mb-12 lg:mb-0 order-2 lg:order-1">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[32px] font-semibold leading-tight mb-4 sm:mb-6 text-gray-900">
            Tudo pronto<br/>para sair da<br/>superfície das<br/>suas finanças?
            </h2>
            <p className="text-base lg:text-[18px] text-gray-600 leading-relaxed">
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
          <div className="relative lg:absolute lg:-right-0 lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:justify-end">
            <img 
              src="/product_3.png" 
              alt="Banzai App Interface"
              className="w-full min-w-[900px] h-auto lg:max-w-none lg:w-[1296px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}



