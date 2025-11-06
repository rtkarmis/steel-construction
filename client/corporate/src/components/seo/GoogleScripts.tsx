"use client";

import { loadConsent } from "@/lib/consent-utils";
import Script from "next/script";
import { useEffect, useState } from "react";

const GoogleScripts = () => {
  const [consent, setConsent] = useState(loadConsent());

  useEffect(() => {
    setConsent(loadConsent());
  }, []);

  if (!consent) return null;

  return (
    <>
      {/* ✅ Google Tag Manager */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
        `}
      </Script>

      {/* ✅ Google Analytics */}
      {consent.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* ✅ Reklam Çerezleri */}
      {consent.ads && (
        <>
          <Script id="ads-conversion" strategy="afterInteractive">
            {`
              gtag('config', '${process.env.NEXT_PUBLIC_ADS_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
};
export default GoogleScripts;
