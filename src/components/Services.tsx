import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const services = [
    {
        title: "Advanced Technical & Engineering Workforce",
        category: "Skilled Trades & Technical Staff",
        desc: "We deploy certified engineers, specialized technicians, and skilled tradesmen, rigorously vetted for technical proficiency and adherence to international safety protocols.",
        img: "/images/modern_indian_skilled_trades.png",
        alt: "Professional engineers in safety gear reviewing blueprints at a modern industrial site",
        cta: "Hire Technical Talent",
    },
    {
        title: "Global Healthcare & Medical Staffing",
        category: "Healthcare Professionals",
        desc: "Connecting elite medical professionals—including licensed physicians, registered nurses, and allied health experts—with leading global healthcare institutions.",
        img: "/images/modern_indian_healthcare.png",
        alt: "Professional international healthcare staff in a modern hospital setting",
        cta: "Secure Medical Experts",
    },
    {
        title: "Premium Hospitality & Retail Staffing",
        category: "Hospitality & Retail",
        desc: "Delivering trained candidates for world-class hotels, fine dining establishments, and luxury retail chains, ensuring exceptional customer experiences globally.",
        img: "/images/modern_indian_hospitality.png",
        alt: "Hospitality staff providing premium service",
        cta: "Request Service Staff",
    },
    {
        title: "Technology & Corporate Talent Acquisition",
        category: "IT & BPO Experts",
        desc: "Sourcing exceptional IT professionals, software engineers, and corporate executives to accelerate digital transformation and business operations worldwide.",
        img: "/images/modern_indian_it.png",
        alt: "Corporate IT professionals working in a modern global office",
        cta: "Hire Tech Talent",
    },
    {
        title: "Energy, Oil, Gas & Construction Workforce",
        category: "Energy & Construction",
        desc: "Supplying experienced industry specialists, engineers, and heavy equipment operators essential for large-scale international infrastructure and energy projects.",
        img: "/images/modern_indian_oil_gas.png",
        alt: "Engineers working on an international oil and gas rig",
        cta: "Deploy Project Workforce",
    },
];

export default function Services() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": services.map((svc, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
                "@type": "Service",
                "name": svc.title,
                "description": svc.desc,
                "serviceType": svc.category,
                "provider": {
                    "@type": "Organization",
                    "name": "New Adarsh Manpower Consultant"
                }
            }
        }))
    };

    return (
        <section id="services" className="py-24 bg-[#ecececfc]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="container mx-auto px-6 max-w-[90rem]">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 bg-[#F5B301]/10 rounded-full border border-[#F5B301]/20">
                        <span className="w-2 h-2 rounded-full bg-[#F5B301] animate-pulse" />
                        <span className="text-xs font-bold text-[#d9a000] tracking-widest uppercase">
                            Our Expertise
                        </span>
                    </div>
                    <AnimatedHeading
                        text="Specialized Workforce Solutions Across Strategic Global Sectors"
                        className="text-4xl md:text-5xl font-extrabold text-[#23352b] leading-tight mb-6 tracking-tight"
                    />
                    <p className="text-[#4B5563] text-lg max-w-3xl mx-auto leading-relaxed">
                        We source, vet, and deploy world-class talent, empowering international enterprises with compliant, job-ready professionals equipped to drive business success.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className="group relative h-[420px] md:h-[480px] overflow-hidden rounded-3xl shadow-lg border border-white/10 bg-[#0B1F3A] cursor-pointer flex flex-col justify-end transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 lg:last:col-span-1"
                        >
                            {/* Background Image */}
                            <Image
                                src={svc.img}
                                alt={svc.alt}
                                fill
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-50"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#061428] via-[#061428]/80 to-transparent z-10 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-20 p-8 flex flex-col h-full justify-end">
                                <span className="inline-block py-1.5 px-4 mb-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit transform transition-transform duration-500 group-hover:-translate-y-1">
                                    {svc.category}
                                </span>

                                <h3 className="text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#F5B301] transition-colors duration-300">
                                    {svc.title}
                                </h3>

                                {/* Description */}
                                <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                                        {svc.desc}
                                    </p>
                                </div>

                                {/* CTA Link */}
                                <a
                                    href="/contact-info"
                                    className="flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-wide group-hover:text-[#F5B301] transition-colors mt-2"
                                >
                                    {svc.cta}
                                    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
