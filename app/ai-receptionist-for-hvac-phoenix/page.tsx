import type { Metadata } from "next"
import { SeoVerticalPage } from "@/components/seo-vertical-page"

export const metadata: Metadata = {
  title: "AI Receptionist for HVAC Phoenix | 24/7 HVAC Call Answering",
  description:
    "Julia answers HVAC calls 24/7 in Phoenix. Emergency AC repair, maintenance scheduling, lead capture — never miss a call during Arizona's extreme summers.",
  alternates: {
    canonical: "https://skeulabs.com/ai-receptionist-for-hvac-phoenix",
  },
}

export default function HvacPhoenixPage() {
  return (
    <SeoVerticalPage
      industry="HVAC Companies"
      city="Phoenix"
      pain="In Phoenix, a missed HVAC call during a 115°F summer day isn't just a missed lead — it's a family without air conditioning. Your competitors answer on the first ring. Can you say the same?"
      description="Phoenix HVAC companies face the most extreme seasonal call volume in the country. When temperatures hit triple digits, every call is urgent. Julia answers instantly, qualifies the issue (AC repair, new install, maintenance), captures the address, and routes emergencies to your on-call tech — all while you're on a roof replacing a unit."
      features={[
        "Answers AC emergency calls 24/7 — even at 2 AM in July",
        "Qualifies repair vs. maintenance vs. new install",
        "Captures address and unit details for dispatch",
        "Routes urgent calls to your on-call technician",
        "Books non-emergency appointments automatically",
        "Logs every call with full transcript and recording",
        "Handles seasonal volume spikes without extra staff",
        "Speaks naturally — callers think they're talking to your office",
      ]}
      relatedVerticals={[
        {
          name: "AI Receptionist for Plumbers",
          href: "/ai-receptionist-for-plumbers-phoenix",
        },
        {
          name: "AI Receptionist for Electricians",
          href: "/ai-receptionist-for-electricians-phoenix",
        },
      ]}
    />
  )
}
