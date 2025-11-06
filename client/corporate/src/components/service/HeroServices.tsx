"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroImage from "@/components/ui/HeroImage";

const HeroServices = () => {
  const { getPage } = useLanguage();

  return (
    <section className="relative h-[50vh] flex items-center justify-center text-center bg-primary text-white overflow-hidden">
      {/* 🔹 Background Image */}
      <HeroImage
        src="/images/service/hero-services.webp"
        alt={getPage("service", "hero.title")}
        priority={true}
      />
      {/* 🔸 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* 🔹 Content */}
      <div className="relative z-10 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          {getPage("service", "hero.title")}
        </h1>
        <p className="mt-4 text-white/90 text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          {getPage("service", "hero.subtitle")}
        </p>
      </div>
    </section>
  );
};

export default HeroServices;
