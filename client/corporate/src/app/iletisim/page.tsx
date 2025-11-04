import SchemaContactPage from "@/components/seo/pages/SchemaContactPage";
import { getPageMetadata } from "@/lib/metadata";
import ContactContent from "./ContactContent";

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
