// app/projeler/ProjectsContent.tsx
"use client";

import HeroProjects from "@/components/project/HeroProjects";
import ProjectProcessSection from "@/components/project/ProjectProcessSection";
import ProjectsCTA from "@/components/project/ProjectsCTA";
import ProjectsGrid from "@/components/project/ProjectsGrid";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getBreadcrumbsForSchema,
  getBreadcrumbsForUI,
} from "@/lib/breadcrumbs";

export default function ProjectsContent() {
  const { getNavigation } = useLanguage();

  // Schema için TR linkleri
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/projeler");
  // UI için çok dilli breadcrumb
  const uiBreadcrumbs = getBreadcrumbsForUI("/projeler", getNavigation);

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Hero */}
      <HeroProjects />

      {/* Breadcrumb (Schema + UI) */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />
      <div className="bg-white border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Breadcrumb items={uiBreadcrumbs} />
        </div>
      </div>

      {/* Grid */}
      <ProjectsGrid />
      <ProjectProcessSection />
      <ProjectsCTA />
    </div>
  );
}
