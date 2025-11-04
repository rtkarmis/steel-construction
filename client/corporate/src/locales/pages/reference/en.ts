import { getAllReferences } from "@/data/reference";

const referenceItems = getAllReferences().reduce((acc, reference) => {
  acc[reference.key] = {
    name: reference.translations.en.name,
    description: reference.translations.en.description,
    logo: reference.logo,
    website: reference.website,
  };
  return acc;
}, {} as Record<string, any>);

export const en = {
  hero: {
    title: "Our References",
    subtitle:
      "Some of the valued companies and partners we've worked with in the field of steel and metal construction.",
  },
  section: {
    title: "Our Partners",
    subtitle:
      "Trusted clients and organizations who rely on our engineering and production expertise.",
  },
  references: {
    items: referenceItems,
  },
} as const;
