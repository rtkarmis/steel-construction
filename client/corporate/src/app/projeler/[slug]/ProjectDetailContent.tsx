"use client";

import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { Project } from "@/types/project";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ProjectDetail({ project }: { project: Project }) {
  const { getPage, getNavigation, language } = useLanguage();
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const getProjectName = () =>
    getPage("project", `projects.items.${project.key}.name`) ||
    project.translations[language].name;

  const getProjectDescription = () =>
    getPage("project", `projects.items.${project.key}.description`) ||
    project.translations[language].description;

  const getProjectLocation = () =>
    getPage("project", `projects.items.${project.key}.location`) ||
    project.translations[language].location;

  // Get project references from locales
  const getProjectReferences = () => {
    try {
      const localesReferences = getPage(
        "project",
        `projects.items.${project.key}.references`
      );
      return Array.isArray(localesReferences) ? localesReferences : [];
    } catch (error) {
      return [];
    }
  };

  const getCategoryTranslation = () => {
    const categoryMap: Record<string, string> = {
      "Endüstriyel Tesis": "industrial",
      "Depo & Lojistik": "warehouse",
      Hangar: "hangar",
      "Ticari Yapı": "commercial",
      Prefabrik: "prefab",
      "Çelik Konstrüksiyon": "steel",
    };
    const key = categoryMap[project.category];
    return key
      ? getPage("project", `categories.${key}`) || project.category
      : project.category;
  };

  const schemaBreadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Projelerimiz", href: "/projeler" },
    { label: getProjectName(), href: project.slug, isActive: true },
  ];

  const uiBreadcrumbs = [
    { label: getNavigation("navigation.home"), href: "/" },
    { label: getNavigation("navigation.projects"), href: "/projeler" },
    { label: getProjectName(), href: project.slug, isActive: true },
  ];

  const mainSettings = {
    asNavFor: nav2 as Slider,
    ref: (slider: Slider) => setNav1(slider),
    arrows: false,
    fade: true,
  };

  const thumbSettings = {
    asNavFor: nav1 as Slider,
    ref: (slider: Slider) => setNav2(slider),
    slidesToShow: Math.min(project.gallery.length, 5),
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <section className="bg-[#F3F4F6] text-gray-800 min-h-screen">
      {/* 🧭 Breadcrumb */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Breadcrumb items={uiBreadcrumbs} />
        </div>
      </div>

      {/* 📱 Responsive Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 🖼️ Görsel Slider */}
        <div>
          <Slider {...mainSettings}>
            {project.gallery.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${getProjectName()} - ${i + 1}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>

          <div className="mt-4">
            <Slider {...thumbSettings}>
              {project.gallery.map((img, i) => (
                <div key={i} className="px-1">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 hover:border-[#1E3A8A] transition-all">
                    <Image
                      src={img}
                      alt={`${getProjectName()} thumb ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* 📄 Sağ Taraf Bilgiler */}
        <div className="flex flex-col">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
              {getProjectName()}
            </h1>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-600 uppercase tracking-wide">
                  {getPage("project", "projects.detail.location")}
                </span>
                <span className="text-gray-800">{getProjectLocation()}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-600 uppercase tracking-wide">
                  {getPage("project", "projects.detail.year")}
                </span>
                <span className="text-gray-800">{project.year}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-600 uppercase tracking-wide">
                  {getPage("project", "projects.detail.category")}
                </span>
                <span className="text-gray-800">
                  {getCategoryTranslation()}
                </span>
              </div>

              {project.references && project.references.length > 0 && (
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-600 uppercase tracking-wide">
                    {getPage("project", "projects.detail.partners") ||
                      "İş Ortakları"}
                  </span>
                  <div className="flex flex-wrap gap-2 items-center">
                    {getProjectReferences().map((ref: any, index: number) => {
                      if (!ref) return null;
                      return (
                        <div
                          key={index}
                          className="relative w-16 h-8 rounded bg-white border border-gray-200 p-1 flex items-center justify-center shadow-sm"
                        >
                          <Image
                            src={ref.logo}
                            alt={ref.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
              {getPage("project", "projects.detail.about") || "Proje Hakkında"}
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              {getProjectDescription()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
