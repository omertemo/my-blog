"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const tech = [
  { label: "JavaScript / TypeScript / Python", pct: 90, icon: "⚡" },
  { label: "React / Node.js", pct: 88, icon: "⚛️" },
  { label: "Kafka / Spark / Telegraf", pct: 82, icon: "🔥" },
  { label: "Airflow / Docker / Kubernetes", pct: 78, icon: "☸️" },
  { label: "Greenplum / PostgreSQL / MongoDB / Redis", pct: 80, icon: "🗄️" },
  { label: "Linux / Bash / Git", pct: 80, icon: "🖥️" },
];

const interests = [
  "Veri Mühendisliği",
  "Açık Kaynak",
  "Mekanik Klavye",
  "Satranç",
  "Hiking",
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent1">
          ömer.dev
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          {t("about.title")}
        </h1>
        <p className="mt-2 text-white/50">{t("about.subtitle")}</p>
      </div>

      {/* Bio */}
      <div className="mb-12 space-y-4 text-base leading-relaxed text-white/65">
        <p>{t("about.bio1")}</p>
        <p>{t("about.bio2")}</p>
        <p>{t("about.bio3")}</p>
      </div>

      {/* Tech stack */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-bold text-white">
          {t("about.techTitle")}
        </h2>
        <div className="space-y-4">
          {tech.map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium text-white/80">
                  {item.icon} {item.label}
                </span>
                <span className="text-white/40">{item.pct}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-accent-gradient"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12 rounded-2xl card-glass p-6">
        <h2 className="mb-4 text-xl font-bold text-white">
          {t("about.education")}
        </h2>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent1/15 text-xl">
            🎓
          </div>
          <div>
            <p className="font-semibold text-white">{t("about.eduSchool")}</p>
            <p className="text-sm text-white/60">{t("about.eduDept")}</p>
            <p className="mt-1 text-xs text-white/40">{t("about.eduYear")}</p>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-white">
          {t("about.interests")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <span
              key={i}
              className="rounded-lg border border-accent2/15 bg-accent2/10 px-3 py-1.5 text-sm text-accent2/90"
            >
              {i}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
