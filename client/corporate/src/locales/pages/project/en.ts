import { projects } from "@/data/project";
import { getAllReferences } from "@/data/reference";

// Referans verilerini key'e göre map'le
const referencesMap = getAllReferences().reduce((acc, ref) => {
  acc[ref.key] = {
    name: ref.translations.en.name,
    logo: ref.logo,
    website: ref.website,
  };
  return acc;
}, {} as Record<string, { name: string; logo: string; website?: string }>);

// Dinamik olarak projects'den items objesi oluştur
const projectItems = projects.reduce((acc, project) => {
  acc[project.key] = {
    name: project.translations.en.name,
    description: project.translations.en.description,
    location: project.translations.en.location,
    references:
      project.references
        ?.map((refKey) => referencesMap[refKey])
        .filter(Boolean) || [],
  };
  return acc;
}, {} as Record<string, { name: string; description: string; location: string; references: Array<{ name: string; logo: string; website?: string }> }>);

export const en = {
  hero: {
    title: "Our Projects",
    subtitle:
      "A selection of our completed projects where we prioritized quality, engineering excellence, and reliability at every stage.",
  },
  projects: {
    title: "Completed Projects",
    subtitle:
      "From industrial facilities to commercial buildings, hangars, and prefabricated structures, we have successfully delivered a wide range of projects.",
    detailButton: "View Project",
    items: projectItems,
    detail: {
      location: "Location",
      year: "Completion Year",
      category: "Category",
      gallery: "Project Gallery",
      partners: "Partners",
      about: "About the Project",
    },
  },
  categories: {
    all: "All",
    industrial: "Industrial Facilities",
    warehouse: "Warehouses & Storage",
    hangar: "Hangar Structures",
    commercial: "Commercial Buildings",
    prefab: "Prefabricated Structures",
    steel: "Steel Construction",
  },
  process: {
    title: "Our Project Management Process",
    subtitle:
      "We manage your projects from planning to delivery under engineering excellence standards.",
    steps: {
      discovery: {
        title: "Discovery & Analysis",
        description:
          "We analyze your needs and determine optimal engineering solutions.",
      },
      design: {
        title: "Design & Planning",
        description:
          "We plan steel structure systems efficiently and finalize all pre-production details.",
      },
      production: {
        title: "Production",
        description:
          "We manage high-precision production processes in our modern facilities.",
      },
      delivery: {
        title: "Delivery",
        description:
          "We deliver the project on time, safely, and with full customer satisfaction.",
      },
    },
  },
  cta: {
    title: "Let’s collaborate on your next project",
    desc: "Contact our engineering team for industrial, warehouse, or custom steel structure projects.",
    button: "Get a Quote",
  },
} as const;
