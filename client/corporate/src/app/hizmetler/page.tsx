import SchemaServicesPage from "@/components/seo/pages/SchemaServicesPage";
import { services } from "@/data/service";
import { getPageMetadata } from "@/lib/metadata";
import ServicesContent from "./ServicesContent";

export const dynamic = "error";
export const revalidate = false;

export const metadata = getPageMetadata("/hizmetler");

export default function ServicesPage() {
  return (
    <>
      <SchemaServicesPage services={services} />
      <ServicesContent />
    </>
  );
}
