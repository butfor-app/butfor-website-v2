/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#124559",
        primaryLight: "#70A9BF",
        primaryDark: "#01161E",
      },
      spacing: {
        18: "75px",
      },
      fontFamily: {
        poppins: ["Poppins"],
        aneklatin: ["AnekLatin"],
        sourcesanspro: ["Source Sans Pro"],
      },
    },
  },
  plugins: [],
};
