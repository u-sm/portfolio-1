/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        'primary-dark': '#4f46e5',
        accent: '#a5b4fc',
        'accent-muted': '#c7d2fe',
        slateDark: '#0f0f13',
        slateLight: '#f8f8fc',
        'card-dark': '#16161f',
        'card-light': '#ffffff',
        muted: '#64748b',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'lg-soft': '0 10px 40px rgba(0,0,0,0.08)',
        'lift': '0 20px 60px rgba(0,0,0,0.15)',
        'glow': '0 0 30px rgba(99,102,241,0.25)',
        'glow-sm': '0 0 15px rgba(99,102,241,0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(240,80%,60%,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(260,80%,65%,0.10) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220,80%,65%,0.08) 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
