export function VisualFeaturesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#F3F3F3' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Análise Visual Completa */}
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/highlight_1.png" 
                alt="Análise visual completa"
                className="w-48 h-48 object-contain"
              />
            </div>
            
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-[24px] font-semibold mb-4 text-gray-900">
              Análise visual completa
            </h3>
            <p className="text-base lg:text-[18px] text-gray-600 leading-relaxed">
              Veja seus gastos por categoria em um visual intuitivo, sem precisar classificar nada.
            </p>
          </div>
          
          {/* Transações Classificadas */}
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/highlight_2.png" 
                alt="Transações classificadas"
                className="w-48 h-48 object-contain"
              />
            </div>
            
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-[24px] font-semibold mb-4 text-gray-900">
              Transações classificadas
            </h3>
            <p className="text-base lg:text-[18px] text-gray-600 leading-relaxed mb-6">
              Nossa inteligência artificial classifica automaticamente suas transações. Você não faz nada.
            </p>
          </div>

          
          {/* Segurança Total */}
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/highlight_3.png" 
                alt="Segurança total"
                className="w-48 h-48 object-contain"
              />
            </div>
            
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-[24px] font-semibold mb-4 text-gray-900">
              Segurança total
            </h3>
            <p className="text-base lg:text-[18px] text-gray-600 leading-relaxed">
            Seus gastos são protegidos com criptografia de ponta a ponta e Open Banking Certificado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

