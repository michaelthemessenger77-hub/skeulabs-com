import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, phone, businessName, businessType } = await request.json()

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      )
    }

    const cleanPhone = phone.replace(/\D/g, "").slice(-10)

    const response = await fetch("https://api.retell.ai/v2/create-phone-call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
      },
      body: JSON.stringify({
        from_number: "+14807766345",
        to_number: `+1${cleanPhone}`,
        override_agent_id: process.env.RETELL_DEMO_AGENT_ID,
        retell_llm_dynamic_variables: {
          customer_name: name,
          business_name: businessName,
          business_type: businessType,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Retell API error:", errorText)
      return NextResponse.json(
        { error: "Failed to initiate call" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Demo call error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
