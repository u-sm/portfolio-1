module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      }
    },
  },
  plugins: [],
};