"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomePageServices } from "@/data/service";
import { m } from "framer-motion";
import * as Icons from "lucide-react";
import Link from "next/link";

interface ServicePreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
  staggerContainer: {
    hidden: {};
    visible: { transition: { staggerChildren: number } };
  };
}

const ServicesPreview = ({ fadeUp, staggerContainer }: ServicePreviewProps) => {
  const { getPage, language } = useLanguage();

  // Anasayfa için sınırlı sayıda hizmet al (4 adet)
  const services = getHomePageServices(3);

  return (
    <m.section variants={fadeUp} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {getPage("home", "services.title")}
        </h2>
        <p className="mt-3 text-text/70 max-w-3xl mx-auto">
          {getPage("home", "services.subtitle")}
        </p>

        <m.div
          variants={staggerContainer}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s) => {
            const Icon = Icons[
              s.icon as keyof typeof Icons
            ] as React.ComponentType<any>;

            return (
              <m.div
                key={s.key}
                variants={fadeUp}
                className="group bg-surface rounded-2xl p-8 text-left shadow-sm hover:shadow-md border border-border/60 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 mb-4">
                  {Icon && <Icon className="w-6 h-6 text-secondary" />}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                  {getPage("service", `services.items.${s.key}.name`) ||
                    s.translations[language].name}
                </h3>
                <p className="mt-2 text-sm text-text/70">
                  {getPage("service", `services.items.${s.key}.description`) ||
                    s.translations[language].description}
                </p>

                {/* Link */}
                <Link
                  href={s.slug}
                  className="inline-block mt-4 text-secondary font-medium hover:underline"
                >
                  {getPage("service", "services.detailButton")} →
                </Link>
              </m.div>
            );
          })}
        </m.div>

        {/* View All Button */}
        <div className="mt-10">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            {getPage("home", "services.viewAllButton")}
          </Link>
        </div>
      </div>
    </m.section>
  );
};

export default ServicesPreview;
