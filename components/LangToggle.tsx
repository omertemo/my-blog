"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-white/10 bg-white/5 text-xs font-semibold">
      <button
        onClick={() => setLang("tr")}
        className={`px-3 py-1.5 transition-all ${
          lang === "tr" ? "bg-bg4 text-white" : "text-white/50 hover:text-white"
        }`}
      >
        TR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 transition-all ${
          lang === "en" ? "bg-bg4 text-white" : "text-white/50 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
