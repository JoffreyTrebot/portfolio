/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ["10px", {}],
      },
      screens: {
        xs: "360px",
      },
      fontFamily: {
        display: ["DM Serif Display"],
        paragraphe: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
