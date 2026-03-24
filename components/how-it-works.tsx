"use client"

import { FileText, PhoneForwarded, LayoutDashboard } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Tell Us About Your Business",
    body: "You fill out a short intake form — your hours, services, how you want calls handled, emergency contacts, FAQs. Everything Julia needs to sound like she actually works for you. Most clients are done in under 20 minutes.",
  },
  {
    number: "02",
    icon: PhoneForwarded,
    title: "Forward Your Calls, Your Way",
    body: "We give you a dedicated number. Forward your after-hours line, your main line, or set a schedule — Julia only picks up exactly when you want her to. Your calls, your rules. No complicated phone system required.",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Watch It Work",
    body: "You get a branded client dashboard to monitor every call, review transcripts, track leads, and adjust settings anytime. Julia handles the phones. You run the business.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              How It Works
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Up and Running in{" "}
            <span className="gradient-text">Under 48 Hours</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            No IT team. No long setup calls. We handle everything — you just answer fewer phones.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="mt-20 relative">
          {/* Connecting line — desktop only */}
          <div className="absolute top-12 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] hidden h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} animation="fade-up" delay={i * 150}>
                <div className="relative flex flex-col items-center text-center lg:items-center">
                  {/* Icon circle */}
                  <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full glass-card border border-[#D4AF37]/30 glow-gold">
                    <step.icon className="h-9 w-9 text-[#D4AF37]" />
                    {/* Step number — top right */}
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-black text-[#050816]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA nudge */}
        <AnimatedSection animation="fade-up" delay={500} className="mt-16 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:underline underline-offset-4"
          >
            See pricing and get started →
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
