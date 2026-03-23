import AnimateIn from "./AnimateIn";

const contacts = [
  { label: "General Enquiries", email: "info@betablegroup.com" },
  { label: "Partnerships",      email: "partners@betablegroup.com" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-10 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-start md:gap-4 lg:gap-6 mb-8">
            <span className="font-black leading-none text-3xl md:text-[6.5rem] lg:text-[8rem] text-[#38bdf8] shrink-0 font-light mb-2 md:mb-0">6</span>
            <h2 className="font-black leading-[0.9]">
              <span className="block text-6xl md:text-7xl text-black">
                Let&apos;s Build
              </span>
              <span className="block text-6xl md:text-7xl text-[#38bdf8]">
                Together
              </span>
            </h2>
          </div>
          <p className="text-base md:text-lg max-w-md mb-12 leading-relaxed">
            Whether launching a new brand or enhancing an existing operation, our
            team is ready to explore how Betable Group can support your growth.
          </p>
        </AnimateIn>

        <div className="space-y-7">
          {contacts.map((contact, i) => (
            <AnimateIn key={contact.label} delay={i * 120}>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex items-center justify-center w-5 h-5 shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">
                    {contact.label}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-black hover:text-gray-500 transition-colors hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
