import Image from "next/image";
import AnimateIn from "./AnimateIn";

interface Capability {
  title: string;
  subtitle: string;
}

interface Brand {
  id: string;
  tag: string;
  tagBg: string;
  tagText: string;
  number: string;
  logo: React.ReactNode;
  description: string;
  description2: string;
  ctaText: string;
  ctaBg: string;
  ctaTextColor: string;
  ctaHover: string;
  sectionBg: string;
  accentColor: string;
  cardBg: string;
  capabilities: Capability[];
  reverse: boolean;
}

function CapGrid({
  capabilities,
  accentColor,
  cardBg,
}: {
  capabilities: Capability[];
  accentColor: string;
  cardBg: string;
}) {
  return (
    <div>
      <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">
        Capabilities
      </p>
      <div className="grid grid-cols-2 gap-3">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className={`${cardBg} px-4 py-8 rounded-sm border-t-8 drop-shadow-xl`}
            style={{ borderTopColor: accentColor }}
          >
            <p className="font-semibold text-sm text-black">{cap.title}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-snug">
              {cap.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const brands: Brand[] = [
  {
    id: "betable",
    tag: "TURNKEY PLATFORM",
    tagBg: "bg-[#a7cedf]",
    tagText: "text-black",
    number: "01 / 04",
    logo: (
      <Image
        src="/assets/betable-brand-logo.png"
        alt="Betable"
        width={200}
        height={60}
        className="h-14 w-auto"
      />
    ),
    description:
      "Betable is a modern turnkey iGaming platform built for operators who need speed, flexibility and control. It supports multi-vertical operations, casino, sportsbook and bingo, from a single unified environment.",
    description2:
      "Built with flexible APIs, Betable allows operators to plug in additional integrations as their business grows. Whether launching a new brand or scaling an existing one, the platform is engineered to move with you.",
    ctaText: "Visit Betable",
    ctaBg: "border border-black",
    ctaTextColor: "text-black",
    ctaHover: "hover:bg-black hover:text-white",
    sectionBg: "bg-[#f3f8fb]",
    accentColor: "#a7cedf",
    cardBg: "bg-gray-50",
    capabilities: [
      { title: "Multi-Vertical", subtitle: "Casino, Sportsbook & Bingo" },
      { title: "Flexible APIs", subtitle: "Extensible by design" },
      { title: "Turnkey Ready", subtitle: "Fast operator deployment" },
      { title: "Unified Control", subtitle: "Single platform environment" },
    ],
    reverse: false,
  },
  {
    id: "newshore",
    tag: "PAYMENTS & CASHIER",
    tagBg: "bg-[#5b6cf9]",
    tagText: "text-white",
    number: "02 / 04",
    logo: (
      <Image
        src="/assets/newshore-brand-logo.png"
        alt="Newshore"
        width={240}
        height={60}
        className="h-14 w-auto mix-blend-multiply"
      />
    ),
    description:
      "Newshore delivers a dedicated payment and cashier solution designed specifically for iGaming operators. Built to optimise transaction flows, improve acceptance rates and strengthen the player payment experience.",
    description2:
      "Operating across multiple markets, Newshore handles the complexity of regional payment methods, currency management and compliance. Allowing operators to focus on growth, not infrastructure.",
    ctaText: "Visit Newshore",
    ctaBg: "bg-[#5b6cf9]",
    ctaTextColor: "text-white",
    ctaHover: "hover:bg-[#4a5ae8]",
    sectionBg: "bg-[#eef2ff]",
    accentColor: "#5b6cf9",
    cardBg: "bg-white/70",
    capabilities: [
      { title: "Transaction Optimisation", subtitle: "Higher acceptance rates" },
      { title: "Multi-Market", subtitle: "Regional payment coverage" },
      { title: "Player Experience", subtitle: "Frictionless cashier flow" },
      { title: "Compliance-Ready", subtitle: "Regulatory alignment built-in" },
    ],
    reverse: true,
  },
  {
    id: "apis-gaming",
    tag: "GAMES AGGREGATION",
    tagBg: "bg-[#ce9e18]",
    tagText: "text-white",
    number: "03 / 04",
    logo: (
      <Image
        src="/assets/api-brand-logo.png"
        alt="APIS Gaming"
        width={240}
        height={60}
        className="h-16 w-auto mix-blend-multiply"
      />
    ),
    description:
      "APIS Gaming provides a powerful games aggregation layer connecting operators to leading global studios through a single streamlined integration. One connection. Hundreds of titles.",
    description2:
      "By removing the complexity of managing multiple studio integrations, APIS Gaming gives operators access to a rich, growing content library with the consistency and speed players expect.",
    ctaText: "Visit APIS Gaming",
    ctaBg: "bg-[#ce9e18]",
    ctaTextColor: "text-white",
    ctaHover: "hover:bg-[#b88b14]",
    sectionBg: "bg-[#fdf6e4]",
    accentColor: "#ce9e18",
    cardBg: "bg-white/60",
    capabilities: [
      { title: "Global Studios", subtitle: "Leading content providers" },
      { title: "Single Integration", subtitle: "One connection point" },
      { title: "Content Management", subtitle: "Curated game library" },
      { title: "Rapid Delivery", subtitle: "Streamlined deployment" },
    ],
    reverse: false,
  },
  {
    id: "grace-gaming",
    tag: "WHITE-LABEL",
    tagBg: "bg-[#7c3aed]",
    tagText: "text-white",
    number: "04 / 04",
    logo: (
      <Image
        src="/assets/grace-gaming-brand-logo.png"
        alt="Grace Gaming"
        width={320}
        height={60}
        className="h-12 w-auto mix-blend-multiply"
      />
    ),
    description:
      "Grace Gaming is a white-label provider delivering compliant, managed operations for brands that want to launch quickly and securely. It handles operational complexity so clients can focus on brand and acquisition.",
    description2:
      "From regulatory compliance to managed platform services, Grace Gaming provides a structured and secure route to market. Built for brands that move fast without cutting corners.",
    ctaText: "Visit Grace Gaming",
    ctaBg: "bg-[#7c3aed]",
    ctaTextColor: "text-white",
    ctaHover: "hover:bg-[#6b2ed4]",
    sectionBg: "bg-[#f0ebff]",
    accentColor: "#7c3aed",
    cardBg: "bg-white/60",
    capabilities: [
      { title: "Compliant Operations", subtitle: "Regulatory-first approach" },
      { title: "Managed Services", subtitle: "Full operational support" },
      { title: "Fast Market Entry", subtitle: "Rapid brand launch" },
      { title: "Secure by Design", subtitle: "Built-in governance" },
    ],
    reverse: true,
  },
] as Brand[];

export default function EcosystemSection() {
  return (
    <section id="ecosystem">
      {/* Section header */}
      <div className="py-20 md:py-24 px-6 md:px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
            02 Ecosystem
          </p>
          <h2 className="font-black leading-[0.9] mb-6">
            <span className="block text-6xl md:text-7xl text-black">
              Four Specialists.
            </span>
            <span className="block text-6xl md:text-7xl text-[#aaff00]">
              One Stack.
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
            Each business focuses on a specific layer of the iGaming
            infrastructure stack. Engage individually or combine into a fully
            integrated ecosystem.
          </p>
          </AnimateIn>
        </div>
      </div>

      {/* Brand panels */}
      {brands.map((brand) => (
        <div key={brand.number} id={brand.id} className={`${brand.sectionBg} py-16 md:py-20 px-6 md:px-10`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Content block */}
              <AnimateIn from={brand.reverse ? "right" : "left"} className={brand.reverse ? "lg:order-2" : "lg:order-1"}>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className={`text-xs font-semibold px-3 py-1 ${brand.tagBg} ${brand.tagText}`}
                  >
                    {brand.tag}
                  </span>
                  <span className="text-xs text-gray-400">{brand.number}</span>
                </div>
                <div className="mb-6">{brand.logo}</div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {brand.description}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {brand.description2}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors ${brand.ctaBg} ${brand.ctaTextColor} ${brand.ctaHover}`}
                >
                  {brand.ctaText} →
                </a>
              </AnimateIn>

              {/* Capabilities block */}
              <AnimateIn from={brand.reverse ? "left" : "right"} delay={150} className={brand.reverse ? "lg:order-1" : "lg:order-2"}>
                <CapGrid
                  capabilities={brand.capabilities}
                  accentColor={brand.accentColor}
                  cardBg={brand.cardBg}
                />
              </AnimateIn>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
