"use client";

function ScrollIndicator() {
  const handleClick = () => {
    const next = document.getElementById("story");
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={handleClick}
      className="group flex items-center gap-3 mt-14 text-xs tracking-[0.25em] text-white/40 hover:text-white/80 transition-colors duration-300 cursor-pointer"
    >
      {/* Animated line */}
      <div className="relative w-8 h-px bg-white/30 overflow-hidden">
        <div className="absolute inset-0 bg-[#aaff00] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
      </div>

      {/* Label + bouncing arrow */}
      <span className="flex items-center gap-2">
        SCROLL
        <svg
          viewBox="0 0 10 14"
          fill="none"
          className="w-2.5 h-3.5 translate-y-0 group-hover:translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <path
            d="M5 1v10M1 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 px-6 md:px-10 overflow-hidden">
      {/* Full-screen video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/betable-group-header.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-20 md:py-28">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.3em] text-white/60 uppercase mb-8 md:mb-10">
          iGaming Infrastructure Group
        </p>

        {/* Main heading */}
        <h1 className="font-black leading-[0.88] uppercase mb-10 md:mb-12 text-[6vw] md:text-[6vw]">
          <span className="block text-white">The Stack</span>
          <span className="block text-[#aaff00]">Behind</span>
          <span className="block text-white">iGaming.</span>
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-base md:text-lg text-white/70 max-w-xs leading-relaxed mb-8">
              Four specialist businesses. One connected infrastructure ecosystem
              for the modern iGaming operator.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-7 py-3.5 hover:bg-[#ff3d00] transition-colors"
            >
              Speak to Us →
            </a>
          </div>

          {/* Brand indicators */}
          <div className="flex flex-wrap items-center gap-4 md:gap-5 text-sm text-white/60">
            {[
              { num: "01", name: "Betable",     color: "#a7cedf" },
              { num: "02", name: "Newshore",    color: "#5b6cf9" },
              { num: "03", name: "APIS Gaming", color: "#ce9e18" },
              { num: "04", name: "Grace Gaming",color: "#7c3aed" },
            ].map((b) => (
              <span key={b.num} className="flex items-center gap-1.5">
                <span className="font-bold text-xs" style={{ color: b.color }}>{b.num}</span>
                <span>{b.name}</span>
              </span>
            ))}
          </div>
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
}
