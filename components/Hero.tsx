"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
  {
    href: "mailto:omercayirtemo@gmail.com",
    label: "Email",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
        <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/omertemo",
    label: "GitHub",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/omercayir01",
    label: "LinkedIn",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-20 md:grid-cols-[1fr_auto]">
      {/* Text */}
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent1">
          {t("hero.greeting")}
        </p>
        <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Ömer <span className="text-gradient">ÇAYIR</span>
        </h1>
        <p className="mb-8 max-w-md text-base text-white/55 md:text-lg">
          {t("hero.lead")}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-gradient px-5 py-3 text-sm font-bold text-bg1 transition-all hover:opacity-85 hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
            {t("hero.cvBtn")}
          </Link>
          <a
            href="https://github.com/omertemo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/60 transition-all hover:bg-white/7 hover:text-white hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/omercayir01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/60 transition-all hover:bg-white/7 hover:text-white hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Profile card */}
      <div className="flex flex-col items-center gap-5 md:flex-col">
        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-[-6px] rounded-full bg-accent-gradient opacity-30 blur-xl" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-accent1/25 bg-bg3">
            <Image
              src="/assets/MyPhoto.jpeg"
              alt="Ömer ÇAYIR"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-2 rounded-full border border-accent1/15 bg-accent1/8 px-4 py-1.5 text-xs font-medium text-accent1">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent1" />
          {t("hero.status")}
        </div>

        {/* Social icons */}
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-white/50 transition-all hover:border-accent1/30 hover:bg-accent1/10 hover:text-accent1 hover:-translate-y-0.5"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
