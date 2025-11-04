import { services } from "@/data/service";

// Dinamik olarak services'den items objesi oluştur
const serviceItems = services.reduce((acc, service) => {
  acc[service.key] = {
    name: service.translations.en.name,
    description: service.translations.en.description,
    detailDescription: service.translations.en.detailDescription,
  };
  return acc;
}, {} as Record<string, { name: string; description: string; detailDescription: string }>);

export const en = {
  hero: {
    title: "Our Steel Structure Services",
    subtitle:
      "We provide comprehensive solutions for your industrial projects, from engineering to production, from assembly to delivery.",
  },
  services: {
    title: "Our Areas of Expertise",
    subtitle:
      "Quality solutions in all processes from engineering to production in industrial projects.",
    detailButton: "Explore Details",
    items: serviceItems,
  },
} as const;
