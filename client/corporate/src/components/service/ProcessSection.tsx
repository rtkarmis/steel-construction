"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, ClipboardList, Factory, ShieldCheck } from "lucide-react";

export default function ProcessSection() {
  const { getPage } = useLanguage();

  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8 text-secondary" />,
      titleKey: "design",
      descKey: "design",
    },
    {
      icon: <Factory className="w-8 h-8 text-secondary" />,
      titleKey: "production",
      descKey: "production",
    },
    {
      icon: <Building2 className="w-8 h-8 text-secondary" />,
      titleKey: "assembly",
      descKey: "assembly",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
      titleKey: "delivery",
      descKey: "delivery",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {getPage("services", "process.title")}
        </h2>
        <p className="mt-3 text-text/70 max-w-3xl mx-auto">
          {getPage("services", "process.subtitle")}
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-surface p-8 rounded-2xl shadow-sm border border-border/60 text-center hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-primary">
                {getPage("services", `process.steps.${step.titleKey}.title`)}
              </h3>
              <p className="mt-2 text-sm text-text/70">
                {getPage(
                  "services",
                  `process.steps.${step.descKey}.description`
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
