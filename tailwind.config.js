module.exports = {
  purge: ["./src/views/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        Cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        purple: {
          DEFAULT: "#8D5DA7",
        },
        orange: {
          DEFAULT: "#FDB515",
        },
        card: {
          DEFAULT: "#F7F7F7",
        },
        rate: {
          DEFAULT: "#45A787",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
