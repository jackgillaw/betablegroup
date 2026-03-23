import AnimateIn from "./AnimateIn";

const stats = [
  { value: "4", label: "Specialist Companies" },
  { value: "3+", label: "Verticals Supported" },
  { value: "API", label: "Led Architecture" },
  { value: "∞", label: "Scalability" },
];

export default function StorySection() {
  return (
    <section id="story" className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading */}
          <AnimateIn from="left">
            <div className="flex flex-col md:flex-row md:items-start md:gap-4 lg:gap-6">
              <span className="font-black leading-none text-3xl md:text-[6.5rem] lg:text-[8rem] text-[#38bdf8] shrink-0 font-light mb-2 md:mb-0">1</span>
              <h2 className="font-black leading-[0.9]">
                <span className="block text-6xl md:text-7xl text-black">Our</span>
                <span className="block text-6xl md:text-7xl text-[#38bdf8]">Story</span>
              </h2>
            </div>
          </AnimateIn>

          {/* Right: content */}
          <AnimateIn from="right" delay={150}>
            <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed mb-4">
              Betable Group was built on a{" "}
              <span className="font-normal italic">simple principle.</span>{" "}
              iGaming infrastructure should empower operators, not restrict them.
            </p>
            <div className="w-12 h-0.5 bg-[#38bdf8] my-6" />
            <p className="leading-relaxed mb-4">
              For years the industry has been shaped by rigid legacy platforms
              and fragmented supplier relationships. Operators are forced to
              compromise on flexibility, speed to market and commercial control.
            </p>
            <p className="leading-relaxed">
              We built a collective of specialist businesses, each focused on a
              critical layer of the operator stack. Together, they form a
              connected, scalable and regulation-ready infrastructure built for
              the pace of modern iGaming.
            </p>
          </AnimateIn>
        </div>

        {/* Stats */}
        <div className="border-t border-gray-100 mt-20 md:mt-24 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 100}>
                <div className="flex justify-center flex-col items-center">
                  <p
                    className="text-4xl md:text-5xl font-black text-[#38bdf8] mb-2"
                    style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.15), 2px 2px 6px rgba(0,0,0,0.1)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-widest text-gray-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
