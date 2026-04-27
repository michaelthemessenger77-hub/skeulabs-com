import type { Metadata } from "next"
import { SeoVerticalPage } from "@/components/seo-vertical-page"

export const metadata: Metadata = {
  title: "AI Receptionist for Plumbers Phoenix | 24/7 Plumbing Call Answering",
  description:
    "Julia answers plumbing calls 24/7 in Phoenix. Burst pipes, slab leaks, water heater failures — never miss an emergency call or new customer lead.",
  alternates: {
    canonical: "https://skeulabs.com/ai-receptionist-for-plumbers-phoenix",
  },
}

export default function PlumbersPhoenixPage() {
  return (
    <SeoVerticalPage
      industry="Plumbing Companies"
      city="Phoenix"
      pain="Burst pipes don't wait for business hours. Neither does Julia. When a homeowner's water heater fails at midnight or a slab leak floods a kitchen, the first plumber to answer gets the job."
      description="Phoenix plumbing companies deal with unique challenges — hard water damage, aging copper pipes, and slab leaks from expansive clay soil. Julia understands the urgency of every call, qualifies the issue (emergency leak, drain cleaning, repiping, water heater), captures the address, and dispatches your on-call plumber instantly."
      features={[
        "Answers emergency leak and flood calls 24/7",
        "Qualifies job type: repair, drain, repiping, water heater",
        "Captures property address and problem details for dispatch",
        "Routes urgent calls to your on-call plumber immediately",
        "Books routine service appointments automatically",
        "Logs every call with full transcript and recording",
        "Handles after-hours and weekend call volume",
        "Speaks naturally — callers think they're talking to your office",
      ]}
      relatedVerticals={[
        {
          name: "AI Receptionist for HVAC",
          href: "/ai-receptionist-for-hvac-phoenix",
        },
        {
          name: "AI Receptionist for Electricians",
          href: "/ai-receptionist-for-electricians-phoenix",
        },
      ]}
    />
  )
}
