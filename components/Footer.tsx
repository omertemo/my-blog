"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/7 py-6 text-center text-xs text-white/30">
      © 2026 Ömer Çayır · {t("footer.rights")}
    </footer>
  );
}
