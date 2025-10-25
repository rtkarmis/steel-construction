import SchemaAbout from "@/components/seo/SchemaAbout";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import { buildAboutBreadcrumb } from "@/lib/breadcrumbs";
import { getPageMetadata } from "@/lib/metadata";
import AboutContent from "./AboutContent";

export const metadata = getPageMetadata("/hakkimizda");

const AboutPage = () => {
  return (
    <>
      <SchemaAbout />
      <SchemaBreadcrumb items={buildAboutBreadcrumb()} />
      <AboutContent />
    </>
  );
};
export default AboutPage;
