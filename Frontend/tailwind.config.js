/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B455FC",
        secondary: "#EAF8F4",
        dark: {
          smt: "#5A7184",
          hard: "#0D2436",
          soft: "#183B56",
        },
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
