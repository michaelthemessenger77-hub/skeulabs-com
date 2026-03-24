import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Location */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="transition-transform hover:scale-105">
              <span className="text-xl font-bold gradient-text">Skeu Labs</span>
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
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors">
              Contact
            </Link>
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
