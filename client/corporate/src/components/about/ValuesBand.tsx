"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldCheck, Sparkles, Timer, Wrench } from "lucide-react";

export default function ValuesBand() {
  const { getPage } = useLanguage();
  const list = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      t: "values.quality",
      d: "values.qualityDesc",
    },
    {
      icon: <Timer className="w-6 h-6" />,
      t: "values.onTime",
      d: "values.onTimeDesc",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      t: "values.engineering",
      d: "values.engineeringDesc",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      t: "values.innovation",
      d: "values.innovationDesc",
    },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          {getPage("about", "values.title")}
        </h3>
        <p className="mt-2 text-white/80">
          {getPage("about", "values.subtitle")}
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((it) => (
            <div
              key={it.t}
              className="rounded-2xl p-6 bg-white/10 backdrop-blur border border-white/20 text-left hover:scale-105 transition-transform"
            >
              <div className="text-secondary">{it.icon}</div>
              <h4 className="mt-3 font-semibold">{getPage("about", it.t)}</h4>
              <p className="text-sm text-white/80 mt-1">
                {getPage("about", it.d)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
