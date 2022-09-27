/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'pc': '1366px',
      // => @media (min-width: 640px) { ... }
      'aie': '1900px',
      // => @media (min-width: 640px) { ... }
      'oui': '1500px'
      // => @media (min-width: 640px) { ... }
    }
  },
  plugins: [],
}