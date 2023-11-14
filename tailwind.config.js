const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--sand-12)',
        secondary: 'var(--sand-11)',
      },
      textColor: {
        primary: 'var(--sand-12)',
        secondary: 'var(--sand-11)',
      },
      backgroundColor: {
        primary: "var(--sand-2)",
        secondary: "var(--sand-3)",
        tertiary: "var(--sand-1)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}