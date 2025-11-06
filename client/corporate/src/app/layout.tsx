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
  display: "swap", // ✅ fontDisplay burada
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/settings/favicon.svg"
        />
        {/* Critical Hero Images Preload */}
        <link
          rel="preload"
          as="image"
          href="/images/home/hero.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/about/hero-about.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/project/hero-projects.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/service/hero-services.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/reference/hero-reference.webp"
          type="image/webp"
        />

        {/* Performance Optimizations */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Resource hints for static assets */}
        <link rel="prefetch" href="/images/settings/logo.webp" />
        <link rel="prefetch" href="/videos/hero.webm" />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden transition-colors duration-300`}
        style={{ minWidth: 0 }}
      >
        <LanguageProvider>
          <Navbar />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
          <GoogleScripts />
          <CookieBanner />
          <SchemaLocalBusiness />
          <SchemaSiteNavigation />
        </LanguageProvider>
      </body>
    </html>
  );
}
