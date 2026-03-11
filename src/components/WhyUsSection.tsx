const reasons = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Faster Deployment",
    description:
      "Aligned platform, payments, content and services reduce inefficiencies from multiple disconnected suppliers.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Clearer Reporting",
    description:
      "A connected infrastructure model provides clean data visibility and operational transparency across all verticals.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Stronger Compliance",
    description:
      "Regulatory alignment embedded into systems and reporting frameworks across the entire Group.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Ready",
    description:
      "Infrastructure built to scale across jurisdictions — from highly regulated to emerging markets.",
  },
];

import AnimateIn from "./AnimateIn";

const operatorTags = [
  "Multi-Vertical",
  "API-Led",
  "Multi-Jurisdiction",
  "Modular or Turnkey",
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
            03 Purpose
          </p>
          <h2 className="font-black leading-[0.9] mb-6">
            <span className="block text-6xl md:text-7xl text-black">Why We</span>
            <span className="block text-6xl md:text-7xl text-[#e8440e]">Exist</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-md mb-14 leading-relaxed">
            The iGaming market evolves at pace. Operators need infrastructure that
            moves as fast as the markets they serve.
          </p>
        </AnimateIn>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {reasons.map((reason, i) => (
            <AnimateIn key={reason.title} delay={i * 100}>
            <div
              className="border border-gray-100 p-6 rounded-lg shadow h-full"
            >
              <div className="w-10 h-10 bg-gray-50 rounded-md flex items-center justify-center mb-5 text-gray-500">
                {reason.icon}
              </div>
              <h3 className="font-bold text-base text-black mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA box */}
        <AnimateIn>
        <div className="bg-gray-50 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow">
          <div className="max-w-md">
            <h3 className="font-black text-2xl md:text-3xl text-black mb-3">
              Designed for Modern Operators
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Multi-vertical, API-led and built to scale across jurisdictions.
              We don&apos;t lock partners into rigid systems — we build
              foundations that grow with them.
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <div className="flex flex-wrap gap-2 md:mb-4">
              {operatorTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-gray-300 px-6 py-1.5 text-gray-600 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="rounded inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-7 py-3.5 w-fit hover:bg-[#ff3d00] transition-colors"
            >
              Speak to Us →
            </a>
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
