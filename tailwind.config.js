/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',       // if you have pages/ at root
    './src/pages/**/*.{js,jsx,ts,tsx}',   // if you used src/pages/
    './components/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        accent: '#FFDAD1',
        slateDark: '#2E2E2E',
        slateLight: '#F5F5F5',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'lg-soft': '0 10px 15px rgba(255,107,107,0.15)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
