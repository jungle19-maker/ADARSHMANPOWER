import Image from "next/image";
import { CheckCircle2, Award, Globe, Factory } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const points = [
  "Rigorous vetting process guaranteeing highly qualified, background-verified professionals.",
  "100% adherence to global legal standards and Government of India compliance.",
  "Comprehensive mobilization support including visa processing, attestation, and emigration.",
  "Dedicated post-deployment support to ensure seamless integration and retention.",
];

const statBadges = [
  { icon: <Award className="w-5 h-5" />, value: "10+", label: "Years Experience" },
  { icon: <Globe className="w-5 h-5" />, value: "20+", label: "Countries Served" },
  { icon: <Factory className="w-5 h-5" />, value: "15+", label: "Industries Covered" },
];

export default function About({ showCertificate = true }: { showCertificate?: boolean }) {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Image */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative overflow-hidden shadow-2xl z-10 w-full h-[350px] md:h-[520px]">
              <Image
                src="/images/modern_indian_recruitment.png"
                alt="Expert Recruitment Team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Navy overlay tint */}
              <div className="absolute inset-0 bg-[#23352b]/10" />
            </div>

            {/* Stat badges row */}
            <div className="absolute -bottom-6 left-2 right-2 md:left-4 md:right-4 z-20 flex gap-2 sm:gap-3">
              {statBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white text-[#24342b] p-2 sm:p-4 shadow-[0_10px_30px_rgba(11,31,58,0.1)] text-center border border-[#E5E7EB]"
                >
                  <div className="flex justify-center text-[#F5B301] mb-1">{badge.icon}</div>
                  <div className="text-lg sm:text-2xl font-extrabold text-[#F5B301]">{badge.value}</div>
                  <div className="text-[8px] sm:text-[10px] font-semibold text-[#4B5563] uppercase tracking-wide leading-tight">
                    {badge.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative background */}
            <div className="absolute top-10 -left-8 w-full h-full bg-[#F1F5F9] -z-10" />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 space-y-8 pt-6 lg:pt-0">
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 bg-[#F5B301]/10 rounded-full border border-[#F5B301]/20">
              <span className="w-2 h-2 rounded-full bg-[#F5B301] animate-pulse" />
              <span className="text-xs font-bold text-[#d9a000] tracking-widest uppercase">
                About Us
              </span>
            </div>

            <AnimatedHeading
              text="Your Strategic Partner in [Global Talent Acquisition.]"
              className="text-[#24342b] text-4xl lg:text-5xl font-bold leading-tight"
            />

            <p className="text-[#4B5563] leading-relaxed text-lg">
              New Adarsh Manpower Consultant is a premier global manpower agency specializing in the deployment of top-tier talent across high-growth sectors, including construction, oil & gas, healthcare, hospitality, and IT. Backed by rigorous compliance standards and an expansive candidate network, we ensure {" "}
              <strong className="text-[#24342b]">seamless, ethical, and efficient hiring</strong>{" "}
              for multinational organizations worldwide.
            </p>

            <ul className="space-y-3">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F5B301] flex-shrink-0 mt-0.5" />
                  <span className="text-[#374151] text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/services" className="btn-primary">
                Our Services
              </a>
              <a href="/contact-info" className="btn-secondary-dark">
                Get in Touch
              </a>
            </div>
          </div>

        </div>

        {/* ── Certificate Section ── */}
        {showCertificate && (
          <div className="mt-24 border-t border-[#E5E7EB] pt-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 bg-[#F5B301]/10 rounded-full border border-[#F5B301]/20">
                  <span className="w-2 h-2 rounded-full bg-[#F5B301] animate-pulse" />
                  <span className="text-xs font-bold text-[#d9a000] tracking-widest uppercase">
                    Govt. Approved
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#24342b] mb-4">
                  Official <span className="text-[#F5B301]">License</span>
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
                  New Adarsh Manpower Consultant is an officially certified and licensed recruiting agent by the Ministry of External Affairs, Government of India, guaranteeing a secure and reliable recruitment process.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F1F5F9] border border-[#E5E7EB]">
                  <Award className="w-5 h-5 text-[#F5B301]" />
                  <span className="text-sm font-bold text-[#24342b]">B-3395/UP/COM/100/5/11401/2026</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className=" overflow-hidden border border-[#E5E7EB] shadow-xl relative w-full h-[400px] md:h-[500px]">
                  <Image
                    src="/images/license_certificate.png"
                    alt="MEA License Certificate"
                    fill
                    className="object-contain bg-white hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
