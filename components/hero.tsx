"use client"

import { ArrowRight, Zap } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,175,55,0.08)_0%,_transparent_40%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">

          {/* Now Live Badge */}
          <AnimatedSection animation="scale" delay={0}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full glass-card px-5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              <span className="text-sm font-medium text-foreground/80">
                Now Live — AI Receptionist for Local Service Businesses
              </span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl leading-[1.05]">
              Your Phones Answered.<br />
              Your Leads Captured.<br />
              <span className="gradient-text">Every Call, Every Time.</span>
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              We build the digital infrastructure local service businesses need to compete in 2026 — starting with an AI receptionist that never sleeps, never misses a call, and learns your business.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="btn-animated w-full sm:w-auto h-14 px-8 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050816] font-bold glow-gold-subtle inline-flex items-center justify-center rounded-md text-sm"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="btn-animated w-full sm:w-auto h-14 px-8 border border-white/20 bg-transparent text-foreground hover:bg-white/5 inline-flex items-center justify-center rounded-md text-sm font-semibold"
              >
                Hear Julia Answer a Call
              </a>
            </div>
          </AnimatedSection>

          {/* Serving line */}
          <AnimatedSection animation="fade-up" delay={380}>
            <p className="mt-10 text-sm text-muted-foreground/60">
              Serving Phoenix, AZ — expanding nationwide
            </p>
          </AnimatedSection>

          {/* Industry tags */}
          <AnimatedSection animation="fade-up" delay={420}>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {["Roofing", "HVAC", "Plumbing", "Electrical", "Pools", "Contractors"].map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {industry}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Bar */}
        <AnimatedSection animation="fade-up" delay={500} className="mt-20 md:mt-28">
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
      </div>
    </section>
  )
}
