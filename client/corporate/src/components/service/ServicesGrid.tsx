"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Service } from "@/types/service";
import * as Icons from "lucide-react";
import Link from "next/link";

export default function ServicesGrid({ services }: { services: Service[] }) {
  const { getPage, language } = useLanguage();

  return (
    <section className="py-4 md:py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {getPage("service", "services.title")}
        </h2>
        <p className="mt-3 text-text/70 max-w-3xl mx-auto">
          {getPage("service", "services.subtitle")}
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = Icons[
              s.icon as keyof typeof Icons
            ] as React.ComponentType<any>;
            return (
              <Link
                key={s.key}
                href={s.slug}
                className="group bg-background rounded-2xl p-8 text-left shadow-sm border border-border/60 
                           transition-all duration-300 md:hover:shadow-xl md:hover:-translate-y-1 
                           md:hover:border-transparent md:hover:bg-gradient-to-br md:hover:from-primary/5 md:hover:to-secondary/10
                           block cursor-pointer"
              >
                {/* 🔹 Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 mb-4">
                  {Icon && <Icon className="w-6 h-6 text-secondary" />}
                </div>

                {/* 🔸 Title & Description */}
                <h3 className="text-lg font-semibold text-primary md:group-hover:text-secondary transition-colors">
                  {getPage("service", `services.items.${s.key}.name`) ||
                    s.translations[language].name}
                </h3>
                <p className="mt-2 text-sm text-text/70">
                  {getPage("service", `services.items.${s.key}.description`) ||
                    s.translations[language].description}
                </p>

                {/* 🔸 Call to Action */}
                <div className="mt-4 text-secondary font-medium md:group-hover:underline">
                  {getPage("service", "services.detailButton")} →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
