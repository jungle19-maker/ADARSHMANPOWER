"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSwitcher() {
  useEffect(() => {
    // Only load the script if it hasn't been loaded
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { 
              pageLanguage: "en", 
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
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

  return (
    <div className="relative inline-flex items-center text-black">
      <div id="google_translate_element"></div>
    </div>
  );
}
