// app/referanslar/page.tsx
import SchemaReferencesPage from "@/components/seo/pages/SchemaReferencesPage";
import { getPageMetadata } from "@/lib/metadata";
import ReferencesSection from "./ReferenceContent";

// Statik sayfa generation
export const dynamic = "error";
export const revalidate = false;
export const metadata = getPageMetadata("/referanslar");

export default function ReferencesPage() {
  return (
    <>
      <SchemaReferencesPage />
      <ReferencesSection />
    </>
  );
}
