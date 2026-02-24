import { HeroSection } from "@/components/hero-section"
import { StepsSection } from "@/components/steps-section"
import { AppPreviewSection } from "@/components/app-preview-section"
import { BenefitCards } from "@/components/benefit-cards"
import { HighlightsSection } from "@/components/highlights-section"
import { MetricsStrip } from "@/components/metrics-strip"
import { FaqPreview } from "@/components/faq-preview"
import { FinalCTASection } from "@/components/final-cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Banzai - Controle seus gastos por semana, sem planilha",
  description:
    "Conecte suas contas via Open Finance. A Banzai organiza suas transações e te dá clareza do que fazer nesta semana.",
  openGraph: {
    title: "Banzai - Controle seus gastos por semana, sem planilha",
    description:
      "Conecte suas contas via Open Finance. A Banzai organiza suas transações e te dá clareza do que fazer nesta semana.",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-visible">
      <HeroSection />
      <StepsSection />
      <AppPreviewSection />
      <BenefitCards />
      <HighlightsSection />
      <MetricsStrip />
      <FaqPreview />
      <FinalCTASection />
    </div>
  )
}
