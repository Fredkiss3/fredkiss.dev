module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.mdx"
  ],
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
        custom: ["var(--font-custom)"]
      }
    }
  },
  plugins: []
};
