import { HeroSection } from "@/components/hero-section"
import { StepsSection } from "@/components/steps-section"
import { AppPreviewSection } from "@/components/app-preview-section"
import { BenefitCards } from "@/components/benefit-cards"
import { HighlightsSection } from "@/components/highlights-section"
import { SecuritySection } from "@/components/security-section"
import { MetricsStrip } from "@/components/metrics-strip"
import { FaqPreview } from "@/components/faq-preview"
import { FinalCTASection } from "@/components/final-cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Banzai - Seu dinheiro, explicado",
  description:
    "Conecte via Open Finance e entenda o que está acontecendo com seu dinheiro. A Banzai fornece evidências claras de cobranças recorrentes, custos e sinais de atenção.",
  openGraph: {
    title: "Banzai - Seu dinheiro, explicado",
    description:
      "Conecte via Open Finance e entenda o que está acontecendo com seu dinheiro. A Banzai fornece evidências claras de cobranças recorrentes, custos e sinais de atenção.",
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
      <SecuritySection />
      <MetricsStrip />
      <FaqPreview />
      <FinalCTASection />
    </div>
  )
}
