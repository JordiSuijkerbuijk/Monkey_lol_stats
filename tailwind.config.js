module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue"],
    },
    colors: {
      background: "#131416",
      primary: "#ffffff",
      secondary: "#FFA62B",
      tertiary: "#d8d8d8",
      black: "#000000",
      fire: "#F86624",
    },
    height: {
      nav: '60px'
    },
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
    },
    extend: {
      translate: {
        '2px': '2px'
      },
      scale: {
        '115': '1.15',
      },
      animation: {
        loader: "loader 1.4s ease-in-out infinite both",
        strokeDash: "strokeDash 1.4s linear forward",
      },
      gridTemplateColumns: {
        "1/1": "repeat(2, 1fr)",
        "1/2": "1fr 2fr",
      },
      keyframes: {
        loader: {
          "0%, 80%, 100%": {
            transform: "scale(0)",
          },
          "40%": {
            transform: "scale(1)",
          },
        },
        strokeDash: {
          from: {
            "stroke-dashoffset": "1",
          },
          to: {
            "stroke-dashoffset": "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
