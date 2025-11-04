import { getAllFAQs } from "@/data/faq";

// Dinamik olarak FAQ'lardan İngilizce items objesi oluştur
const faqItems = getAllFAQs().reduce((acc, faq) => {
  acc[faq.key] = {
    question: faq.translations.en.question,
    answer: faq.translations.en.answer,
  };
  return acc;
}, {} as Record<string, { question: string; answer: string }>);

export const en = {
  title: "Frequently Asked Questions",
  description:
    "The most frequently asked questions and answers about our steel construction and construction services",

  hero: {
    title: "Frequently Asked Questions",
    subtitle:
      "Find answers to the most frequently asked questions about steel construction and our services",
    description:
      "You can find all the information you need for your projects here and learn the answers to your questions.",
  },

  search: {
    placeholder: "Search in questions...",
    noResults: "No results found",
    resultsFound: "results found",
  },

  faqs: {
    title: "Questions and Answers",
    subtitle: "Our most frequently asked questions",
    items: faqItems,
  },

  sections: {
    main: {
      title: "Popular Questions",
      subtitle: "Most frequently asked questions and detailed answers",
    },
    contact: {
      title: "Have a question?",
      description:
        "If you couldn't find the answer you're looking for, don't hesitate to contact us.",
      button: "Contact Us",
    },
  },

  // FAQ categories
  categories: {
    all: "All",
    general: "General Questions",
    technical: "Technical Questions",
    process: "About Process",
    pricing: "Pricing",
    maintenance: "Maintenance",
    design: "Design",
  },

  // FAQ meta information
  meta: {
    totalQuestions: "Total {count} questions",
    readTime: "Reading time: {time} minutes",
    lastUpdated: "Last updated: {date}",
  },
} as const;
