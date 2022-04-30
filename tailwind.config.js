module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F2643E",
        secondary: "#00716C",
        tertiary: "#FFCD60",
        dark: "#264754",
        light: "#F8F7F1",
      },

      fontFamily: {
        custom: ["Square Peg", "cursive"],
      },
    },
  },
  plugins: [],
};
