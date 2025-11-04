import { services } from "@/data/service";

// Dinamik olarak services'den items objesi oluştur
const serviceItems = services.reduce((acc, service) => {
  acc[service.key] = {
    name: service.translations.tr.name,
    description: service.translations.tr.description,
    detailDescription: service.translations.tr.detailDescription,
  };
  return acc;
}, {} as Record<string, { name: string; description: string; detailDescription: string }>);

export const tr = {
  hero: {
    title: "Çelik Yapı Hizmetlerimiz",
    subtitle:
      "Endüstriyel projelerinizde mühendislikten üretime, montajdan teslime kadar kapsamlı çözümler sunuyoruz.",
  },
  services: {
    title: "Uzmanlık Alanlarımız",
    subtitle:
      "Endüstriyel projelerde, mühendislikten üretime kadar tüm süreçlerde kaliteli çözümler.",
    detailButton: "Detaylı İncele",
    items: serviceItems,
  },
} as const;
