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
