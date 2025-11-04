"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StoryAbout() {
  const { getPage } = useLanguage();
  const timelineData = getPage("about", "timeline.items");
  const items = Array.isArray(timelineData)
    ? (timelineData as { year: string; text: string }[])
    : [];

  return (
    <section className="py-4 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10">
        <div>
          <span className="text-secondary font-semibold uppercase tracking-wider">
            {getPage("about", "story.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            {getPage("about", "story.title")}
          </h2>
          <p className="mt-4 text-text/80 leading-relaxed">
            {getPage("about", "story.paragraph1")}
          </p>
          <p className="mt-3 text-text/80 leading-relaxed">
            {getPage("about", "story.paragraph2")}
          </p>
        </div>

        <ol className="relative border-s border-border pl-6 space-y-6">
          {items.map((s, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-secondary" />
              <div className="bg-surface rounded-xl p-5 shadow-sm">
                <div className="text-secondary font-semibold">{s.year}</div>
                <p className="text-text/80 mt-1">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
