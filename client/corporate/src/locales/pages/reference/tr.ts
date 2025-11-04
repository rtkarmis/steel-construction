import { getAllReferences } from "@/data/reference";

const referenceItems = getAllReferences().reduce((acc, reference) => {
  acc[reference.key] = {
    name: reference.translations.tr.name,
    description: reference.translations.tr.description,
    logo: reference.logo,
    website: reference.website,
  };
  return acc;
}, {} as Record<string, any>);

export const tr = {
  hero: {
    title: "Referanslarımız",
    subtitle:
      "Güvenoğlu Çelik & Metal olarak birlikte çalıştığımız değerli kurum ve işletmeler.",
  },
  section: {
    title: "İş Ortaklarımız",
    subtitle:
      "Güven, kalite ve mühendislik standartlarıyla hizmet verdiğimiz bazı iş ortaklarımız.",
  },
  references: {
    items: referenceItems,
  },
} as const;
