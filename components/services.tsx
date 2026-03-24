"use client"

import { Globe, Phone, Star, Share2, ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    icon: Phone,
    title: "Julia — AI Receptionist",
    status: "Live",
    description:
      "24/7 call answering powered by AI. Julia answers in your brand's voice, captures leads, routes emergencies, and logs every call with a full transcript. Setup in days, not months.",
    features: ["24/7 availability", "Lead capture & qualification", "Emergency routing", "Call transcripts & recordings", "Client portal dashboard"],
    cta: "Get Julia",
    href: "#pricing",
  },
  {
    icon: Globe,
    title: "Professional Websites",
    status: "Live",
    description:
      "Mobile-first, SEO-optimized websites built for local service businesses. Fast to launch, built to rank, designed to convert visitors into calls.",
    features: ["SEO-optimized", "Click-to-call", "Google Business integration", "Sub-3s load time", "Ongoing updates"],
    cta: "See Examples",
    href: "#pricing",
  },
  {
    icon: Star,
    title: "Reviews Dashboard",
    status: "Coming Soon",
    description:
      "Automated review outreach, response management, and reputation tracking across Google, Yelp, and more. Turn satisfied customers into your best sales team.",
    features: ["Automated review requests", "Response management", "Multi-platform tracking", "Reputation analytics"],
    cta: "Join Waitlist",
    href: "#contact",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    status: "Coming Soon",
    description:
      "From basic monitoring to a full content pipeline — we handle your social presence so you can handle your business. Powered by n8n automation.",
    features: ["Content scheduling", "Brand monitoring", "Engagement tracking", "Automated pipelines"],
    cta: "Join Waitlist",
    href: "#contact",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Services
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="gradient-text">Capture More Leads</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            A professional online presence and around-the-clock call handling — built for local service businesses.
          </p>
        </AnimatedSection>

        {/* Service Cards - 2x2 Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation={index % 2 === 0 ? "fade-left" : "fade-right"}
              delay={index * 100}
            >
              <div className="group relative pricing-card glass-card rounded-3xl p-8 md:p-10 h-full">
                {/* Glow effect on hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="pricing-card-content relative flex flex-col h-full">
                  {/* Header with Icon and Status */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                      <service.icon className="h-7 w-7 text-[#D4AF37]" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      service.status === "Live" 
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                        : "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30"
                    }`}>
                      {service.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-8">
                    <a 
                      href={service.href} 
                      className="flex items-center gap-2 text-sm font-semibold text-[#D4AF37] transition-colors hover:text-[#D4AF37]/80"
                    >
                      {service.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
