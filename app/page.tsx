import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { TimelineSection } from "@/components/timeline-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorks />
      <TimelineSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
