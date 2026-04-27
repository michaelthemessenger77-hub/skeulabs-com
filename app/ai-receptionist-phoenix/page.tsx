import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Flame,
  Droplets,
  Zap,
  Building2,
  Phone,
  Sun,
  House,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Receptionist Phoenix | 24/7 Call Answering for Service Businesses",
  description:
    "Julia is an AI receptionist for Phoenix service businesses. 24/7 call answering for HVAC, plumbing, electrical, roofing, dental, pool, and property management companies. Never miss a lead.",
  alternates: {
    canonical: "https://skeulabs.com/ai-receptionist-phoenix",
  },
}

const verticals = [
  {
    icon: Flame,
    title: "HVAC Companies",
    description:
      "Emergency AC calls at 2 AM? Julia handles them all — dispatch, scheduling, lead capture.",
    href: "/ai-receptionist-for-hvac-phoenix",
  },
  {
    icon: Droplets,
    title: "Plumbing Companies",
    description:
      "Burst pipes don't wait for business hours. Neither does Julia.",
    href: "/ai-receptionist-for-plumbers-phoenix",
  },
  {
    icon: Zap,
    title: "Electrical Companies",
    description:
      "Panel upgrades, outages, new construction — Julia qualifies every call.",
    href: "/ai-receptionist-for-electricians-phoenix",
  },
  {
    icon: Building2,
    title: "Roofing Companies",
    description:
      "Monsoon season means call volume spikes. Julia scales with you.",
    href: "/ai-receptionist-for-roofers-phoenix",
  },
  {
    icon: Phone,
    title: "Dental Offices",
    description:
      "Patient scheduling, insurance questions, emergency calls — handled 24/7.",
    href: "/ai-receptionist-for-dentists-phoenix",
  },
  {
    icon: Sun,
    title: "Pool & Spa Companies",
    description:
      "Pool season is year-round in Phoenix. Your phones should be answered year-round too.",
    href: "/ai-receptionist-for-pool-companies-phoenix",
  },
  {
    icon: House,
    title: "Property Management",
    description:
      "Hundreds of units, thousands of calls. Julia handles tenant calls 24/7 so your team can focus on operations.",
    href: "/ai-receptionist-for-property-management-phoenix",
  },
]

export default function AIReceptionistPhoenixPage() {
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
        <div className="relative mx-auto max-w-5xl px-6">
          {/* Breadcrumbs */}
          <div className="animate-fade-in-up" style={{ transitionDelay: "0ms" }}>
            <div className="mb-8 text-sm text-muted-foreground">
              <Link className="hover:text-[#D4AF37] transition-colors" href="/">
                Home
              </Link>{" "}
              / <span className="text-foreground">AI Receptionist Phoenix</span>
            </div>
          </div>

          {/* Title */}
          <div
            className="animate-fade-in-up"
            style={{ transitionDelay: "100ms" }}
          >
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.1]">
              AI Receptionist for{" "}
              <span className="gradient-text">Phoenix Businesses</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className="animate-fade-in-up"
            style={{ transitionDelay: "200ms" }}
          >
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Phoenix service businesses lose thousands every month to missed
              calls. Julia is an AI receptionist that answers every call, 24/7 —
              capturing leads, booking appointments, and routing emergencies
              while you focus on the work.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="animate-fade-in-up"
            style={{ transitionDelay: "300ms" }}
          >
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
                href="/#pricing"
              >
                See Pricing
              </Link>
            </div>
          </div>

          {/* Industry Grid */}
          <div
            className="animate-fade-in-up mt-20"
            style={{ transitionDelay: "400ms" }}
          >
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              AI Receptionist Solutions for Phoenix Industries
            </h2>
            <p className="mt-4 text-muted-foreground">
              Julia is built for local service businesses. Choose your industry
              to see how she handles calls specific to your trade.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {verticals.map((v) => (
                <Link
                  key={v.href}
                  className="group glass-card rounded-2xl p-6 border border-transparent hover:border-[#D4AF37]/20 transition-all"
                  href={v.href}
                >
                  <v.icon
                    className="h-8 w-8 text-[#D4AF37]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-[#D4AF37] transition-colors">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm text-[#D4AF37] font-medium">
                    Learn more{" "}
                    <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Why section */}
          <div
            className="animate-fade-in-up mt-16"
            style={{ transitionDelay: "500ms" }}
          >
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-foreground">
                Why Phoenix Businesses Need an AI Receptionist
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Phoenix is one of the fastest-growing metro areas in the
                  country. More residents means more service calls — and more
                  competition for every job. The businesses that answer first,
                  win.
                </p>
                <p>
                  But hiring a full-time receptionist costs $35,000+ per year.
                  After-hours answering services charge per minute and still miss
                  context. And voicemail? 80% of callers hang up without leaving
                  one.
                </p>
                <p>
                  Julia answers in under a second, knows your business, captures
                  every detail, and costs a fraction of a human hire. She works
                  nights, weekends, holidays, and monsoon season — when your
                  phones ring the most.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className="animate-fade-in-up mt-12"
            style={{ transitionDelay: "600ms" }}
          >
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-[#D4AF37]/20 text-center">
              <h2 className="text-2xl font-bold text-foreground">
                Stop Losing Calls. Start Closing Jobs.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Julia starts at $299/mo with setup in days. Your phones are
                answered tonight.
              </p>
              <div className="mt-6">
                <Link
                  className="h-12 px-8 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050816] font-bold inline-flex items-center justify-center rounded-md text-sm transition-colors"
                  href="/get-started?plan=julia-growth"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div
            className="animate-fade-in-up mt-8"
            style={{ transitionDelay: "700ms" }}
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
