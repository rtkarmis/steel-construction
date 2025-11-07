import SchemaServicesPage from "@/components/seo/pages/SchemaServicesPage";
import { services } from "@/data/service";
import { getPageMetadata } from "@/lib/metadata";
import ServicesContent from "./ServicesContent";

// Statik sayfa zorlaması
export const dynamic = "error";
export const revalidate = false;

// Statik generation için
export function generateStaticParams() {
  return [{}]; // Ana sayfa için boş params
}

export const metadata = getPageMetadata("/hizmetler");

export default function ServicesPage() {
  return (
    <>
      {/* Critical resource preload for services page */}
      <link
        rel="preload"
        as="image"
        href="/images/service/hero-services.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <SchemaServicesPage services={services} />
      <ServicesContent />
    </>
  );
}
