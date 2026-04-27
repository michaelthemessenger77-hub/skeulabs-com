import type { Metadata } from "next"
import { SeoVerticalPage } from "@/components/seo-vertical-page"

export const metadata: Metadata = {
  title: "AI Receptionist for Roofers Phoenix | 24/7 Roofing Call Answering",
  description:
    "Julia answers roofing calls 24/7 in Phoenix. Monsoon damage, tile repairs, new roof estimates — capture every lead and handle storm season call surges.",
  alternates: {
    canonical: "https://skeulabs.com/ai-receptionist-for-roofers-phoenix",
  },
}

export default function RoofersPhoenixPage() {
  return (
    <SeoVerticalPage
      industry="Roofing Companies"
      city="Phoenix"
      pain="Monsoon season means call volume spikes. Julia scales with you. When hail hits or a tile cracks, homeowners start dialing — and the roofer who answers first books the inspection."
      description="Phoenix roofing companies face extreme seasonality. Monsoon storms drive massive call volume spikes that overwhelm office staff. Julia handles the surge — qualifying storm damage calls, scheduling inspections, capturing insurance claim details, and routing emergency tarping requests to your crew. No hold times, no missed calls, no lost revenue."
      features={[
        "Handles monsoon-season call surges without extra staff",
        "Qualifies call type: storm damage, tile repair, new roof, inspection",
        "Captures property address and damage description for estimates",
        "Routes emergency tarping and leak calls to your on-call crew",
        "Books roof inspection appointments automatically",
        "Logs every call with full transcript and recording",
        "Asks about insurance claims and captures policy details",
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
