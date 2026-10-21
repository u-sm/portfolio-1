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
        // Cyber Teal palette
        // primary: dark teal — AA-contrast on light backgrounds (4.9:1 on white)
        primary: '#007A64',
        'primary-dark': '#006050',
        // accent: bright teal — for dark mode text/icons (9:1 on slateDark)
        accent: '#00C9A7',
        // accent-muted: lime — special dark-mode callouts / badges
        'accent-muted': '#A8FF78',
        // Backgrounds
        slateDark: '#080e0d',        // near-black with a teal tint
        slateLight: '#f0faf8',       // very light teal-white
        'card-dark': '#0e1917',      // slightly lighter dark card
        'card-light': '#ffffff',
        // Text
        muted: '#6B9E94',            // teal-grey muted text
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'lg-soft': '0 10px 40px rgba(0,0,0,0.08)',
        'lift': '0 20px 60px rgba(0,0,0,0.15)',
        'glow': '0 0 30px rgba(0,201,167,0.30)',
        'glow-sm': '0 0 15px rgba(0,201,167,0.18)',
        'glow-lime': '0 0 24px rgba(168,255,120,0.22)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Teal-hued mesh gradient
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(170,100%,40%,0.14) 0px, transparent 55%), radial-gradient(at 80% 0%, hsla(155,100%,45%,0.10) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(165,80%,35%,0.10) 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'progress': 'progress 0.6s ease-out forwards',
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
        progress: {
          '0%': { width: '0%', opacity: '1' },
          '80%': { width: '90%', opacity: '1' },
          '100%': { width: '100%', opacity: '0' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
