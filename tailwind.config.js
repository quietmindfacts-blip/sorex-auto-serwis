module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#202225",
        red: {
          DEFAULT: "#B70C1C",
          dark: "#8A0813",
        },
        light: {
          DEFAULT: "#FAFAFA",
          gray: "#F2F3F5"
        }
      },
      fontFamily: {
        headline: ['Oswald', 'Inter', 'sans-serif'],
        body: ['Lato', 'Open Sans', 'sans-serif']
      },
      boxShadow: {
        'elegant': '0 8px 32px rgba(60,60,60,0.18)',
      },
      borderRadius: {
        'xl': '1.1rem',
      }
    },
  },
  plugins: [],
}