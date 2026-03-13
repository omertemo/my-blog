export type Lang = "tr" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  tr: {
    // Nav
    "nav.blog": "Blog",
    "nav.cv": "CV",
    "nav.about": "Hakkımda",
    "nav.contact": "İletişim",

    // Hero
    "hero.greeting": "Merhaba, ben",
    "hero.lead":
      "Data Engineer & Full-Stack Developer. Gerçek zamanlı veri sistemleri, modern web uygulamaları ve arada bir de kişisel düşünceler üzerine yazıyorum.",
    "hero.cvBtn": "CV'mi Gör",
    "hero.status": "İstanbul'da çalışıyor",

    // Blog
    "blog.pagetitle": "Blog",
    "blog.recent": "Son Yazılar",
    "blog.viewAll": "Tümünü gör →",
    "blog.readMore": "Oku →",
    "blog.comingSoon": "Yakında",
    "blog.minRead": "dk okuma",
    "blog.empty": "Henüz yayınlanmış yazı yok.",
    "blog.backToList": "← Blog'a Dön",

    // About
    "about.title": "Hakkımda",
    "about.subtitle": "Veri & Kod Dünyasından",
    "about.bio1":
      "Karadeniz Teknik Üniversitesi Bilgisayar Mühendisliği mezunuyum. IGA – IST Systems bünyesinde Veri Mühendisi olarak çalışıyor, aynı zamanda Full-Stack projeler geliştiriyorum.",
    "about.bio2":
      "Apache Kafka, Spark ve Airflow ile gerçek zamanlı ve batch veri işleme süreçleri tasarlıyorum. JavaScript/React ve Python tarafında da aktif olarak kod yazıyorum.",
    "about.bio3":
      "Bu blogda teknik notlarımı, öğrendiklerimi ve zaman zaman kişisel düşüncelerimi paylaşıyorum.",
    "about.techTitle": "Teknoloji Yığını",
    "about.education": "Eğitim",
    "about.eduSchool": "Karadeniz Teknik Üniversitesi",
    "about.eduDept": "Bilgisayar Mühendisliği",
    "about.eduYear": "2018 – 2023",
    "about.interests": "İlgi Alanları",

    // Contact
    "contact.title": "İletişim",
    "contact.subtitle": "Bir şey sormak ya da konuşmak ister misin?",
    "contact.namePlaceholder": "Adın",
    "contact.emailPlaceholder": "E-posta adresin",
    "contact.msgPlaceholder": "Mesajın...",
    "contact.send": "Gönder",
    "contact.sending": "Gönderiliyor...",
    "contact.success": "Mesajın iletildi, teşekkürler!",
    "contact.error": "Bir hata oluştu, tekrar dene.",
    "contact.orReach": "ya da direkt ulaş:",

    // CV
    "cv.backHome": "Ana Sayfaya Dön",
    "cv.title": "Ömer Çayır — CV",
    "cv.role": "Data Engineer • Full-Stack Developer",
    "cv.about": "Hakkımda",
    "cv.aboutText":
      "Karadeniz Teknik Üniversitesi Bilgisayar Mühendisliği mezunuyum. IGA – IST Systems bünyesinde Veri Mühendisi olarak Kafka, Spark, Airflow ve Kubernetes ile gerçek zamanlı ve batch veri boru hatları geliştiriyor; React ve Node.js ile uçtan uca tam yığın çözümler üretiyorum. ETL mimarisi, bulut-yerel dönüşüm ve operasyonel gösterge panellerinin tasarımı başlıca çalışma alanlarım.",
    "cv.contact": "İletişim",
    "cv.experience": "Deneyim",
    "cv.skills": "Yetenekler",
    "cv.projects": "Projeler",
    "cv.languages": "Diller",
    "cv.present": "Hâlen",
    "cv.downloadPdf": "PDF İndir",
    "cv.certifications": "Sertifikalar & Eğitimler",

    // Footer
    "footer.rights": "Tüm Hakları Saklıdır",
  },
  en: {
    // Nav
    "nav.blog": "Blog",
    "nav.cv": "Resume",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hey there, I'm",
    "hero.lead":
      "Data Engineer & Full-Stack Developer. I write about real-time data systems, modern web apps, and occasionally personal thoughts.",
    "hero.cvBtn": "View Resume",
    "hero.status": "Working in Istanbul",

    // Blog
    "blog.pagetitle": "Blog",
    "blog.recent": "Recent Posts",
    "blog.viewAll": "View all →",
    "blog.readMore": "Read →",
    "blog.comingSoon": "Coming Soon",
    "blog.minRead": "min read",
    "blog.empty": "No published posts yet.",
    "blog.backToList": "← Back to Blog",

    // About
    "about.title": "About",
    "about.subtitle": "From the World of Data & Code",
    "about.bio1":
      "I'm a Computer Engineering graduate from Karadeniz Technical University. I work as a Data Engineer at IGA – IST Systems while also developing Full-Stack projects.",
    "about.bio2":
      "I design real-time and batch data pipelines using Apache Kafka, Spark, and Airflow. I also actively write code on the JavaScript/React and Python side.",
    "about.bio3":
      "On this blog I share technical notes, things I learn, and occasionally personal thoughts.",
    "about.techTitle": "Tech Stack",
    "about.education": "Education",
    "about.eduSchool": "Karadeniz Technical University",
    "about.eduDept": "Computer Engineering",
    "about.eduYear": "2018 – 2023",
    "about.interests": "Interests",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Want to ask something or have a chat?",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "Your e-mail",
    "contact.msgPlaceholder": "Your message...",
    "contact.send": "Send",
    "contact.sending": "Sending...",
    "contact.success": "Message sent, thanks!",
    "contact.error": "Something went wrong, please try again.",
    "contact.orReach": "or reach out directly:",

    // CV
    "cv.backHome": "Back to Home",
    "cv.title": "Ömer Çayır — Resume",
    "cv.role": "Data Engineer • Full-Stack Developer",
    "cv.about": "About",
    "cv.aboutText":
      "I'm a Computer Engineering graduate from Karadeniz Technical University. As a Data Engineer at IGA – IST Systems, I build real-time and batch data pipelines with Kafka, Spark, Airflow, and Kubernetes, while delivering end-to-end full-stack solutions with React and Node.js. ETL architecture, cloud-native migrations, and operational dashboard design are my primary areas of focus.",
    "cv.contact": "Contact",
    "cv.experience": "Experience",
    "cv.skills": "Skills",
    "cv.projects": "Projects",
    "cv.languages": "Languages",
    "cv.present": "Present",
    "cv.downloadPdf": "Download PDF",
    "cv.certifications": "Certifications & Training",

    // Footer
    "footer.rights": "All Rights Reserved",
  },
};
