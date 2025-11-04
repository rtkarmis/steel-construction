/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D2A4A", // lacivert
        },
        secondary: {
          DEFAULT: "#F28C28", // turuncu
        },
        accent: {
          DEFAULT: "#BBDFFF",
        },
        silver: {
          DEFAULT: "#C0C0C0",
        },
        background: {
          DEFAULT: "#F9FAFB", // açık gri
        },
        text: {
          DEFAULT: "#1E293B", // koyu gri
        },
        surface: {
          DEFAULT: "#FFFFFF", // kart, section
        },
        border: {
          DEFAULT: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};
