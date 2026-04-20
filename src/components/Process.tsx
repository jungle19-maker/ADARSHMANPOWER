import AnimatedHeading from "./AnimatedHeading";

const steps = [
  {
    num: "01",
    title: "Strategic Requirement Analysis",
    desc: "We perform a comprehensive evaluation of your workforce needs, analyzing required skill sets, industry standards, volume, and deployment timelines to craft a tailored recruitment strategy.",
  },
  {
    num: "02",
    title: "Targeted Global Sourcing",
    desc: "Leveraging our expansive database of pre-screened professionals and executing highly targeted recruitment drives to identify top-tier talent across domestic and international markets.",
  },
  {
    num: "03",
    title: "Rigorous Screening & Assessment",
    desc: "A meticulous multi-stage evaluation process including technical trade tests, comprehensive panel interviews, psychological assessments, and rigorous medical fitness verifications.",
  },
  {
    num: "04",
    title: "Compliance & Documentation",
    desc: "Seamless execution of all legal requirements, including contract negotiation, offer letter issuance, document attestation, and strict adherence to international emigration protocols.",
  },
  {
    num: "05",
    title: "Expedited Visa Processing",
    desc: "End-to-end management of visa applications, embassy liaising, and work permit processing, ensuring swift and legally compliant global workforce mobility.",
  },
  {
    num: "06",
    title: "Seamless Deployment & Onboarding",
    desc: "Comprehensive pre-departure orientation, travel coordination, and dedicated post-deployment support to guarantee smooth integration at the international destination.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#ecececfc] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 bg-[#F5B301]/10 rounded-full border border-[#F5B301]/20">
            <span className="w-2 h-2 rounded-full bg-[#F5B301] animate-pulse" />
            <span className="text-xs font-bold text-[#d9a000] tracking-widest uppercase">
              How It Works
            </span>
          </div>
          <AnimatedHeading 
            text="Our Executive 6-Step Recruitment Methodology"
            className="text-4xl md:text-5xl font-extrabold text-[#23352b] leading-tight mb-4 tracking-tight"
          />
          <p className="text-[#4B5563] text-lg leading-relaxed">
            A proven, precision-driven timeline designed to deploy exceptional talent efficiently and securely—empowering your global operations every single time.
          </p>
        </div>

        {/* Vertical Alternating Timeline Grid */}
        <div className="relative w-full py-4">

          {/* Center Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#E5E7EB] md:-translate-x-[1px]" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const boxMargin = isEven ? "md:mr-auto" : "md:ml-auto";
              const textAlign = isEven ? "md:text-right" : "md:text-left";

              return (
                <div key={idx} className="relative w-full">

                  {/* Floating Number Box (Timeline Marker) */}
                  <div className="absolute left-[28px] md:left-1/2 top-4 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full border border-[#E5E7EB] shadow-sm flex items-center justify-center transition-transform hover:scale-110 hover:border-[#F5B301] duration-300">
                    <span className="text-[#23352b] font-bold text-lg">{step.num}</span>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${boxMargin}`}>
                    <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 hover:bg-[#0B1F3A] group transition-all duration-500 shadow-sm hover:shadow-2xl hover:border-[#F5B301]/50 hover:-translate-y-2">

                      {/* Step Number Backdrop (Visible on Hover) */}
                      <div className="text-6xl font-extrabold text-[#23352b]/5 group-hover:text-white/5 absolute top-2 right-4 leading-none select-none transition-colors duration-300 pointer-events-none">
                        {step.num}
                      </div>

                      <h4 className={`text-xl font-bold text-[#0B1F3A] group-hover:text-[#F5B301] mb-3 transition-colors duration-300 text-left ${textAlign}`}>
                        {step.title}
                      </h4>
                      <p className={`text-[#4B5563] text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300 text-left ${textAlign}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-[#4B5563] mb-6">
            Ready to elevate your global workforce? Partner with us today.
          </p>
          <a href="#contact" className="btn-primary inline-flex uppercase">
            Initiate Hiring Process
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
