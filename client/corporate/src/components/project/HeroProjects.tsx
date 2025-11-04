"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function HeroProjects() {
  const { getPage } = useLanguage();
  return (
    <section className="relative h-[50vh] flex items-center justify-center text-center bg-primary text-white overflow-hidden">
      {/* 🔹 Background Image */}
      <Image
        src="/images/project/hero-projects.webp"
        alt={getPage("project", "hero.title")}
        fill
        priority
        className="object-cover"
      />

      {/* 🔸 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* 🔹 Content */}
      <div className="relative z-10 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          {getPage("project", "hero.title")}
        </h1>
        <p className="mt-4 text-white/90 text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          {getPage("project", "hero.subtitle")}
        </p>
      </div>
    </section>
  );
}
