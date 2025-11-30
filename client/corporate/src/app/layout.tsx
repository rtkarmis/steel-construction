import CookieBanner from "@/components/cookie/CookieBanner";
import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

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

        {/* 🔹 Critical CSS preload */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        <noscript>
          <link rel="stylesheet" href="/_next/static/css/app/layout.css" />
        </noscript>

        {/* 🔹 Critical font preload */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* 🔹 Critical logo preload - her sayfada gerekli */}
        <link
          rel="preload"
          as="image"
          href="/images/settings/logo.webp"
          type="image/webp"
          fetchPriority="high"
        />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.gtranslate.net" />

        {/* 🔹 Preconnect — potansiyel CDN'ler */}
        <link rel="preconnect" href="https://vercel.app" />
        <link rel="preconnect" href="https://cdn.gtranslate.net" />
      </head>

      <body
        className={`${inter.className} overflow-x-hidden transition-colors duration-300`}
        style={{ minWidth: 0 }}
      >
        <LanguageProvider>
          {/* Scroll to top on route change */}
          <ScrollToTop />

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
