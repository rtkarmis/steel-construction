import { FAQItem } from "@/types/faq";

export default function SchemaFAQPage({ faqs }: { faqs: FAQItem[] }) {
  const items = faqs.map((faq) => ({
    "@type": "Question",
    name: faq.translations.tr.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.translations.tr.answer,
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  );
}
