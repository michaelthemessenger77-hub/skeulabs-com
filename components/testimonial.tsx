"use client"

import { AnimatedSection } from "@/components/animated-section"

export function Testimonial() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.05)_0%,_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="scale">
            <div className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden text-center">
              {/* Section tag */}
              <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Testimonials
                </span>
              </div>

              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                What Our Clients Say
              </h2>

              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
                We&apos;re just getting started — and our first clients are already seeing results.
                <br />
                <span className="text-[#D4AF37] font-semibold">Real testimonials coming soon.</span>
              </p>

              <p className="mt-8 text-sm text-muted-foreground/60">
                Want to be featured here?{" "}
                <a href="mailto:support@skeulabs.com" className="text-[#D4AF37] hover:underline">
                  Reach out and let&apos;s get started.
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
