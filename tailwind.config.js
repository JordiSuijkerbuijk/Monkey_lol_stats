module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#010A14",
      primary: "#ffffff",
      secondary: "#a855f7",
      tertiary: "#F86624",
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
