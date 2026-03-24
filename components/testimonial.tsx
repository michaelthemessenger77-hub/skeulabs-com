"use client"

import { Star, Quote } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Testimonial() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.05)_0%,_transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="scale">
            <div className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden transition-all duration-300 hover:glow-gold-subtle">
              {/* Decorative quote */}
              <Quote className="absolute top-8 right-8 h-24 w-24 text-[#D4AF37]/10 rotate-180" />
              
              {/* Stars */}
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-[#D4AF37] text-[#D4AF37]"
                    style={{ 
                      animation: `pulse-glow 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8 relative z-10">
                <p className="text-xl text-foreground md:text-2xl lg:text-3xl leading-relaxed font-medium">
                  &ldquo;Skeu Labs built our website in two days and Julia handles all our after-hours calls. We&apos;ve booked{" "}
                  <span className="gradient-text">30% more jobs</span> since switching. Best investment we&apos;ve made for our HVAC business.&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-10 flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/60 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#050816]">MR</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Mike Rodriguez</p>
                  <p className="text-muted-foreground">
                    Owner, Desert Comfort HVAC — Phoenix, AZ
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
