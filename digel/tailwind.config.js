module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: "#FFFFF6",
        secondary: "#484F58",
        tertiary: "#dbcac4",
        border: "#1a2e35",
        backgroundDark: "#020A1D",
        backgroundMedium: "#071431",
        backgroundLight: "#FFFFF6",
        background: "#c0d7fd",
        accent: "#427af2",
      },
      height: {
        "screen-25": "25vh",
        "screen-50": "50vh",
        "screen-75": "75vh",
      },
      animation: {
        vote: "vote 1s ease-in-out",
      },
      keyframes: {
        vote: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-30deg)",
          },
          "75%": {
            transform: "rotate(30deg)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
