import SchemaContactPage from "@/components/seo/pages/SchemaContactPage";
import { getPageMetadata } from "@/lib/metadata";
import ContactContent from "./ContactContent";

// Statik sayfa generation
export const dynamic = "error";
export const revalidate = false;
export const metadata = getPageMetadata("/iletisim");

const ContactPage = () => {
  return (
    <>
      <SchemaContactPage />
      <ContactContent />
    </>
  );
};

export default ContactPage;
