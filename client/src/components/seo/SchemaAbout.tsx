import Script from "next/script";
import { siteConfig } from "../../lib/seo";

const SchemaAbout = () => {
  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          logo: siteConfig.defaultImage,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.phoneDisplay || siteConfig.phone,
            contactType: "customer service",
            areaServed: "TR",
            availableLanguage: "Turkish",
          },
        }),
      }}
    />
  );
};
export default SchemaAbout;
