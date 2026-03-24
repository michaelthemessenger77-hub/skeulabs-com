"use client"

import { useState } from "react"
import { Check, Sparkles, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedSection } from "@/components/animated-section"

type CardId = "website" | "julia" | "full" | null

export function Pricing() {
  const [expandedCard, setExpandedCard] = useState<CardId>(null)

  const toggleCard = (cardId: CardId) => {
    setExpandedCard(prev => prev === cardId ? null : cardId)
  }

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.08)_0%,_transparent_60%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">Pricing</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            No hidden fees. No long-term contracts. Just results.
          </p>
        </AnimatedSection>

        {/* Pricing Cards — uniform top margin, Julia card uses padding-top internally */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3 items-start">

          {/* Card 1 — Website */}
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="glass-card rounded-3xl overflow-hidden">
              <button
                onClick={() => toggleCard("website")}
                className="w-full p-8 text-left transition-colors hover:bg-white/5"
              >
                <h3 className="text-xl font-bold text-foreground">Website</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">Starting at $499</span>
                  <span className="ml-2 text-muted-foreground">one-time</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Professional landing page built for your business in 48 hours.</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#D4AF37]">
                  See plans
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", expandedCard === "website" && "rotate-180")} />
                </div>
              </button>
              <div className={cn("grid transition-all duration-500 ease-in-out", expandedCard === "website" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 p-8">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h4 className="font-bold text-foreground">Website Only</h4>
                        <div className="mt-3">
                          <span className="text-2xl font-bold text-foreground">$499</span>
                          <span className="ml-1 text-sm text-muted-foreground">one-time</span>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {["Landing page","Mobile-optimized","SEO-ready","Deployed in 48h"].map(f => (
                            <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-[#D4AF37]" />{f}
                            </li>
                          ))}
                        </ul>
                        <a href="https://buy.stripe.com/00w28t1M33uD5FR5Ij2sM00" target="_blank" rel="noopener noreferrer"
                          className="mt-6 w-full h-10 font-semibold inline-flex items-center justify-center rounded-md text-sm transition-colors border border-[#D4AF37]/30 text-foreground hover:bg-[#D4AF37]/10">
                          Get My Website
                        </a>
                      </div>
                      <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6">
                        <h4 className="font-bold text-foreground">Website + Support</h4>
                        <div className="mt-3">
                          <span className="text-2xl font-bold text-foreground">$499</span>
                          <span className="text-lg text-muted-foreground"> + $99</span>
                          <span className="text-sm text-muted-foreground">/mo</span>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {["Everything above","Monthly updates","Hosting included","Uptime monitoring"].map(f => (
                            <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-[#D4AF37]" />{f}
                            </li>
                          ))}
                        </ul>
                        <a href="https://buy.stripe.com/5kQdRbbmD7KTfgr7Qr2sM01" target="_blank" rel="noopener noreferrer"
                          className="mt-6 w-full h-10 font-semibold inline-flex items-center justify-center rounded-md text-sm transition-colors bg-[#D4AF37] text-[#050816] hover:bg-[#D4AF37]/90">
                          Get Website + Support
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 — Julia (Most Popular) — badge overlaps top edge 50%, card pulled up to align with siblings */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="relative -mt-4 pt-4">
              <div className="glass-card rounded-3xl overflow-visible border border-[#D4AF37]/40 glow-gold relative">
                {/* Badge — sits outside overflow, straddles the top edge 50/50 */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="shimmer inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-[#050816] whitespace-nowrap">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
                <button
                  onClick={() => toggleCard("julia")}
                  className="w-full p-8 pt-10 text-left transition-colors hover:bg-white/5 rounded-3xl overflow-hidden"
                >
                  <h3 className="text-xl font-bold text-foreground">Julia AI Receptionist</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">Starting at $299</span>
                    <span className="ml-1 text-muted-foreground">/mo</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground/70">+ $750 one-time setup</p>
                  <p className="mt-3 text-sm text-muted-foreground">Julia answers every call 24/7. Never miss a lead again.</p>
                  <p className="mt-2 text-sm text-[#D4AF37]/80 italic">Property management? Ask about our per-property pricing.</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#D4AF37]">
                    See plans
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", expandedCard === "julia" && "rotate-180")} />
                  </div>
                </button>
                <div className={cn("grid transition-all duration-500 ease-in-out", expandedCard === "julia" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 p-8">
                      <div className="mb-6 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-center">
                        <span className="text-sm text-muted-foreground">$750 one-time setup for all plans</span>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                          <h4 className="font-bold text-foreground">Starter</h4>
                          <div className="mt-3">
                            <span className="text-2xl font-bold text-foreground">$299</span>
                            <span className="text-sm text-muted-foreground">/mo</span>
                          </div>
                          <ul className="mt-4 space-y-2">
                            {["500 minutes included","$0.12/min overage"].map(f => (
                              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-[#D4AF37]" />{f}
                              </li>
                            ))}
                          </ul>
                          <a href="https://buy.stripe.com/dRmfZj2Q7aX51pB3Ab2sM02" target="_blank" rel="noopener noreferrer"
                            className="mt-6 w-full h-10 font-semibold inline-flex items-center justify-center rounded-md text-sm transition-colors border border-[#D4AF37]/30 text-foreground hover:bg-[#D4AF37]/10">
                            Get Julia Starter
                          </a>
                        </div>
                        <div className="relative rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6">
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-[#D4AF37] text-[#050816]">Recommended</span>
                          <h4 className="font-bold text-foreground mt-2">Growth</h4>
                          <div className="mt-3">
                            <span className="text-2xl font-bold text-foreground">$599</span>
                            <span className="text-sm text-muted-foreground">/mo</span>
                          </div>
                          <ul className="mt-4 space-y-2">
                            {["1,500 minutes included","$0.08/min overage"].map(f => (
                              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-[#D4AF37]" />{f}
                              </li>
                            ))}
                          </ul>
                          <a href="https://buy.stripe.com/7sYcN7eyP1mv3xJ2w72sM03" target="_blank" rel="noopener noreferrer"
                            className="mt-6 w-full h-10 font-semibold inline-flex items-center justify-center rounded-md text-sm transition-colors bg-[#D4AF37] text-[#050816] hover:bg-[#D4AF37]/90">
                            Get Julia Growth
                          </a>
                        </div>
                      </div>
                      <p className="mt-6 text-center text-xs text-muted-foreground/70">
                        All plans include: 24/7 answering, lead capture, emergency routing, call transcripts, client dashboard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3 — Full Package */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="glass-card rounded-3xl overflow-hidden">
              <button
                onClick={() => toggleCard("full")}
                className="w-full p-8 text-left transition-colors hover:bg-white/5"
              >
                <h3 className="text-xl font-bold text-foreground">Full Package</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">$1,249</span>
                  <span className="ml-2 text-muted-foreground">setup + $398/mo</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Your website and Julia working together. The complete system.</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#D4AF37]">
                  See plans
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", expandedCard === "full" && "rotate-180")} />
                </div>
              </button>
              <div className={cn("grid transition-all duration-500 ease-in-out", expandedCard === "full" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 p-8">
                    <div className="mb-6 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-center">
                      <p className="text-sm text-muted-foreground">$499 site + $750 Julia setup</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">Then $99/mo support + your Julia plan</p>
                    </div>
                    <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6">
                      <h4 className="font-bold text-foreground text-center">Everything Included</h4>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">Website</p>
                          <ul className="space-y-2">
                            {["Professional landing page","Monthly updates & hosting"].map(f => (
                              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-[#D4AF37]" />{f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">Julia AI</p>
                          <ul className="space-y-2">
                            {["24/7 AI receptionist","Full analytics dashboard"].map(f => (
                              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-[#D4AF37]" />{f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <a href="https://buy.stripe.com/dRmfZj2Q7aX51pB3Ab2sM02" target="_blank" rel="noopener noreferrer"
                        className="mt-6 w-full h-10 font-semibold inline-flex items-center justify-center rounded-md text-sm transition-colors bg-[#D4AF37] text-[#050816] hover:bg-[#D4AF37]/90">
                        Get the Full Package
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Add-Ons Row */}
        <AnimatedSection animation="fade-up" delay={450} className="mt-12">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/50">Coming Soon</span>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Review Generation Module","Social Media Module","More coming soon..."].map(label => (
                <span key={label} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground/60">{label}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
