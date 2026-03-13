"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  { label: "Programming: Python, JavaScript, ReactJS, NodeJS", pct: 90 },
  { label: "Data & Streaming: Kafka, Spark, Telegraf", pct: 82 },
  { label: "Orchestration & Infra: Airflow, Docker, Kubernetes", pct: 78 },
  { label: "Databases: Greenplum, PostgreSQL, MongoDB, Redis", pct: 80 },
  { label: "Linux, Shell (Bash/Zsh), Git", pct: 82 },
];

const tags = [
  "Python",
  "React",
  "Node.js",
  "Apache Kafka",
  "Spark",
  "Airflow",
  "Kubernetes",
];

export default function CVPage() {
  const { t, lang } = useLanguage();

  const experience = [
    {
      title: {
        tr: "IGA – IST Systems — Veri Mühendisi",
        en: "IGA – IST Systems — Data Engineer",
      },
      date: {
        tr: `Mayıs 2024 – ${t("cv.present")}`,
        en: `May 2024 – ${t("cv.present")}`,
      },
      items: {
        tr: [
          "Farklı operasyonel birimlerin ihtiyaçlarına yönelik uçtan uca tam yığın gösterge panelleri tasarladım; React/Node.js ve Tableau tabanlı çözümler için Python, Spark ve Airflow ile ölçeklenebilir veri boru hatları geliştirdim.",
          "F1RST uygulamasının geliştirilmesine katkıda bulundum: özel React bileşenleri oluşturdum, AMS veri akışlarını entegre ettim; Kafka, Spark ve Redis ile gerçek zamanlı veri işlemeyi sağladım.",
          "ASMGCS ve AMS raporlaması için Telegraf, Kafka, Spark, MongoDB ve Python kullanarak yüksek kapasiteli ETL boru hatları inşa ettim.",
          "Kubernetes tabanlı bulut-yerel mimariye eski ETL boru hatlarını taşıdım; Airflow ile orkestrasyon sağlayarak ölçeklenebilir ve hata toleranslı altyapı kurdum.",
          "Teknik: Python, React, Node.js, Apache Kafka, Spark, Airflow, Kubernetes, Redis, Telegraf, MongoDB, Tableau",
        ],
        en: [
          "Designed end-to-end full-stack dashboards for various operational units; delivered reliable data pipelines for React/Node.js and Tableau-based solutions using Python, Spark, and Airflow.",
          "Enhanced the FIRST application: built custom React components, integrated AMS data streams, and ensured real-time data processing via Kafka, Spark, and Redis.",
          "Built high-throughput ETL pipelines for ASMGCS and AMS reporting using Telegraf, Kafka, Spark, MongoDB, and Python.",
          "Migrated legacy ETL workflows to a cloud-native architecture on Kubernetes, orchestrated via Airflow for scalability and fault tolerance.",
          "Stack: Python, React, Node.js, Apache Kafka, Spark, Airflow, Kubernetes, Redis, Telegraf, MongoDB, Tableau",
        ],
      },
    },
    {
      title: {
        tr: "İGA İstanbul Havalimanı — Veri Entegrasyon Uzman Yardımcısı",
        en: "IGA Istanbul Airport — Data Integration Specialist",
      },
      date: {
        tr: "Mart 2023 – Mayıs 2024",
        en: "March 2023 – May 2024",
      },
      items: {
        tr: [
          "F1RST operasyon yönetim platformunu geliştirdim (uçuş yönetimi, ısı haritası, güvenlik modülleri).",
          "Kafka, Spark, Airflow ve PostgreSQL kullanarak veri ambarı mimarisine katkı sağladım.",
          "Gerçek zamanlı ve batch veri entegrasyon süreçleri tasarladım.",
          "Teknik: Python, JavaScript, MERN Stack, Apache Kafka, Spark, Airflow, SQL, NoSQL",
        ],
        en: [
          "Developed the F1RST operations management platform (flight management, heatmap, security modules).",
          "Contributed to data warehouse architecture using Kafka, Spark, Airflow, and PostgreSQL.",
          "Designed real-time and batch data integration pipelines.",
          "Stack: Python, JavaScript, MERN Stack, Apache Kafka, Spark, Airflow, SQL, NoSQL",
        ],
      },
    },
    {
      title: {
        tr: "TÜBİTAK, Trabzon — Star Bursiyer (TÜBİTAK 1001)",
        en: "TÜBİTAK, Trabzon — STAR Scholar (TÜBİTAK 1001)",
      },
      date: { tr: "Mayıs 2022 – Ocak 2023", en: "May 2022 – January 2023" },
      items: {
        tr: [
          "Python ile dinamik G‑Code üreten uygulamalar geliştirdim.",
          "Veri analizi ve görselleştirme üzerine çalıştım (matplotlib, numpy, pandas).",
        ],
        en: [
          "Developed applications generating dynamic G-Code with Python.",
          "Worked on data analysis and visualization (matplotlib, numpy, pandas).",
        ],
      },
    },
    {
      title: {
        tr: "Bordo Bilişim, Samsun — Web Geliştirme Stajyeri",
        en: "Bordo Bilişim, Samsun — Web Development Intern",
      },
      date: { tr: "2021 – 2022", en: "2021 – 2022" },
      items: {
        tr: [
          "MeteorJS ve JavaScript ile küçük ölçekli web projeleri geliştirdim.",
          "Teknik: JavaScript, Bootstrap 5, MongoDB, MeteorJS",
        ],
        en: [
          "Developed small-scale web projects with MeteorJS and JavaScript.",
          "Stack: JavaScript, Bootstrap 5, MongoDB, MeteorJS",
        ],
      },
    },
  ];

  const projects = [
    {
      title: {
        tr: "F1RST – Uçuş Bilgi ve Operasyon Platformu",
        en: "F1RST – Flight Information & Operations Platform",
      },
      date: {
        tr: "İGA İstanbul Havalimanı, Mayıs 2024",
        en: "IGA Istanbul Airport, May 2024",
      },
      items: {
        tr: [
          "MERN Stack ile geliştirilen platform, İstanbul Havalimanı'na gelen/giden uçuşların anlık takibini sağlar.",
          "Gerçek zamanlı veri işleme için Apache Kafka ve Spark ile entegre çalıştı.",
          "Heatmap modülü ile canlı konum verileri analiz edilip operasyon merkezine trafik takibi sağlandı.",
        ],
        en: [
          "Platform built with MERN Stack tracking real-time flight arrivals and departures at Istanbul Airport.",
          "Integrated with Apache Kafka and Spark for real-time data processing.",
          "Heatmap module analyzed live location data to provide traffic monitoring for the operations center.",
        ],
      },
    },
    {
      title: {
        tr: "Veri Entegrasyon Süreçleri",
        en: "Data Integration Pipelines",
      },
      date: {
        tr: "İGA İstanbul Havalimanı, 2023",
        en: "IGA Istanbul Airport, 2023",
      },
      items: {
        tr: [
          "SAP, MSSQL, Excel ve Kafka verileri Airflow ve Spark ile işlenerek PostgreSQL/MongoDB'ye entegre edildi.",
          "Gerçek zamanlı ve batch ETL süreçleri oluşturuldu.",
        ],
        en: [
          "SAP, MSSQL, Excel, and Kafka data processed via Airflow and Spark into PostgreSQL/MongoDB.",
          "Built real-time and batch ETL pipelines.",
        ],
      },
    },
  ];

  const languages = [
    {
      lang: { tr: "Türkçe", en: "Turkish" },
      level: { tr: "Ana Dil", en: "Native" },
    },
    { lang: { tr: "İngilizce", en: "English" }, level: { tr: "B1", en: "B1" } },
    { lang: { tr: "Arapça", en: "Arabic" }, level: { tr: "A1", en: "A1" } },
  ];

  const certifications = [
    {
      name: "Docker",
      issuer: "Gantek Academy",
      date: { tr: "Haziran 2024", en: "Jun 2024" },
    },
    {
      name: "Apache Kafka",
      issuer: "Gantek Academy",
      date: { tr: "Şubat 2025", en: "Feb 2025" },
    },
    {
      name: "Kubernetes",
      issuer: "Gantek Academy",
      date: { tr: "Şubat 2025", en: "Feb 2025" },
    },
    {
      name: { tr: "İleri PostgreSQL", en: "Advanced PostgreSQL" },
      issuer: "Gantek Academy",
      date: { tr: "Kasım 2024", en: "Nov 2024" },
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-6">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/55 transition-all hover:bg-white/7 hover:text-white"
        >
          ← {t("cv.backHome")}
        </Link>
      </div>

      {/* Header */}
      <div className="mb-10 text-center">
        <div className="relative mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border-2 border-accent1/20 bg-bg3">
          <Image
            src="/assets/pp.jpeg"
            alt="Ömer Çayır"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-gradient text-3xl font-bold">Ömer Çayır</h1>
        <p className="mt-1 text-white/55">{t("cv.role")}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent1/15 bg-gradient-to-r from-accent1/10 to-accent2/10 px-3 py-1 text-xs text-white/85"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {/* About — 8 cols */}
        <div className="card-glass rounded-2xl p-6 md:col-span-8">
          <h2 className="mb-4 flex items-center gap-2 border-b border-white/7 pb-3 text-lg font-semibold text-accent1">
            👤 {t("cv.about")}
          </h2>
          <p className="text-sm leading-relaxed text-white/65">
            {t("cv.aboutText")}
          </p>
        </div>

        {/* Contact — 4 cols */}
        <div className="card-glass rounded-2xl p-6 md:col-span-4">
          <h2 className="mb-4 flex items-center gap-2 border-b border-white/7 pb-3 text-lg font-semibold text-accent1">
            📇 {t("cv.contact")}
          </h2>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a
                href="mailto:omercayirtemo@gmail.com"
                className="hover:text-accent1 transition-colors"
              >
                ✉️ omercayirtemo@gmail.com
              </a>
            </li>
            <li>📞 +90 552 279 93 47</li>
            <li>
              <a
                href="https://linkedin.com/in/omercayir01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent1 transition-colors"
              >
                💼 linkedin.com/in/omercayir01
              </a>
            </li>
            <li>
              <a
                href="https://github.com/omertemo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent1 transition-colors"
              >
                🐙 github.com/omertemo
              </a>
            </li>
            <li>
              📍 {lang === "tr" ? "İstanbul, Türkiye" : "Istanbul, Turkey"}
            </li>
          </ul>
        </div>

        {/* Experience — 8 cols */}
        <div className="card-glass rounded-2xl p-6 md:col-span-8">
          <h2 className="mb-5 flex items-center gap-2 border-b border-white/7 pb-3 text-lg font-semibold text-accent1">
            💼 {t("cv.experience")}
          </h2>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-7">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent-gradient border-2 border-bg2" />
                {i < experience.length - 1 && (
                  <div className="absolute left-1.5 top-5 h-full w-0.5 bg-gradient-to-b from-accent1/30 to-transparent" />
                )}
                <p className="font-semibold text-white">{exp.title[lang]}</p>
                <span className="mt-1 inline-block rounded-md bg-gradient-to-r from-accent1/10 to-accent2/10 border border-accent1/15 px-2 py-0.5 text-xs text-white/80">
                  {exp.date[lang]}
                </span>
                <ul className="mt-2 space-y-1 pl-3 text-sm text-white/55">
                  {exp.items[lang].map((item, j) => (
                    <li key={j} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills — 4 cols */}
        <div className="card-glass rounded-2xl p-6 md:col-span-4">
          <h2 className="mb-5 flex items-center gap-2 border-b border-white/7 pb-3 text-lg font-semibold text-accent1">
            ⭐ {t("cv.skills")}
          </h2>
          <div className="space-y-4">
            {skills.map((s) => (
              <div key={s.label}>
                <p className="mb-1 text-sm text-white/75">{s.label}</p>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-accent-gradient"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects — 8 cols */}
        <div className="card-glass rounded-2xl p-6 md:col-span-8">
          <h2 className="mb-5 flex items-center gap-2 border-b border-white/7 pb-3 text-lg font-semibold text-accent1">
            🗂️ {t("cv.projects")}
          </h2>
          <div className="space-y-6">
            {projects.map((proj, i) => (
              <div key={i} className="relative pl-7">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent-gradient border-2 border-bg2" />
                {i < projects.length - 1 && (
                  <div className="absolute left-1.5 top-5 h-full w-0.5 bg-gradient-to-b from-accent1/30 to-transparent" />
                )}
                <p className="font-semibold text-white">{proj.title[lang]}</p>
                <span className="mt-1 inline-block rounded-md bg-gradient-to-r from-accent1/10 to-accent2/10 border border-accent1/15 px-2 py-0.5 text-xs text-white/80">
                  {proj.date[lang]}
                </span>
                <ul className="mt-2 space-y-1 pl-3 text-sm text-white/55">
                  {proj.items[lang].map((item, j) => (
                    <li key={j} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Languages — 4 cols */}
        <div className="card-glass rounded-2xl p-6 md:col-span-4">
          <h2 className="mb-5 flex items-center gap-2 border-b border-white/7 pb-3 text-lg font-semibold text-accent1">
            🌍 {t("cv.languages")}
          </h2>
          <ul className="space-y-4">
            {languages.map((l) => (
              <li
                key={l.lang.tr}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-white/70">{l.lang[lang]}</span>
                <span className="text-accent1 font-semibold">
                  {l.level[lang]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications — full width */}
        <div className="card-glass rounded-2xl p-6 md:col-span-12">
          <h2 className="mb-5 flex items-center gap-2 border-b border-white/7 pb-3 text-lg font-semibold text-accent1">
            🎓 {t("cv.certifications")}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="rounded-xl border border-accent1/15 bg-gradient-to-br from-accent1/10 to-accent2/10 px-4 py-3"
              >
                <p className="font-semibold text-white text-sm">
                  {typeof cert.name === "string" ? cert.name : cert.name[lang]}
                </p>
                <p className="mt-1 text-xs text-white/50">{cert.issuer}</p>
                <p className="mt-1 text-xs text-accent1 font-medium">
                  {cert.date[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
