// app/referanslar/page.tsx
import SchemaReferencesPage from "@/components/seo/pages/SchemaReferencesPage";
import { getPageMetadata } from "@/lib/metadata";
import ReferencesSection from "./ReferenceContent";

// Statik sayfa generation
export const dynamic = "error";
export const revalidate = false;

// Statik generation için
export function generateStaticParams() {
  return [{}]; // Ana sayfa için boş params
}

export const metadata = getPageMetadata("/referanslar");

export default function ReferencesPage() {
  return (
    <>
      <SchemaReferencesPage />
      <ReferencesSection />
    </>
  );
}
