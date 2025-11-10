export function DashboardSection() {
  return (
    <section className="py-0 sm:py-0 lg:py-0 lg-px-6 bg-white overflow-visible">
      <div className="container mx-auto px-4 sm:px-0 lg:px-8 lg:pb-36 lg:mx-48">
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between sm:min-h-[240px] lg:min-h-[350px] sm:mt-">
          {/* Text Content - Second on mobile, First on desktop */}
          <div className="relative z-10 text-center lg:text-right md:max-w-[50%] lg:max-w-[50%] mb-12 lg:mb-0 order-2 lg:order-1">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[32px] font-semibold leading-tight mb-4 sm:mb-6 text-gray-900">
              Gerenciar<br/>dinheiro não é<br/>apenas sobre<br/>dashboards.
            </h2>
            <p className="text-base lg:text-[18px] text-gray-600 leading-relaxed">
              É sobre contexto, conversa e comportamento.
            </p>
          </div>

          {/* Product Image - First on mobile, Second on desktop */}
          <div className="relative lg:absolute lg:-right-8 sm:-right-8 lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
            <img 
              src="/product_1.png" 
              alt="Banzai App Interface"
              className="w-full min-w-[720px] h-auto lg:max-w-none lg:w-[1130px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

