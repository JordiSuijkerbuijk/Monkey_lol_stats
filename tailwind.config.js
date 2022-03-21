const plugin = require('tailwindcss/plugin');


module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'bebas': ['Bebas Neue']
    },
    colors: {
      background: "#131416",
      primary: "#ffffff",
      secondary: "#F86624",
      tertiary: "#d8d8d8",
      black: "#000000"
    },
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
    },
    extend: {
      animation: {
        loader: 'loader 1.4s ease-in-out infinite both'
      },
      gridTemplateColumns: {
        "1/1": "repeat(2, 1fr)",
        "1/2": "1fr 2fr",
      },
      keyframes: {
        loader: {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
          },
          '40%': {
            transform: 'scale(1)',
          }
        }
      }
    },
  },
  plugins : [
    require("tailwindcss-animation-delay")
  ],
};
