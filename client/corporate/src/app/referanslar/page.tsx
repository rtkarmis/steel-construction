// app/referanslar/page.tsx
import SchemaReferencesPage from "@/components/seo/pages/SchemaReferencesPage";
import { getPageMetadata } from "@/lib/metadata";
import ReferencesSection from "./ReferenceContent";

export const metadata = getPageMetadata("/referanslar");

export default function ReferencesPage() {
  return (
    <>
      <SchemaReferencesPage />
      <ReferencesSection />
    </>
  );
}
