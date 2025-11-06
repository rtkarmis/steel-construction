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
      <SchemaServicesPage services={services} />
      <ServicesContent />
    </>
  );
}
