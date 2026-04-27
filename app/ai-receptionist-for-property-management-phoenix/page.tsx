import type { Metadata } from "next"
import { SeoVerticalPage } from "@/components/seo-vertical-page"

export const metadata: Metadata = {
  title:
    "AI Receptionist for Property Management Phoenix | 24/7 Tenant Call Answering",
  description:
    "Julia answers property management calls 24/7 in Phoenix. Maintenance requests, tenant inquiries, emergency calls — handle hundreds of units without extra staff.",
  alternates: {
    canonical:
      "https://skeulabs.com/ai-receptionist-for-property-management-phoenix",
  },
}

export default function PropertyManagementPhoenixPage() {
  return (
    <SeoVerticalPage
      industry="Property Management"
      city="Phoenix"
      pain="Hundreds of units, thousands of calls. Julia handles tenant calls 24/7 so your team can focus on operations. When a tenant reports a burst pipe at midnight or a prospective renter wants to schedule a tour, Julia is there."
      description="Phoenix property management companies handle a relentless volume of tenant calls — maintenance requests, lockouts, lease questions, rental inquiries, and after-hours emergencies. Julia triages every call, creates maintenance tickets, routes emergencies to your on-call team, answers common lease questions, and schedules property tours — all without adding headcount."
      features={[
        "Answers tenant maintenance requests and creates tickets 24/7",
        "Routes after-hours emergencies (floods, lockouts, AC failures) to on-call",
        "Handles prospective tenant inquiries and schedules tours",
        "Answers common lease and policy questions",
        "Captures detailed maintenance issue descriptions for your team",
        "Logs every call with full transcript and recording",
        "Scales across hundreds of units without extra staff",
        "Speaks naturally — tenants think they're talking to your office",
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
