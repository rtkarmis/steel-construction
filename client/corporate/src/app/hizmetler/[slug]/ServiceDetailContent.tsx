"use client";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroImage from "@/components/ui/HeroImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { Service } from "@/types/service";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailContent({
  service,
}: {
  service: Service;
}) {
  const { getPage, language, getNavigation } = useLanguage();

  // Get service name from locales services
  const getServiceName = () => {
    try {
      const serviceName = getPage(
        "service",
        `services.items.${service.key}.name`
      );
      return serviceName || service.translations[language].name;
    } catch (error) {
      return service.translations[language].name;
    }
  };

  // Get service detail description from locales services
  const getServiceDetailDescription = () => {
    try {
      const serviceDetailDesc = getPage(
        "service",
        `services.items.${service.key}.detailDescription`
      );
      return (
        serviceDetailDesc || service.translations[language].detailDescription
      );
    } catch (error) {
      return service.translations[language].detailDescription;
    }
  };

  // Breadcrumb setup - Manuel olarak service detail için
  const schemaBreadcrumbs = [
    {
      label: "Ana Sayfa",
      href: "/",
    },
    {
      label: "Hizmetlerimiz",
      href: "/hizmetler",
    },
    {
      label: service.translations.tr.name,
      href: service.slug,
      isActive: true,
    },
  ];

  const uiBreadcrumbs = [
    {
      label: getNavigation("navigation.home"),
      href: "/",
    },
    {
      label: getNavigation("navigation.services"),
      href: "/hizmetler",
    },
    {
      label: getServiceName(),
      href: service.slug,
      isActive: true,
    },
  ];

  // Helper function to handle {{name}} interpolation
  const getInterpolatedTitle = () => {
    try {
      const titleTemplate = getPage("serviceDetail", "overview.title");
      const serviceName = getServiceName();
      if (!titleTemplate || titleTemplate === "overview.title") {
        return `${serviceName} Hakkında`;
      }
      return titleTemplate.replace("{{name}}", serviceName);
    } catch (error) {
      console.error("Error getting interpolated title:", error);
      return `${getServiceName()} Hakkında`;
    }
  };

  // Safe translation getter with better fallback handling
  const getSafeTranslation = (key: string, fallback: string) => {
    try {
      const translation = getPage("serviceDetail", key);
      // Check if translation exists and is not just returning the key
      if (translation && translation !== key && translation.trim() !== "") {
        return translation;
      }
      return fallback;
    } catch (error) {
      console.error(`Error getting translation for ${key}:`, error);
      return fallback;
    }
  };

  return (
    <section className="bg-background text-text min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <HeroImage
          src={`/images/service/${service.key}/hero.webp`}
          alt={getServiceName()}
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
          {getServiceName()}
        </h1>
      </div>
      {/* Schema Breadcrumb */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />
      {/* UI Breadcrumb */}
      <div className="bg-background/60 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Breadcrumb items={uiBreadcrumbs} />
        </div>
      </div>
      {/* Description */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {getInterpolatedTitle()}
          </h2>
          <p className="text-text/80 leading-relaxed mb-6">
            {getServiceDetailDescription()}
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
          >
            {getSafeTranslation("cta.text", "İletişime Geçin")}{" "}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="relative h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={`/images/service/${service.key}/detail.webp`}
            alt={getServiceName()}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
