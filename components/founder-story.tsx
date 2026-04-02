"use client"

import { AnimatedSection } from "@/components/animated-section"

export function FounderStory() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.05)_0%,_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fade-up">
            <div className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden">
              {/* Section tag */}
              <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Why We Built This
                </span>
              </div>

              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Business ownership is a different animal than it used to be.
              </h2>

              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                You didn&apos;t start a roofing company to manage a social media calendar. You didn&apos;t launch an HVAC business to juggle content strategy and Google rankings. You started it because you&apos;re good at the work — and that work deserves to succeed.
              </p>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                But running a service business in 2026 means operating in a world with a 30-second attention span, where visibility requires constant output and a single unanswered call can send a paying customer straight to a competitor. The overhead of just being findable and reachable has quietly become a second full-time job.
              </p>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                AI is starting to change that — not by replacing what you do, but by handling what you shouldn&apos;t have to. We&apos;re building the tools that let owners get back to the work they signed up for.
              </p>

              <p className="mt-8 text-xl font-semibold text-[#D4AF37]">
                Starting with the phone.
              </p>

              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Your voicemail exists because you needed a way to communicate with customers after hours. That was the need. Julia is the next evolution of it — a voice that actually talks to your callers, answers their questions, captures their information, and never lets a job walk away to voicemail. The technology will only get better and cheaper. We&apos;re building for where this is going.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
