import { siteConfig } from "@/lib/seo";

export const tr = {
  hero: {
    title: "İletişim",
    subtitle:
      "Güvenoğlu Çelik & Metal olarak size yardımcı olmaktan memnuniyet duyarız. Bize ulaşın, projenizi birlikte şekillendirelim.",
  },
  form: {
    title: "Bize Ulaşın",
    name: "Ad Soyad",
    email: "E-posta Adresi",
    message: "Mesajınız",
    submit: "Gönder",
  },
  info: {
    title: "İletişim Bilgilerimiz",
    description:
      "Ofisimiz her zaman yeni projelere ve iş birliklerine açık. Aşağıdaki bilgilerden bize ulaşabilirsiniz.",
    address: siteConfig.address,
    phone: siteConfig.phoneDisplay,
    email: siteConfig.email,
  },
  hours: {
    title: "Çalışma Saatleri",
    weekdays: "Pazartesi - Cuma",
    saturday: "Cumartesi",
    sunday: "Pazar",
    sundayTime: "Kapalı",
  },
} as const;
