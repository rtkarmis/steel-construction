// src/seo/SchemaLocalBusiness.tsx
"use client";

import { getLocalBusinessSchema } from "@/lib/seo";
import Script from "next/script";

const SchemaLocalBusiness = () => {
  const schema = getLocalBusinessSchema();

  return (
    <Script
      id="schema-localbusiness"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};
export default SchemaLocalBusiness;
