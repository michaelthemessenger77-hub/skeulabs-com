"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,175,55,0.08)_0%,_transparent_40%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Live Badge */}
          <AnimatedSection animation="scale" delay={0}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full glass-card px-5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4AF37]"></span>
              </span>
              <span className="text-sm font-medium text-[#D4AF37]">
                Serving Phoenix, AZ
              </span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              We Build Your Website and Answer Your Phones —{" "}
              <span className="gradient-text">So You Never Miss a Customer</span>
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              Professional websites and AI receptionists for local service businesses.{" "}
              <span className="text-[#D4AF37] font-semibold">Julia</span> picks up every call, 24/7.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="btn-animated w-full border-[#D4AF37]/30 bg-transparent text-foreground hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 sm:w-auto h-14 px-8"
              >
                See Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a
                href="#pricing"
                className="btn-animated w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050816] font-semibold sm:w-auto h-14 px-8 glow-gold-subtle inline-flex items-center justify-center rounded-md text-sm"
              >
                <Zap className="mr-2 h-4 w-4" />
                Get Started
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Bar */}
        <AnimatedSection animation="fade-up" delay={400} className="mt-20 md:mt-28">
          <div className="mx-auto max-w-4xl glass-card rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37] md:text-4xl">48h</div>
                <div className="mt-2 text-sm text-muted-foreground">Site Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground md:text-4xl">24/7</div>
                <div className="mt-2 text-sm text-muted-foreground">Call Handling</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground md:text-4xl">100%</div>
                <div className="mt-2 text-sm text-muted-foreground">Call Answer Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37] md:text-4xl">0</div>
                <div className="mt-2 text-sm text-muted-foreground">Missed Calls</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Industries Served */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {["HVAC", "Plumbing", "Electrical", "Roofing", "Restoration"].map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {industry}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
