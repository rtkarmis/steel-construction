import CookieBanner from "@/components/cookie/CookieBanner";
import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";
import Navbar from "@/components/layout/Navbar";
import GoogleScripts from "@/components/seo/GoogleScripts";
import SchemaLocalBusiness from "@/components/seo/SchemaLocalBusiness";
import SchemaSiteNavigation from "@/components/seo/SchemaSiteNavigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { defaultMetadata } from "@/lib/seo";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // ✅ Modern font loading
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="overflow-x-hidden">
      <head>
        {/* 🔹 Favicon */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="/images/settings/favicon.svg"
        />

        {/* 🔹 Font preconnects (font preload değil!) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* 🔹 DNS prefetch — third-party kaynaklar */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.gtranslate.net" />

        {/* 🔹 Preconnect — potansiyel CDN’ler */}
        <link rel="preconnect" href="https://vercel.app" />
        <link rel="preconnect" href="https://cdn.gtranslate.net" />

        {/* 🔹 Prefetch — düşük öncelikli kaynaklar */}
        <link rel="prefetch" href="/images/settings/logo.webp" />
        <link rel="prefetch" href="/videos/hero.webm" />
        <link rel="prefetch" href="/images/home/hero.webp" />
      </head>

      <body
        className={`${inter.className} overflow-x-hidden transition-colors duration-300`}
        style={{ minWidth: 0 }}
      >
        <LanguageProvider>
          {/* Global Layout */}
          <Navbar />
          <MainWrapper>{children}</MainWrapper>
          <Footer />

          {/* Global Scripts & Schemas */}
          <GoogleScripts />
          <SchemaLocalBusiness />
          <SchemaSiteNavigation />

          {/* Cookie Consent */}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
