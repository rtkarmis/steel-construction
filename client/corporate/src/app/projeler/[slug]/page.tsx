import SchemaProjectDetailPage from "@/components/seo/pages/SchemaProjectDetailPage";
import { projects } from "@/data/project";
import { getPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ProjectDetailContent from "./ProjectDetailContent";

// Tamamen statik sayfa
export const dynamic = "error";
export const revalidate = false;

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug.replace("/projeler/", ""),
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.find((p) => {
    const projectSlug = p.slug.replace("/projeler/", "");
    return projectSlug === slug;
  });

  if (!project) return getPageMetadata("/projeler");

  return getPageMetadata(project.slug);
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const project = projects.find((p) => {
    const projectSlug = p.slug.replace("/projeler/", "");
    return projectSlug === slug;
  });

  if (!project) {
    return notFound();
  }

  return (
    <>
      <SchemaProjectDetailPage project={project} />
      <ProjectDetailContent project={project} />
    </>
  );
}
