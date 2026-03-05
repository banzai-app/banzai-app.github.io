export function AppPreviewSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-visible" aria-labelledby="app-preview-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-10 lg:gap-8 max-w-6xl mx-auto">
          <div className="text-center lg:text-left lg:max-w-[40%] order-2 lg:order-1">
            <h2
              id="app-preview-title"
              className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-semibold text-gray-900 mb-4 leading-tight"
            >
              Veja seus gastos organizados
            </h2>
            <p className="text-base lg:text-[18px] text-gray-600 leading-relaxed">
              Conecte uma conta e em minutos você tem categorias, resumo da semana e meta no lugar.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 overflow-visible min-w-0">
            <img
              src="/product_2_new.png"
              alt="Tela do app Banzai com gastos organizados"
              className="w-full h-auto lg:w-[560px] lg:max-w-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
