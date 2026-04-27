"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Phone, Globe, Zap } from "lucide-react"
import { Suspense } from "react"

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$149",
    period: "/mo",
    description: "For solo operators who need a professional phone presence.",
    features: [
      "AI receptionist — answers calls 24/7",
      "Up to 100 calls per month",
      "Lead capture & email notifications",
      "Basic call routing",
      "Call transcripts & recordings",
    ],
    cta: "Start with Starter",
    popular: false,
  },
  {
    id: "julia-growth",
    name: "Julia Growth",
    price: "$299",
    period: "/mo",
    description:
      "For growing businesses that need full call handling and scheduling.",
    features: [
      "Everything in Starter, plus:",
      "Unlimited calls",
      "Appointment scheduling integration",
      "Emergency call routing & dispatch",
      "Custom call scripts for your business",
      "SMS follow-ups to callers",
      "Weekly performance reports",
    ],
    cta: "Start with Growth",
    popular: true,
  },
  {
    id: "julia-enterprise",
    name: "Julia Enterprise",
    price: "Custom",
    period: "",
    description:
      "For multi-location businesses and property management companies.",
    features: [
      "Everything in Growth, plus:",
      "Multi-location support",
      "Custom integrations (CRM, dispatch, ticketing)",
      "Dedicated account manager",
      "SLA guarantees",
      "Advanced analytics dashboard",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

function GetStartedContent() {
  const searchParams = useSearchParams()
  const selectedPlan = searchParams.get("plan")

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
              href="/#services"
            >
              Services
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors"
              href="/#pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors"
              href="/ai-receptionist-phoenix"
            >
              AI Receptionist
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 animated-gradient"></div>
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(212,175,55,0.1)_0%,_transparent_50%)]"></div>
        <div className="relative mx-auto max-w-5xl px-6">
          {/* Title */}
          <div
            className="animate-fade-in-up text-center"
            style={{ transitionDelay: "100ms" }}
          >
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.1]">
              Get Started with{" "}
              <span className="gradient-text">Skeu Labs</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Choose your plan and have Julia answering your phones tonight. No
              long-term contracts. Cancel anytime.
            </p>
          </div>

          {/* How it works */}
          <div
            className="animate-fade-in-up mt-16"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Phone
                    className="h-6 w-6 text-[#D4AF37]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-bold text-foreground">
                  1. Book a Demo
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  30-minute call to understand your business and call flow.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Zap
                    className="h-6 w-6 text-[#D4AF37]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-bold text-foreground">
                  2. We Build Julia
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Custom-trained on your business, services, and call scripts.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Globe
                    className="h-6 w-6 text-[#D4AF37]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-bold text-foreground">
                  3. Go Live
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Forward your calls and Julia starts answering immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Plans */}
          <div
            className="animate-fade-in-up mt-16"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`glass-card rounded-2xl p-8 border transition-all ${
                    selectedPlan === plan.id || plan.popular
                      ? "border-[#D4AF37]/40 ring-1 ring-[#D4AF37]/20"
                      : "border-transparent"
                  }`}
                >
                  {plan.popular && (
                    <div className="mb-4 inline-block rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#D4AF37]">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className="h-4 w-4 text-[#D4AF37] mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 h-12 w-full inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors ${
                      plan.popular
                        ? "bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050816]"
                        : "border border-white/20 text-foreground hover:bg-white/5"
                    }`}
                    href="https://cal.com/skeulabs-ross/30min"
                  >
                    {plan.cta}
                    <ArrowRight
                      className="ml-2 h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className="animate-fade-in-up mt-16 text-center"
            style={{ transitionDelay: "400ms" }}
          >
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-[#D4AF37]/20">
              <h2 className="text-2xl font-bold text-foreground">
                Not sure which plan is right?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Book a free 30-minute demo. We&apos;ll walk through your call
                volume and recommend the best fit.
              </p>
              <div className="mt-6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-8 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050816] font-bold inline-flex items-center justify-center rounded-md text-sm transition-colors"
                  href="https://cal.com/skeulabs-ross/30min"
                >
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div
            className="animate-fade-in-up mt-8"
            style={{ transitionDelay: "500ms" }}
          >
            <Link
              className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors"
              href="/"
            >
              &larr; Back to Skeu Labs
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"></div>}>
      <GetStartedContent />
    </Suspense>
  )
}
