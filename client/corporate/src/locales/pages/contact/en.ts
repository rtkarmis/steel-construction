import { siteConfig } from "@/lib/seo";

export const en = {
  hero: {
    title: "Contact",
    subtitle:
      "We are happy to assist you at Güvenoğlu Steel & Metal. Get in touch with us to shape your project together.",
  },
  form: {
    title: "Get in Touch",
    name: "Full Name",
    email: "Email Address",
    message: "Your Message",
    submit: "Submit",
  },
  info: {
    title: "Our Contact Information",
    description:
      "Our office is always open to new projects and collaborations. You can reach us using the information below.",
    address: siteConfig.address,
    phone: siteConfig.phoneDisplay,
    email: siteConfig.email,
  },
  hours: {
    title: "Working Hours",
    weekdays: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  },
} as const;
