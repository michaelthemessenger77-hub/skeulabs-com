import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonial } from "@/components/testimonial"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <HowItWorks />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  )
}
