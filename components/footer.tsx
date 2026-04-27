import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Link href="/" className="transition-transform hover:scale-105">
            <Image
              src="/skeu-labs-logo.png"
              alt="Skeu Labs"
              width={160}
              height={44}
              className="h-10 w-auto"
            />
          </Link>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground">
            AI-powered infrastructure for local service businesses.
          </p>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
              Services
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
              Pricing
            </Link>
            <a
              href="mailto:support@skeulabs.com"
              className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors"
            >
              Contact
            </a>
            <a
              href="https://skeu-portal.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors"
            >
              Client Login
            </a>
          </div>

          {/* SEO cluster links */}
          <div className="pt-6 border-t border-[#D4AF37]/10 w-full">
            <p className="text-xs text-muted-foreground/40 uppercase tracking-wider mb-3">AI Receptionist Services in Phoenix</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link href="/ai-receptionist-phoenix" className="text-xs text-muted-foreground/60 hover:text-[#D4AF37] transition-colors">AI Receptionist Phoenix</Link>
              <Link href="/ai-receptionist-for-hvac-phoenix" className="text-xs text-muted-foreground/60 hover:text-[#D4AF37] transition-colors">HVAC</Link>
              <Link href="/ai-receptionist-for-plumbers-phoenix" className="text-xs text-muted-foreground/60 hover:text-[#D4AF37] transition-colors">Plumbers</Link>
              <Link href="/ai-receptionist-for-electricians-phoenix" className="text-xs text-muted-foreground/60 hover:text-[#D4AF37] transition-colors">Electricians</Link>
              <Link href="/ai-receptionist-for-roofers-phoenix" className="text-xs text-muted-foreground/60 hover:text-[#D4AF37] transition-colors">Roofers</Link>
              <Link href="/ai-receptionist-for-dentists-phoenix" className="text-xs text-muted-foreground/60 hover:text-[#D4AF37] transition-colors">Dentists</Link>
              <Link href="/ai-receptionist-for-pool-companies-phoenix" className="text-xs text-muted-foreground/60 hover:text-[#D4AF37] transition-colors">Pool Companies</Link>
              <Link href="/ai-receptionist-for-property-management-phoenix" className="text-xs text-muted-foreground/60 hover:text-[#D4AF37] transition-colors">Property Management</Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Skeu Labs. Built in Phoenix, AZ.
          </p>
        </div>
      </div>
    </footer>
  )
}
