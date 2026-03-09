import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { SecuritySection } from "@/components/security-section"
import { AiSkillsSection } from "@/components/ai-skills-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { HomeFaqSection } from "@/components/home-faq-section"
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
      <FeaturesSection />
      <SecuritySection />
      <AiSkillsSection />
      <SocialProofSection />
      <HomeFaqSection />
      <FinalCTASection />
    </div>
  )
}
