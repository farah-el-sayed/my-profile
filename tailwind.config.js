// tailwind.config.js - يدعم الألوان المخصصة Deep Navy + Glowing Lavender
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        navy: {
          DEFAULT: '#172554',
          800: '#1e3a5f',
          900: '#172554',
          950: '#0b1530',
        },
        lavender: {
          DEFAULT: '#C4A7E7',
          light: '#d9c5f0',
          dark: '#a385d1',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(196, 167, 231, 0.5)',
        'glow-lg': '0 0 40px rgba(196, 167, 231, 0.6), 0 0 80px rgba(196, 167, 231, 0.3)',
        'glow-sm': '0 0 10px rgba(196, 167, 231, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'blink': 'blink 1.1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(196,167,231,0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(196,167,231,0.8)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
