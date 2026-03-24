import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Location */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="transition-transform hover:scale-105">
              <Image
                src="/skeu-labs-logo.png"
                alt="Skeu Labs"
                width={160}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">Phoenix, AZ</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
              Pricing
            </Link>
            <a
              href="https://skeu-portal.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors px-4 py-1.5 rounded-full"
            >
              Client Login
            </a>
          </div>

          {/* Contact & Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <a
              href="mailto:Support@skeulabs.com"
              className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors"
            >
              Support@skeulabs.com
            </a>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Skeu Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
