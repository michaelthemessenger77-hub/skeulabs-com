import type { Metadata } from "next"
import { SeoVerticalPage } from "@/components/seo-vertical-page"

export const metadata: Metadata = {
  title:
    "AI Receptionist for Pool Companies Phoenix | 24/7 Pool Service Call Answering",
  description:
    "Julia answers pool and spa company calls 24/7 in Phoenix. Equipment repairs, weekly service, new pool builds — capture every lead year-round.",
  alternates: {
    canonical:
      "https://skeulabs.com/ai-receptionist-for-pool-companies-phoenix",
  },
}

export default function PoolCompaniesPhoenixPage() {
  return (
    <SeoVerticalPage
      industry="Pool & Spa Companies"
      city="Phoenix"
      pain="Pool season is year-round in Phoenix. Your phones should be answered year-round too. When a pool pump fails on a Saturday or a homeowner wants a quote on a new build, Julia picks up instantly."
      description="Phoenix pool and spa companies operate year-round in one of the country's biggest pool markets. Julia handles the constant flow of calls — equipment repair requests, weekly service signups, new pool build inquiries, and green pool emergencies. She qualifies each call, captures property details, and books your crew's next appointment."
      features={[
        "Answers pool equipment emergency calls 24/7",
        "Qualifies call type: repair, weekly service, new build, green pool",
        "Captures property address and pool/spa details",
        "Routes urgent equipment failures to your on-call tech",
        "Books weekly service and maintenance appointments",
        "Logs every call with full transcript and recording",
        "Handles spring and summer call volume surges",
        "Speaks naturally — callers think they're talking to your office",
      ]}
      relatedVerticals={[
        {
          name: "AI Receptionist for HVAC",
          href: "/ai-receptionist-for-hvac-phoenix",
        },
        {
          name: "AI Receptionist for Property Management",
          href: "/ai-receptionist-for-property-management-phoenix",
        },
      ]}
    />
  )
}
