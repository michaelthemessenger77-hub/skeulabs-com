"use client"

import { Globe, Phone, Wrench } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "We build your site in 48 hours",
    description:
      "Share your business details and we'll deliver a professional, mobile-optimized website ready to launch.",
  },
  {
    number: "02",
    icon: Phone,
    title: "Julia starts answering your calls",
    description:
      "Our AI receptionist handles inquiries, captures leads, and routes urgent calls — around the clock.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "You focus on the job",
    description:
      "Spend your time on what you do best while we make sure you never miss another customer.",
  },
]

export function HowItWorks() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.02] to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              How It Works
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Get Started in{" "}
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            From first contact to fully operational — we make it easy.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} animation="fade-up" delay={index * 150}>
              <div className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-[calc(50%+4rem)] hidden h-px w-[calc(100%-8rem)] md:block">
                    <div className="h-full w-full bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent" />
                  </div>
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step Icon Container */}
                  <div className="relative animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <div className="glass-card flex h-24 w-24 items-center justify-center rounded-3xl border border-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37]/50 hover:glow-gold-subtle">
                      <step.icon className="h-10 w-10 text-[#D4AF37]" />
                    </div>
                    <span className="shimmer absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-[#050816]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
