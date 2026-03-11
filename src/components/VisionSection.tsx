import AnimateIn from "./AnimateIn";

const investments = [
  "Product Development",
  "Regulated Markets",
  "Payment Coverage",
  "Content Partnerships",
  "Managed Services",
];

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="py-24 md:py-32 px-6 md:px-10 bg-[#F7F7F5] min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
          06 Future
        </p>

        {/* Massive display heading */}
        <h2 className="font-black leading-[0.88] mb-16 md:mb-20">
          <span className="block text-[6vw] md:text-[6vw] text-black">The</span>
          <span className="block text-[6vw] md:text-[6vw] text-black">Infrastructure</span>
          <span className="block text-[6vw] md:text-[6vw] text-black">Partner of Choice</span>
          <span className="block text-[6vw] md:text-[6vw] text-[#aaff00]">Worldwide.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: description + CTA */}
          <AnimateIn from="left">
            <p className="text-gray-700 leading-relaxed mb-4">
              Betable Group is focused on long-term operator success. We
              continue to invest in product development, expand into new
              regulated markets, strengthen payment coverage, grow content
              partnerships and refine our managed services model.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We support challenger brands and established multi-market
              businesses — providing the technology and operational backbone
              that allows them to scale with confidence.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-[#aaff00]" />
              <span>CLARITY · CONTROL · GROWTH</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-7 py-3.5 hover:bg-[#ff3d00] transition-colors"
            >
              Speak to Us →
            </a>
          </AnimateIn>

          {/* Right: investment list */}
          <AnimateIn from="right" delay={150}>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
              Where We&apos;re Investing
            </p>
            <ul>
              {investments.map((item, i) => (
                <li
                  key={item}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                  className="group flex items-center gap-5 py-5 border-b border-gray-200 transition-all duration-200 hover:pl-2"
                >
                  {/* Bullet */}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#aaff00] shrink-0" />

                  {/* Label */}
                  <span className="flex-1 text-sm font-semibold text-black group-hover:text-gray-500 transition-colors duration-200">
                    {item}
                  </span>

                  {/* Arrow slides in on hover */}
                  <span className="text-[#aaff00] text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
