import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        islamic: {
          green: {
            50: "#ECFDF5",
            100: "#D1FAE5",
            200: "#A7F3D0",
            300: "#6EE7B7",
            400: "#34D399",
            500: "#10B981",
            600: "#059669",
            700: "#047857",
            800: "#065F46",
            900: "#064E3B",
            950: "#022C22",
          },
          gold: {
            50: "#FFFBEB",
            100: "#FEF3C7",
            200: "#FDE68A",
            300: "#E4C882",
            400: "#D4B062",
            500: "#C4A052",
            600: "#A88632",
            700: "#8C6D22",
            800: "#704F12",
            900: "#5C3D0A",
          },
          cream: {
            50: "#FFFEF7",
            100: "#FFFBF0",
            200: "#FDF6E3",
            300: "#F5EDD6",
            400: "#E8DFC8",
            500: "#D4C9B5",
          },
        },
      },
      fontFamily: {
        amiri: ["var(--font-amiri)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "islamic-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23064E3B' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      borderRadius: {
        islamic: "0.75rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
