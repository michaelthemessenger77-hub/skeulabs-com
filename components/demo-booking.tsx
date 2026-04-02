"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const businessTypes = [
  "Roofing",
  "HVAC / Heating & Cooling",
  "Plumbing",
  "Electrical",
  "Pool Service / Repair",
  "Landscaping",
  "Pest Control",
  "General Contractor",
  "Other",
]

export function DemoBooking() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/demo-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, businessName, businessType }),
      })

      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="demo" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.05)_0%,_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Experience Julia Before You Commit
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Two ways to see what&apos;s possible.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 mx-auto max-w-5xl">
          {/* Card A — Primary */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden h-full border border-[#D4AF37]/20">
              <h3 className="text-xl font-bold text-foreground md:text-2xl">
                Hear Julia Answer Your Business
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Enter your info below. We&apos;ll call you within 60 seconds — Julia will answer as your receptionist, personalized to your business. No sales pitch. Just the product.
              </p>

              {status === "success" ? (
                <div className="mt-8 rounded-2xl glass-card p-8 text-center">
                  <p className="text-lg font-semibold text-[#D4AF37]">
                    Julia is calling! Pick up from (480) 776-6345.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="First Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 rounded-lg bg-white/5 border-white/10"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-11 rounded-lg bg-white/5 border-white/10"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Business Name"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="h-11 rounded-lg bg-white/5 border-white/10"
                    />
                  </div>
                  <div>
                    <Select required value={businessType} onValueChange={setBusinessType}>
                      <SelectTrigger className="h-11 w-full rounded-lg bg-white/5 border-white/10">
                        <SelectValue placeholder="Business Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading" || !businessType}
                    className="w-full h-12 rounded-lg bg-[#D4AF37] text-black font-semibold hover:bg-[#D4AF37]/90 text-base"
                  >
                    {status === "loading" ? "Calling you now..." : "Call Me Now \u2192"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We&apos;ll call you from (480) 776-6345. Pick up — it&apos;s Julia.
                  </p>
                  {status === "error" && (
                    <p className="text-sm text-red-400 text-center">
                      Something went wrong — call us directly at (602) 580-0307
                    </p>
                  )}
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Card B — Secondary */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden h-full flex flex-col">
              <h3 className="text-xl font-bold text-foreground md:text-2xl">
                Prefer to Talk to a Human First?
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Want someone from our team to walk you through it? Reach out directly and we&apos;ll set up a time that works for you.
              </p>
              <div className="mt-8 flex-1 flex items-end">
                <a
                  href="mailto:ross@skeulabs.com?subject=Demo Request"
                  className="w-full h-12 rounded-lg border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-base font-semibold inline-flex items-center justify-center transition-colors"
                >
                  Get in Touch &rarr;
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
