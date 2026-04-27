import type { Metadata } from "next"
import { SeoVerticalPage } from "@/components/seo-vertical-page"

export const metadata: Metadata = {
  title:
    "AI Receptionist for Dentists Phoenix | 24/7 Dental Call Answering",
  description:
    "Julia answers dental office calls 24/7 in Phoenix. Patient scheduling, insurance questions, emergency calls — never miss a new patient or appointment request.",
  alternates: {
    canonical: "https://skeulabs.com/ai-receptionist-for-dentists-phoenix",
  },
}

export default function DentistsPhoenixPage() {
  return (
    <SeoVerticalPage
      industry="Dental Offices"
      city="Phoenix"
      pain="Patient scheduling, insurance questions, emergency calls — handled 24/7. When a patient has a dental emergency at night or a new patient calls during lunch, Julia makes sure they get through."
      description="Phoenix dental offices juggle a constant stream of calls — appointment scheduling, insurance verification questions, emergency toothaches, and new patient inquiries. Julia handles all of it. She books appointments, answers common insurance questions, triages dental emergencies, and captures new patient information — so your front desk can focus on the patients in the chair."
      features={[
        "Books and confirms patient appointments 24/7",
        "Answers common insurance and payment questions",
        "Triages dental emergencies and routes to the on-call dentist",
        "Captures new patient information and insurance details",
        "Sends appointment reminders and handles reschedules",
        "Logs every call with full transcript and recording",
        "Handles lunch-hour and after-hours call overflow",
        "Speaks naturally — patients think they're talking to your front desk",
      ]}
      relatedVerticals={[
        {
          name: "AI Receptionist for Property Management",
          href: "/ai-receptionist-for-property-management-phoenix",
        },
        {
          name: "AI Receptionist for HVAC",
          href: "/ai-receptionist-for-hvac-phoenix",
        },
      ]}
    />
  )
}
