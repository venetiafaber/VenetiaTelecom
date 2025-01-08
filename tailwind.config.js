/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}', 
    './src/app/**/*.html',
    './src/app/shared/button/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C4DFF',     // purple
        accent: '#5A2DDE',      // dark purple
        darkButton: '#3E1A8B',  // dark mode
      }
    },
  },
  plugins: [],
}

