"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { ClipboardList, Factory, Ruler, Truck } from "lucide-react";

const ProjectProcessSection = () => {
  const { getPage } = useLanguage();

  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8 text-secondary" />,
      titleKey: "discovery.title",
      descKey: "discovery.description",
    },
    {
      icon: <Ruler className="w-8 h-8 text-secondary" />,
      titleKey: "design.title",
      descKey: "design.description",
    },
    {
      icon: <Factory className="w-8 h-8 text-secondary" />,
      titleKey: "production.title",
      descKey: "production.description",
    },
    {
      icon: <Truck className="w-8 h-8 text-secondary" />,
      titleKey: "delivery.title",
      descKey: "delivery.description",
    },
  ];

  return (
    <section className="py-20 bg-background border-t border-border/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-secondary/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {getPage("project", "process.title")}
        </h2>
        <p className="mt-3 text-text/70 max-w-3xl mx-auto">
          {getPage("project", "process.subtitle")}
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-surface p-8 rounded-2xl shadow-sm border border-border/60 text-center hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-primary">
                {getPage("project", `process.steps.${step.titleKey}`)}
              </h3>
              <p className="mt-2 text-sm text-text/70">
                {getPage("project", `process.steps.${step.descKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectProcessSection;
