/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'dark-graphite': '#2C2C2C', // Dark graphite color
        'deep-red': '#A00000', // Deep red accent
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      // Add variant configurations if needed
    },
  },
  plugins: [],
};