"use client";
import CertificatesStats from "@/components/about/CertificatesStats";
import CorporateCTA from "@/components/about/CorporateCTA";
import HeroAbout from "@/components/about/HeroAbout";
import StoryAbout from "@/components/about/StoryAbout";
import TeamSection from "@/components/about/TeamSection";
import ValuesBand from "@/components/about/ValuesBand";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getBreadcrumbsForSchema,
  getBreadcrumbsForUI,
} from "@/lib/breadcrumbs";

const AboutContent = () => {
  const { getNavigation } = useLanguage();

  // Schema için Türkçe linkler (İngilizce sayfalar yok)
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/hakkimizda");

  // UI için çeviri desteği
  const uiBreadcrumbs = getBreadcrumbsForUI("/hakkimizda", getNavigation);

  return (
    <div className="min-h-screen bg-background text-text">
      <HeroAbout />
      <SchemaBreadcrumb items={schemaBreadcrumbs} />
      {/* Breadcrumb - HeroAbout section'ın altında */}
      <div className="bg-background border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Breadcrumb items={uiBreadcrumbs} />
        </div>
      </div>

      <StoryAbout />
      <ValuesBand />
      <TeamSection />
      <CertificatesStats />
      <CorporateCTA />
    </div>
  );
};

export default AboutContent;
