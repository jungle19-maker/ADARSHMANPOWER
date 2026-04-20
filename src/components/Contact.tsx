"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#ecececfc]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 bg-[#F5B301]/10 rounded-full border border-[#F5B301]/20">
                        <span className="w-2 h-2 rounded-full bg-[#F5B301] animate-pulse" />
                        <span className="text-xs font-bold text-[#d9a000] tracking-widest uppercase">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1F3A] mb-4 tracking-tight">
                        Contact Information
                    </h2>
                    <p className="text-[#4B5563] text-base leading-relaxed">
                        Reach out via phone or email to discuss your global manpower requirements or international job opportunities.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 shadow-xl border border-[#E5E7EB] rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="flex flex-col items-center text-center gap-4 bg-[#F8FAFC] p-8 border border-[#E5E7EB] rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#F5B301]/30">
                            <div className="w-14 h-14 bg-white shadow-sm border border-[#E5E7EB] rounded-2xl flex items-center justify-center text-[#F5B301]">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-[#0B1F3A] text-xl mb-3">Office Address</div>
                                <div className="text-[#4B5563] leading-relaxed text-sm">
                                    Ramnath Deoria Basement and Ground Floor Near Kali Mandir,<br />
                                    Deoria Sadar R.S Deoria,<br />
                                    Uttar Pradesh
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-4 bg-[#F8FAFC] p-8 border border-[#E5E7EB] rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#F5B301]/30">
                            <div className="w-14 h-14 bg-white shadow-sm border border-[#E5E7EB] rounded-2xl flex items-center justify-center text-[#F5B301]">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-[#0B1F3A] text-xl mb-3">Phone Number</div>
                                <a href="tel:+918957721120" className="text-[#4B5563] text-sm hover:text-[#F5B301] transition-colors">
                                    +91-8957721120
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-4 bg-[#F8FAFC] p-8 border border-[#E5E7EB] rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#F5B301]/30">
                            <div className="w-14 h-14 bg-white shadow-sm border border-[#E5E7EB] rounded-2xl flex items-center justify-center text-[#F5B301]">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-[#0B1F3A] text-xl mb-3">Email Address</div>
                                <a href="mailto:newadarshmanpowerconsultant@gmail.com" className="text-[#4B5563] text-sm hover:text-[#F5B301] transition-colors break-all">
                                    newadarshmanpowerconsultant@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
