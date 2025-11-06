import SchemaFAQPage from "@/components/seo/pages/SchemaFAQPage";
import { getAllFAQs } from "@/data/faq";
import { getPageMetadata } from "@/lib/metadata";
import SSSContent from "./SSSContent";

// Statik sayfa generation
export const dynamic = "error";
export const revalidate = false;
export const metadata = getPageMetadata("/sss");

export default function FAQPage() {
  const faqs = getAllFAQs();

  return (
    <>
      <SchemaFAQPage faqs={faqs} />
      <SSSContent />
    </>
  );
}
