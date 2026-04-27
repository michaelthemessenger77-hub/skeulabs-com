import type { Metadata } from "next"
import { SeoVerticalPage } from "@/components/seo-vertical-page"

export const metadata: Metadata = {
  title:
    "AI Receptionist for Electricians Phoenix | 24/7 Electrical Call Answering",
  description:
    "Julia answers electrical calls 24/7 in Phoenix. Panel upgrades, outages, new construction — qualify every lead and never miss an emergency call.",
  alternates: {
    canonical:
      "https://skeulabs.com/ai-receptionist-for-electricians-phoenix",
  },
}

export default function ElectriciansPhoenixPage() {
  return (
    <SeoVerticalPage
      industry="Electrical Companies"
      city="Phoenix"
      pain="Panel upgrades, power outages, new construction — every call to an electrician is time-sensitive. When a homeowner loses power in 115°F heat, they're calling the first electrician who picks up."
      description="Phoenix electrical companies handle everything from EV charger installs to emergency outages. Julia qualifies every inbound call — is it a panel upgrade, a tripped breaker, new construction wiring, or an emergency? She captures the details, books estimates, and routes urgent calls to your on-call electrician."
      features={[
        "Answers emergency outage calls 24/7 — no more missed after-hours leads",
        "Qualifies call type: panel upgrade, repair, new construction, EV charger",
        "Captures property address and electrical issue details",
        "Routes urgent safety calls to your on-call electrician",
        "Books estimate appointments and follow-ups automatically",
        "Logs every call with full transcript and recording",
        "Handles new construction inquiry volume during build season",
        "Speaks naturally — callers think they're talking to your office",
      ]}
      relatedVerticals={[
        {
          name: "AI Receptionist for HVAC",
          href: "/ai-receptionist-for-hvac-phoenix",
        },
        {
          name: "AI Receptionist for Plumbers",
          href: "/ai-receptionist-for-plumbers-phoenix",
        },
      ]}
    />
  )
}
