"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function TeamSection() {
  const { getPage } = useLanguage();
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow">
          <Image
            src="/images/about/team-workshop.webp"
            alt="Ekip ve üretim alanı"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-secondary font-semibold uppercase tracking-wider">
            {getPage("about", "team.badge")}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            {getPage("about", "team.title")}
          </h3>
          <p className="text-text/80 leading-relaxed mt-3">
            {getPage("about", "team.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
