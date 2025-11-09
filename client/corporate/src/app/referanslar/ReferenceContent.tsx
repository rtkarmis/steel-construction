"use client";

import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroImage from "@/components/ui/HeroImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAllReferences } from "@/data/reference";
import {
  getBreadcrumbsForSchema,
  getBreadcrumbsForUI,
} from "@/lib/breadcrumbs";
import Image from "next/image";
import Link from "next/link";

// ✅ HeroReferences entegre edilmiş versiyon
export default function ReferencesContent() {
  const { getPage, language, getNavigation } = useLanguage();
  const referencesData = getAllReferences();

  // Schema için TR linkleri
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/referanslar");
  // UI için çok dilli breadcrumb
  const uiBreadcrumbs = getBreadcrumbsForUI("/referanslar", getNavigation);

  const getReferenceName = (reference: any) => {
    try {
      const refName = getPage(
        "references",
        `references.items.${reference.key}.name`
      );
      return refName || reference.translations[language].name;
    } catch (error) {
      return reference.translations[language].name;
    }
  };

  const getReferenceDescription = (reference: any) => {
    try {
      const refDesc = getPage(
        "references",
        `references.items.${reference.key}.description`
      );
      return refDesc || reference.translations[language].description;
    } catch (error) {
      return reference.translations[language].description;
    }
  };

  return (
    <div className="min-h-screen bg-background text-text">
      {/* 🔹 HERO SECTION */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <HeroImage
          src="/images/reference/hero-reference.webp"
          alt={getPage("references", "hero.title")}
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
            {getPage("references", "hero.title")}
          </h1>
          <p className="mt-3 text-white/85 max-w-3xl mx-auto">
            {getPage("references", "hero.subtitle")}
          </p>
        </div>
      </section>
      {/* Breadcrumb (Schema + UI) */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />
      <div className="bg-background/60 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Breadcrumb items={uiBreadcrumbs} />
        </div>
      </div>
      {/* 🔸 REFERENCES GRID SECTION */}
      <section className="py-4 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {getPage("references", "section.title")}
          </h2>
          <p className="text-text/70 mt-2 mb-10">
            {getPage("references", "section.subtitle")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
            {referencesData.map((ref) => (
              <div
                key={ref.id}
                className="group bg-white p-6 rounded-xl shadow-sm border border-border/40 hover:shadow-md transition-all flex flex-col items-center justify-center"
              >
                <div className="relative w-32 h-16">
                  <Image
                    src={ref.logo}
                    alt={getReferenceName(ref)}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p
                  className="mt-3 text-[13px] font-medium text-text/80 w-full max-w-full overflow-hidden break-words whitespace-normal text-ellipsis text-center leading-tight"
                  style={{wordBreak: 'break-word', lineHeight: '1.2', fontWeight: 500}}
                >
                  {getReferenceName(ref)}
                </p>
                {ref.website && (
                  <Link
                    href={ref.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs text-secondary hover:underline"
                  >
                    Website
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
