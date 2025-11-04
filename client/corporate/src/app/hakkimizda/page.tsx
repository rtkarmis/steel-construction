import SchemaAboutPage from "@/components/seo/pages/SchemaAboutPage";
import { getPageMetadata } from "@/lib/metadata";
import AboutContent from "./AboutContent";

export const dynamic = "force-static"; // SSG
export const metadata = getPageMetadata("/hakkimizda");
export default function AboutPage() {
  return (
    <>
      <SchemaAboutPage />
      <AboutContent />
    </>
  );
}
