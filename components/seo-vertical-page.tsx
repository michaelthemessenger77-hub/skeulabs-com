"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight, Phone, Clock, Shield } from "lucide-react"

interface RelatedVertical {
  name: string
  href: string
}

interface SeoVerticalPageProps {
  industry: string
  city: string
  pain: string
  description: string
  features: string[]
  relatedVerticals: RelatedVertical[]
}

export function SeoVerticalPage({
  industry,
  city,
  pain,
  description,
  features,
  relatedVerticals,
}: SeoVerticalPageProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/90 backdrop-blur-xl border-b border-[#D4AF37]/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              alt="Skeu Labs"
              width={180}
              height={48}
              className="h-10 w-auto"
              style={{ color: "transparent" }}
              src="/skeu-labs-logo.png"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors"
              href="/ai-receptionist-phoenix"
            >
              AI Receptionist Phoenix
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors"
              href="/#pricing"
            >
              Pricing
            </Link>
            <Link
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050816] font-semibold px-4 py-2 rounded-md text-sm transition-colors"
              href="/get-started"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 animated-gradient"></div>
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(212,175,55,0.1)_0%,_transparent_50%)]"></div>
        <div className="relative mx-auto max-w-4xl px-6">
          {/* Breadcrumbs */}
          <div className="animate-fade-in-up" style={{ transitionDelay: "0ms" }}>
            <div className="mb-8 text-sm text-muted-foreground">
              <Link className="hover:text-[#D4AF37] transition-colors" href="/">
                Home
              </Link>{" "}
              /{" "}
              <Link
                className="hover:text-[#D4AF37] transition-colors"
                href="/ai-receptionist-phoenix"
              >
                AI Receptionist Phoenix
              </Link>{" "}
              / <span className="text-foreground">{industry}</span>
            </div>
          </div>

          {/* Title */}
          <div className="animate-fade-in-up" style={{ transitionDelay: "100ms" }}>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.1]">
              AI Receptionist for{" "}
              <span className="gradient-text">{industry}</span> in {city}
            </h1>
          </div>

          {/* Pain point */}
          <div className="animate-fade-in-up" style={{ transitionDelay: "200ms" }}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {pain}
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up" style={{ transitionDelay: "300ms" }}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050816] font-bold inline-flex items-center justify-center rounded-md text-sm transition-colors"
                href="https://cal.com/skeulabs-ross/30min"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                className="h-14 px-8 border border-white/20 text-foreground hover:bg-white/5 inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors"
                href="/get-started?plan=julia-growth"
              >
                Get Julia for Your Business
              </Link>
            </div>
          </div>

          {/* Why section */}
          <div className="animate-fade-in-up mt-20" style={{ transitionDelay: "400ms" }}>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-foreground">
                Why {industry} in {city} Choose Julia
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {description}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      className="h-5 w-5 text-[#D4AF37] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up mt-12" style={{ transitionDelay: "500ms" }}>
            <div className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <Phone className="h-6 w-6 text-[#D4AF37] mx-auto" aria-hidden="true" />
                  <div className="mt-2 text-2xl font-bold text-foreground">24/7</div>
                  <div className="mt-1 text-xs text-muted-foreground">Call Answering</div>
                </div>
                <div>
                  <Clock className="h-6 w-6 text-[#D4AF37] mx-auto" aria-hidden="true" />
                  <div className="mt-2 text-2xl font-bold text-foreground">&lt;1s</div>
                  <div className="mt-1 text-xs text-muted-foreground">Answer Time</div>
                </div>
                <div>
                  <Shield className="h-6 w-6 text-[#D4AF37] mx-auto" aria-hidden="true" />
                  <div className="mt-2 text-2xl font-bold text-foreground">100%</div>
                  <div className="mt-1 text-xs text-muted-foreground">Calls Captured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="animate-fade-in-up mt-12" style={{ transitionDelay: "600ms" }}>
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-[#D4AF37]/20 text-center">
              <h2 className="text-2xl font-bold text-foreground">
                Ready to Stop Missing Calls?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Julia starts at $299/mo. Setup takes days, not months. Your phones are
                answered tonight.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  className="h-12 px-8 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050816] font-bold inline-flex items-center justify-center rounded-md text-sm transition-colors"
                  href="/get-started?plan=julia-growth"
                >
                  Get Started
                </Link>
                <Link
                  className="h-12 px-8 border border-white/20 text-foreground hover:bg-white/5 inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors"
                  href="/#pricing"
                >
                  See All Plans
                </Link>
              </div>
            </div>
          </div>

          {/* Related verticals */}
          <div className="animate-fade-in-up mt-12" style={{ transitionDelay: "700ms" }}>
            <div className="space-y-4">
              <Link
                className="block glass-card rounded-xl p-4 hover:border-[#D4AF37]/20 border border-transparent transition-colors"
                href="/ai-receptionist-phoenix"
              >
                <span className="text-sm text-[#D4AF37]">
                  &larr; AI Receptionist for All Phoenix Industries
                </span>
              </Link>
              <div className="flex flex-wrap gap-3">
                {relatedVerticals.map((v, i) => (
                  <Link
                    key={i}
                    className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors rounded-full border border-white/10 px-4 py-2"
                    href={v.href}
                  >
                    {v.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
