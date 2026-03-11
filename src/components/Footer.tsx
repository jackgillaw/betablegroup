import Image from "next/image";

const ecosystemLinks = [
  { label: "Betable Platform",  href: "#betable"      },
  { label: "Newshore Payments", href: "#newshore"     },
  { label: "APIS Gaming",       href: "#apis-gaming"  },
  { label: "Grace Gaming",      href: "#grace-gaming" },
];

const navLinks = [
  { label: "Our Story",    href: "#story"     },
  { label: "Ecosystem",    href: "#ecosystem" },
  { label: "Why We Exist", href: "#why-us"    },
  { label: "Vision",       href: "#vision"    },
  { label: "Contact",      href: "#contact"   },
];

const contactLinks = [
  { label: "info@betablegroup.com", href: "mailto:info@betablegroup.com" },
  {
    label: "partners@betablegroup.com",
    href: "mailto:partners@betablegroup.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#aaff00] px-6 md:px-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/assets/betable-group-logo.png"
                alt="Betable Group"
                width={140}
                height={28}
                className="h-7 w-auto mix-blend-multiply"
              />
            </div>
            <p className="text-sm text-black/60 leading-relaxed">
              Delivering clarity, control and growth for serious iGaming
              operators worldwide.
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <p className="text-xs tracking-widest text-black/40 uppercase mb-4">
              Ecosystem
            </p>
            <ul className="space-y-2">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-black hover:text-black/50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs tracking-widest text-black/40 uppercase mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-black hover:text-black/50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest text-black/40 uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-black hover:text-black/50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-black/20">
          <p className="text-xs text-black/75">
            © 2026 Betable Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
