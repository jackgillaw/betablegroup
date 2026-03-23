import Image from "next/image";
import AnimateIn from "./AnimateIn";

const benefits = [
  "Faster integrations across technology, payments and content",
  "Improved operational efficiency through joined-up infrastructure",
  "Cleaner data visibility and cross-vertical reporting",
  "Reduced supplier friction and vendor management overhead",
  "Clearer commercial alignment from a single Group relationship",
];

const companies = [
  {
    logo: "/assets/betable-brand-logo.png",
    alt: "Betable",
    logoClass: "h-7 w-auto",
    role: "Platform",
    color: "#a7cedf",
    textColor: "#000000",
    href: "https://betable.com/",
  },
  {
    logo: "/assets/newshore-brand-logo.png",
    alt: "Newshore",
    logoClass: "h-7 w-auto",
    role: "Payments",
    color: "#5b6cf9",
    textColor: "#ffffff",
    href: "https://newshore.com/",
  },
  {
    logo: "/assets/api-brand-logo.png",
    alt: "APIS Gaming",
    logoClass: "h-9 w-auto",
    role: "Games Aggregation",
    color: "#ce9e18",
    textColor: "#ffffff",
    href: "https://apisgaming.com/",
  },
  {
    logo: "/assets/grace-gaming-brand-logo.png",
    alt: "Grace Gaming",
    logoClass: "h-6 w-auto",
    role: "White Label Services",
    color: "#7c3aed",
    textColor: "#ffffff",
    href: "https://gracegaming.com/",
  },
];

export default function ConnectedSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <AnimateIn from="left">
            <div className="flex flex-col md:flex-row md:items-start md:gap-4 lg:gap-6 mb-8">
              <span className="font-black leading-none text-3xl md:text-[6.5rem] lg:text-[8rem] text-[#e8440e] shrink-0 font-light mb-2 md:mb-0">4</span>
              <h2 className="font-black leading-[0.9]">
                <span className="block text-6xl md:text-7xl text-black">
                  One Group.
                </span>
                <span className="block text-6xl md:text-7xl text-[#e8440e]">
                  All Connected.
                </span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Because Betable, Newshore, APIS Gaming and Grace Gaming operate
              within one Group, we create alignment across technology, payments
              and content.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-[#e8440e] text-lg leading-none mt-0.5">
                    •
                  </span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* Right: connectivity diagram */}
          <AnimateIn from="right" delay={150} className="relative isolate">
            {/* Center hub */}
            <div className="flex justify-center mb-8">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Sonar rings — behind everything else */}
                {[0, 0.9, 1.8].map((delay) => (
                  <div
                    key={delay}
                    className="absolute inset-0 rounded-full border border-gray-400/40"
                    style={{ animation: `sonar 2.7s ease-out ${delay}s infinite`, zIndex: -1 }}
                  />
                ))}
                {/* Logo circle */}
                <div className="relative w-full h-full rounded-full border-2 border-gray-200 bg-white flex items-center justify-center p-5">
                  <Image
                    src="/assets/betable-group-logo.png"
                    alt="Betable Group"
                    width={120}
                    height={24}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Company cards */}
            <div className="grid grid-cols-2 gap-4">
              {companies.map((company, i) => (
                <AnimateIn key={company.alt} delay={200 + i * 80}>
                <div className="bg-gray-50 p-5 rounded-sm shadow border-t-8" style={{ borderTopColor: company.color }}>
                  <div className="mb-1 h-10 flex items-center">
                    <Image
                      src={company.logo}
                      alt={company.alt}
                      width={160}
                      height={40}
                      className={company.logoClass}
                    />
                  </div>
                  <p className="text-xs  mb-8">{company.role}</p>
                  <a
                    href={company.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 transition-opacity hover:opacity-80 border-1 border-black/50"
                  >
                    Visit →
                  </a>
                </div>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
