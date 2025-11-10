import { HeroSection } from "@/components/hero-section"
import { DashboardSection } from "@/components/dashboard-section"
import { ConsultancySection } from "@/components/consultancy-section"
import { DiveCTASection } from "@/components/dive-cta-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { InsightsSection } from "@/components/insights-section"
import { VisualFeaturesSection } from "@/components/visual-features-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <main>
        <HeroSection />
        <DashboardSection />
        <ConsultancySection />
        <DiveCTASection />
        <HowItWorksSection />
        <InsightsSection />
        <VisualFeaturesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
