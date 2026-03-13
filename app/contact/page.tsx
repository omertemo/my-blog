"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Opens the user's email client with pre-filled data
      // For a real backend, replace with a fetch() to an API route
      const subject = encodeURIComponent(`Blog İletişim — ${form.name}`);
      const body = encodeURIComponent(
        `Ad: ${form.name}\nE-posta: ${form.email}\n\n${form.message}`,
      );
      window.open(
        `mailto:omercayirtemo@gmail.com?subject=${subject}&body=${body}`,
        "_blank",
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent1">
          ömer.dev
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          {t("contact.title")}
        </h1>
        <p className="mt-2 text-white/50">{t("contact.subtitle")}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            required
            placeholder={t("contact.namePlaceholder")}
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-accent1/40 focus:bg-white/5"
          />
        </div>
        <div>
          <input
            type="email"
            required
            placeholder={t("contact.emailPlaceholder")}
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-accent1/40 focus:bg-white/5"
          />
        </div>
        <div>
          <textarea
            required
            rows={5}
            placeholder={t("contact.msgPlaceholder")}
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-accent1/40 focus:bg-white/5"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-accent-gradient py-3 text-sm font-bold text-bg1 transition-all hover:opacity-85 disabled:opacity-50"
        >
          {status === "sending" ? t("contact.sending") : t("contact.send")}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-accent1">
            {t("contact.success")}
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            {t("contact.error")}
          </p>
        )}
      </form>

      {/* Direct links */}
      <div className="mt-10 border-t border-white/7 pt-8">
        <p className="mb-4 text-sm text-white/40">{t("contact.orReach")}</p>
        <div className="space-y-3">
          <a
            href="mailto:omercayirtemo@gmail.com"
            className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-accent1"
          >
            <span className="text-lg">✉️</span> omercayirtemo@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/omercayir01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-accent1"
          >
            <span className="text-lg">💼</span> linkedin.com/in/omercayir01
          </a>
          <a
            href="https://github.com/omertemo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-accent1"
          >
            <span className="text-lg">🐙</span> github.com/omertemo
          </a>
        </div>
      </div>
    </div>
  );
}
