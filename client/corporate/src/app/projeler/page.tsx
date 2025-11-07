import SchemaProjectsPage from "@/components/seo/pages/SchemaProjectsPage";
import { projects } from "@/data/project";
import { getPageMetadata } from "@/lib/metadata";
import ProjectsContent from "./ProjectsContent";

export const dynamic = "error";
export const revalidate = false;

// Statik generation için
export function generateStaticParams() {
  return [{}]; // Ana sayfa için boş params
}

export const metadata = getPageMetadata("/projeler");

export default function ProjectsPage() {
  return (
    <>
      {/* Critical resource preload for projects page */}
      <link
        rel="preload"
        as="image"
        href="/images/project/hero-projects.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <SchemaProjectsPage projects={projects} />
      <ProjectsContent />
    </>
  );
}
