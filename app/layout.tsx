import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Ömer ÇAYIR — Blog & Portfolio",
  description:
    "Veri entegrasyonu, Full-Stack geliştirme ve kişisel düşünceler üzerine yazılar.",
  openGraph: {
    title: "Ömer ÇAYIR — Blog & Portfolio",
    description:
      "Veri entegrasyonu, Full-Stack geliştirme ve kişisel düşünceler üzerine yazılar.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
