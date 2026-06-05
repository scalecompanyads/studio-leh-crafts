import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c46b4b',
        'primary-dark': '#a45236',
        dark: '#1e2d14',
        'dark-deep': '#111b0b',
        muted: '#5e4841',
        accent: '#515e29',
        cream: '#f7ece2',
      },
      fontFamily: {
        headline: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'shine': 'shine 3.4s ease-in-out infinite',
        'aurora': 'aurora 26s linear infinite',
        'glow': 'glow 5s ease-in-out infinite',
        'grain': 'grain 0.58s steps(10) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '40%, 100%': { transform: 'translateX(220%) skewX(-18deg)' },
        },
        aurora: {
          '0%': { transform: 'translate3d(-6%, -4%, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(6%, 4%, 0) rotate(180deg)' },
          '100%': { transform: 'translate3d(-6%, -4%, 0) rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 8px 32px rgba(196,107,75,0.28)' },
          '50%': { boxShadow: '0 12px 48px rgba(196,107,75,0.48)' },
        },
        grain: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '10%': { transform: 'translate3d(-5%, -8%, 0)' },
          '20%': { transform: 'translate3d(-12%, 4%, 0)' },
          '30%': { transform: 'translate3d(7%, -10%, 0)' },
          '40%': { transform: 'translate3d(-7%, 12%, 0)' },
          '50%': { transform: 'translate3d(10%, 6%, 0)' },
          '60%': { transform: 'translate3d(-3%, -12%, 0)' },
          '70%': { transform: 'translate3d(12%, -4%, 0)' },
          '80%': { transform: 'translate3d(-9%, 9%, 0)' },
          '90%': { transform: 'translate3d(6%, -7%, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.12)',
        'dark-card': '0 8px 32px rgba(0,0,0,0.32)',
      },
    },
  },
  plugins: [],
}

export default config
