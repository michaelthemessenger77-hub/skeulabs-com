"use client"

import { Button } from "@/components/ui/button"
import { Phone, Sparkles } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/[0.03] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_0%,_transparent_60%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection animation="scale">
            <div className="glass-card rounded-3xl p-10 md:p-16 text-center glow-pulse">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full shimmer px-5 py-2">
                <Sparkles className="h-4 w-4 text-[#050816]" />
                <span className="text-sm font-semibold text-[#050816]">
                  Try Julia Now
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Ready to Stop{" "}
                <span className="gradient-text">Missing Calls</span>?
              </h2>

              {/* Subheadline */}
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground leading-relaxed">
                Call the line and talk to Julia yourself. See how she handles inquiries, captures leads, and keeps your business running 24/7.
              </p>

              {/* CTA Button */}
              <div className="mt-12">
                <Button
                  size="lg"
                  className="btn-animated h-16 px-10 text-lg bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050816] font-semibold glow-gold"
                  asChild
                >
                  <a href="tel:+16025330745">
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now: (602) 533-0745
                  </a>
                </Button>
              </div>

              {/* Additional contact */}
              <p className="mt-8 text-muted-foreground">
                Or email us at{" "}
                <a
                  href="mailto:Support@skeulabs.com"
                  className="font-semibold text-[#D4AF37] hover:underline transition-colors"
                >
                  Support@skeulabs.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
