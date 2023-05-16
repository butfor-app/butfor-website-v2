/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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

      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-30vw)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 100,
          },
        },
        slideOut: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(50%)",
            opacity: 0,
            display: "hidden",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeOut: {
          "0%": {},
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        "slide-in": "slideIn 1s ease-in",
        "slide-out": "slideOut 1s ease-out",
        "fade-in": "fadeIn 1s ease-in",
        "fade-out": "fadeOut 1s ease-out",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
