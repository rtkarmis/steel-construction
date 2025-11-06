"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAllProjects } from "@/data/project";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function ProjectsGrid() {
  const { getPage, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Tüm projeleri al
  const projects = getAllProjects();

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

  // Get unique categories from projects
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  // Filter projects based on selected category
  const filteredProjects = useMemo(
    () =>
      selectedCategory === "all"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [projects, selectedCategory]
  );

  // Map category names to translation keys - stable mapping
  const getCategoryTranslationKey = (category: string) => {
    const categoryMap: Record<string, string> = {
      "Endüstriyel Tesis": "industrial",
      "Endüstriyel Yapı": "industrial",
      "Depo & Lojistik": "warehouse",
      "Depo & Antrepo Yapıları": "warehouse",
      "Havacılık & Endüstriyel": "hangar",
      Hangar: "hangar",
      "Ticari Yapı": "commercial",
      Prefabrik: "prefab",
      "Çelik Konstrüksiyon": "steel",
    };
    return categoryMap[category] || "industrial";
  };

  // Safe translation function with fallback
  const getCategoryDisplayName = (category: string) => {
    if (category === "all") {
      return getPage("project", "categories.all") || "Tümü";
    }

    const translationKey = getCategoryTranslationKey(category);
    const translated = getPage("project", `categories.${translationKey}`);

    // If translation fails, return the original category name
    if (!translated || translated.includes("categories.")) {
      return category;
    }

    return translated;
  };

  return (
    <section className="py-4 md:py-16 bg-surface border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {getPage("project", "projects.title")}
          </h2>
          <p className="text-text/70 max-w-3xl mx-auto mb-8">
            {getPage("project", "projects.subtitle")}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-surface text-text/70 md:hover:bg-primary/10 md:hover:text-primary"
                }`}
              >
                {getCategoryDisplayName(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <Link
              key={p.id}
              href={p.slug}
              className="group bg-surface rounded-2xl shadow-sm md:hover:shadow-lg transition-all border border-border/40 overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={p.gallery[0]}
                  alt={getProjectName(p)}
                  fill
                  className="object-cover md:group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary md:group-hover:text-secondary transition-colors">
                  {getProjectName(p)}
                </h3>
                <p className="text-sm text-text/70 mt-2 line-clamp-2">
                  {getProjectDescription(p)}
                </p>
                <div className="text-xs text-text/50 mt-3 flex items-center justify-between">
                  <span>
                    {getProjectLocation(p)} • {p.year}
                  </span>
                  <span className="text-secondary font-medium">
                    {getPage("project", "projects.detailButton")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text/60">
              Bu kategoride henüz proje bulunmuyor.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
