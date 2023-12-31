import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2643E",
        secondary: "#00716C",
        tertiary: "#FFCD60",
        dark: "#264754",
        light: "#F8F7F1"
      },
      fontFamily: {
        title: ["var(--font-title)", ...fontFamily.sans],
        sans: ["var(--font-satoshi)", ...fontFamily.sans]
      }
    }
  },
  plugins: []
};
