"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "gu", label: "Gujarati" },
  { code: "pa", label: "Punjabi" },
  { code: "bn", label: "Bengali" },
  { code: "ar", label: "Arabic" },
];

export default function LanguageSwitcher() {
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    // Only load the script if it hasn't been loaded
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { 
              pageLanguage: "en", 
              includedLanguages: "en,hi,gu,pa,bn,ar",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    
    // Find Google's hidden select and trigger change
    const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (googleSelect) {
      googleSelect.value = lang;
      googleSelect.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="relative inline-flex items-center">
      {/* Hidden original widget */}
      <div 
        id="google_translate_element" 
        className="opacity-0 absolute w-0 h-0 overflow-hidden pointer-events-none"
      ></div>
      
      {/* Custom Premium UI Dropdown */}
      <div className="relative flex items-center gap-1.5 bg-[#F8FAFC] border border-[#E5E7EB] shadow-sm rounded-full px-3 py-1.5 hover:border-[#F5B301] transition-colors cursor-pointer group">
        <Globe className="w-4 h-4 text-[#F5B301]" />
        <select 
          value={selectedLang}
          onChange={handleLangChange}
          className="bg-transparent text-[13px] md:text-sm font-semibold text-[#0B1F3A] outline-none cursor-pointer appearance-none pr-5 relative z-10 w-full"
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code} className="text-[#0B1F3A] bg-white">
              {l.label}
            </option>
          ))}
        </select>
        {/* Custom Chevron (Positioned underneath the select click area, or safely to the right) */}
        <div className="pointer-events-none absolute right-2.5 text-[#0B1F3A]/60 group-hover:text-[#F5B301] transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
