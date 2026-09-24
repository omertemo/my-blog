"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LangToggle from "./LangToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { assetPath } from "@/lib/assetPath";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/blog", label: t("nav.blog") },
    { href: "/about", label: t("nav.about") },
    { href: "/cv", label: t("nav.cv") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 nav-glass">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-gradient text-lg font-bold group">
          <Image
            src={assetPath("/logo.svg")}
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          />
          <span className="tracking-wide">Ömer ÇAYIR</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:bg-white/6 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <LangToggle />
          </div>
        </div>

        {/* Mobile burger */}
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="text-white/60 hover:text-white"
            aria-label="Menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/7 bg-bg1/90 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
