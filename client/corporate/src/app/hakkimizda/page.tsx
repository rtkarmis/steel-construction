import SchemaAboutPage from "@/components/seo/pages/SchemaAboutPage";
import { getPageMetadata } from "@/lib/metadata";
import AboutContent from "./AboutContent";

export const dynamic = "error";
export const revalidate = false;

// Statik generation için
export function generateStaticParams() {
  return [{}]; // Ana sayfa için boş params
}

export const metadata = getPageMetadata("/hakkimizda");

export default function AboutPage() {
  return (
    <>
      {/* Critical resource preload for about page */}
      <link
        rel="preload"
        as="image"
        href="/images/about/hero-about.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <SchemaAboutPage />
      <AboutContent />
    </>
  );
}
