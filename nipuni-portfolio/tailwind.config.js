/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#f8f9fa',
        'bg-dark': '#0f1520',
        bg2: '#f0f1f3',
        'bg2-dark': '#141b2a',
        bg3: '#e8eaef',
        'bg3-dark': '#1a2132',
        accent: '#7c6af7',
        accent2: '#b06ef3',
        accent3: '#4fc3f7',
        accent4: '#f06292',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 1.5s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'blink': 'blink 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.8)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [],
}
