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
    <m.section variants={fadeUp} className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {getPage("home", "services.title")}
          </h2>
          <p className="text-text/70 text-lg lg:text-xl leading-relaxed">
            {getPage("home", "services.subtitle")}
          </p>
        </div>

        <m.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((s) => {
            const Icon = Icons[
              s.icon as keyof typeof Icons
            ] as React.ComponentType<any>;

            return (
              <Link key={s.key} href={s.slug} className="block h-full">
                <m.div
                  variants={fadeUp}
                  className="group bg-surface rounded-2xl p-6 lg:p-8 text-left shadow-sm border border-border/60 transition-all duration-300 flex flex-col h-full cursor-pointer hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/10 mb-6 transition-colors hover:bg-secondary/20">
                    {Icon && <Icon className="w-7 h-7 text-secondary" />}
                  </div>

                  {/* Content Container - flex-grow için */}
                  <div className="flex-grow">
                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold text-primary transition-colors mb-3 hover:text-secondary">
                      {getPage("service", `services.items.${s.key}.name`) ||
                        s.translations[language].name}
                    </h3>
                    <p className="text-text/70 leading-relaxed text-sm lg:text-base">
                      {getPage(
                        "service",
                        `services.items.${s.key}.description`
                      ) || s.translations[language].description}
                    </p>
                  </div>

                  {/* Link - alt kısımda sabit */}
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <div className="inline-flex items-center gap-2 text-secondary font-medium transition-all hover:gap-3">
                      {getPage("service", "services.detailButton")}
                      <Icons.ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </m.div>
              </Link>
            );
          })}
        </m.div>

        {/* View All Button */}
        <div className="mt-12 lg:mt-16">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl transition-all duration-300 font-medium text-lg shadow-lg hover:bg-primary/90 hover:gap-4 hover:shadow-xl"
          >
            {getPage("home", "services.viewAllButton")}
            <Icons.ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </m.section>
  );
};

export default ServicesPreview;
