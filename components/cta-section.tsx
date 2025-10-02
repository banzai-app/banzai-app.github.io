import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-balance mb-6 sm:mb-8">
            Chegou a hora de sair da superfície das suas finanças?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://form.typeform.com/to/L6o7dkN9" className="inline-block">
              <Button size="lg" className="rounded-full text-base px-8">
                Entre na fila de espera
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
