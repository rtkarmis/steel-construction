import SchemaProjectsPage from "@/components/seo/pages/SchemaProjectsPage";
import { projects } from "@/data/project";
import { getPageMetadata } from "@/lib/metadata";
import ProjectsContent from "./ProjectsContent";

export const dynamic = "force-static";
export const metadata = getPageMetadata("/projeler");

export default function ProjectsPage() {
  return (
    <>
      <SchemaProjectsPage projects={projects} />
      <ProjectsContent />
    </>
  );
}
