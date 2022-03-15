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
    extend: {
      gridTemplateColumns: {
        "1/1": "repeat(2, 1fr)",
        "1/2": "1fr 2fr",
      },
    },
  },
  plugins: [],
};
