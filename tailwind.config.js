const { fontFamily } = require("tailwindcss/defaultTheme");
const { replacer } = require("easy-tailwind/transform/react");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: {
    files: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    transform: {
      DEFAULT: replacer,
    },
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        mono: ["var(--font-roboto-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
