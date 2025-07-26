import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        link: "var(--color-link)",
        "primary-800": "var(--color-primary-800)",
        "primary-500": "var(--color-primary-500)",
        "blue-500": "var(--color-blue-500)",
      },
      fontFamily: {
        "ibm-plex": ["var(--font-ibm-plex-sans)", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
        sans: ["var(--font-ibm-plex-sans)", "Arial", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          smallTablet: "16px",
          tablet: "16px",
          desktop: "16px",
        },
        screens: {
          mobile: "680px",
          smallTablet: "768px",
          tablet: "1024px",
          desktop: "1312px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
