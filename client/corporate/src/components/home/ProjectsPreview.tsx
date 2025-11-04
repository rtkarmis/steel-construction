"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomePageProjects } from "@/data/project";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectPreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
  staggerContainer: {
    hidden: {};
    visible: { transition: { staggerChildren: number } };
  };
}

const ProjectsPreview = ({ fadeUp, staggerContainer }: ProjectPreviewProps) => {
  const { getPage, language } = useLanguage();

  // Anasayfa için sınırlı sayıda proje al (3 adet)
  const projects = getHomePageProjects(3);

  // Get project name from locales
  const getProjectName = (project: any) => {
    try {
      const projectName = getPage(
        "project",
        `projects.items.${project.key}.name`
      );
      return projectName || project.translations[language].name;
    } catch (error) {
      return project.translations[language].name;
    }
  };

  // Get project description from locales
  const getProjectDescription = (project: any) => {
    try {
      const projectDesc = getPage(
        "project",
        `projects.items.${project.key}.description`
      );
      return projectDesc || project.translations[language].description;
    } catch (error) {
      return project.translations[language].description;
    }
  };

  // Get project location from locales
  const getProjectLocation = (project: any) => {
    try {
      const projectLocation = getPage(
        "project",
        `projects.items.${project.key}.location`
      );
      return projectLocation || project.translations[language].location;
    } catch (error) {
      return project.translations[language].location;
    }
  };

  return (
    <m.section variants={fadeUp} className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-10">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {getPage("home", "projects.title")}
              </h2>
              <Link
                href="/projeler"
                className="text-secondary hover:underline font-medium"
              >
                {getPage("home", "projects.viewAllButton")}
              </Link>
            </div>
            <p className="text-text/70">
              {getPage("home", "projects.subtitle")}
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-primary">
                {getPage("home", "projects.title")}
              </h2>
              <Link
                href="/projeler"
                className="text-secondary hover:underline font-medium text-sm"
              >
                {getPage("home", "projects.viewAllButton")}
              </Link>
            </div>
            <p className="text-text/70 text-sm">
              {getPage("home", "projects.subtitle")}
            </p>
          </div>
        </div>

        <m.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <m.article
              key={p.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl overflow-hidden border border-border/70 bg-background shadow-sm hover:shadow-md transition group"
            >
              <div className="relative h-56">
                <Image
                  src={p.gallery[0]}
                  alt={getProjectName(p)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                  {getProjectName(p)}
                </h3>
                <p className="text-sm text-text/70 mt-1 line-clamp-2">
                  {getProjectDescription(p)}
                </p>
                <div className="text-xs text-text/50 mt-2">
                  {getProjectLocation(p)} • {p.year}
                </div>
                <Link
                  href={p.slug}
                  className="inline-block mt-3 text-secondary font-medium hover:underline"
                >
                  {getPage("project", "projects.detailButton")}
                </Link>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </m.section>
  );
};

export default ProjectsPreview;
