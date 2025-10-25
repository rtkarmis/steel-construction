import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import SchemaContact from "@/components/seo/SchemaContact";
import { buildContactBreadcrumb } from "@/lib/breadcrumbs";
import { getPageMetadata } from "@/lib/metadata";
import ContactContent from "./ContactContent";

export const metadata = getPageMetadata("/iletisim");

const ContactPage = () => {
  return (
    <>
      <SchemaContact />
      <SchemaBreadcrumb items={buildContactBreadcrumb()} />
      <ContactContent />
    </>
  );
};

export default ContactPage;
