const { replacer } = require('easy-tailwind/transform/react')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: {
    files: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    transform: {
      DEFAULT: replacer,
    },
  },

  theme: {
    extend: {
      spacing: {
        0.25: '2px',
        0.5: '4px',
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '52px',
        8: '64px',
        9: '72px',
        10: '80px',
        12: '96px',
      },

      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          50: '#f5f1eb',
          100: '#D7CCC8',
          200: '#BCAAA4',
          300: '#A1887F',
          400: '#8D6E63',
          500: '#795548',
          600: '#6D4C41',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
        },
      },

      // TODO: Verify this is kosher (likely not needed if transitioning everything to grid)
      flex: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    },
  },
  plugins: [],
}
