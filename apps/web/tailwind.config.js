/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF3366',
          hover: '#E61E50',
          light: '#FFF0F3',
          dark: '#BE123C'
        },
        violet: {
          DEFAULT: '#7047EB',
          hover: '#5F35DB',
          light: '#F4F0FF',
          dark: '#43288C'
        },
        peach: {
          DEFAULT: '#FF7A45',
          hover: '#EA5E26',
          light: '#FFF2EB',
          dark: '#C43D0A'
        },
        lavender: {
          DEFAULT: '#EDE9FE',
          hover: '#DDD6FE',
          light: '#F5F3FF'
        },
        cyan: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
          light: '#ECFEFF',
          dark: '#0E7490'
        },
        amber: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          light: '#FEF3C7',
          dark: '#B45309'
        },
        mint: {
          DEFAULT: '#10B981',
          hover: '#059669',
          light: '#ECFDF5',
          dark: '#047857'
        },
        rose: {
          DEFAULT: '#F43F5E',
          hover: '#E11D48',
          light: '#FFF1F2',
          dark: '#BE123C'
        },
        dangerRed: {
          DEFAULT: '#EF4444',
          hover: '#DC2626',
          light: '#FEE2E2',
          dark: '#B91C1C'
        },
        dangerRedLight: '#FEE2E2',
        emerald: {
          DEFAULT: '#10B981',
          hover: '#059669',
          light: '#ECFDF5',
          dark: '#047857',
          50: '#ECFDF5',
          100: '#D1FAE5',
          400: '#34D399',
          500: '#10B981',
          600: '#059669'
        },
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B'
        },
        cloud: '#FAFAFD',
        ink: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          muted: '#64748B'
        },
        success: {
          DEFAULT: '#10B981',
          light: '#ECFDF5'
        },
        borderSoft: '#E2E8F0'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif']
      },
      borderRadius: {
        card: '1.5rem',
        button: '1rem'
      },
      boxShadow: {
        cardHover: '0 20px 35px -8px rgba(15, 23, 42, 0.08), 0 8px 16px -6px rgba(255, 51, 102, 0.08)',
        coralGlow: '0 0 25px rgba(255, 51, 102, 0.45)',
        violetGlow: '0 0 25px rgba(112, 71, 235, 0.45)',
        cyanGlow: '0 0 25px rgba(6, 182, 212, 0.45)',
        peachGlow: '0 0 25px rgba(255, 122, 69, 0.45)',
        multiGlow: '0 12px 40px -10px rgba(255, 51, 102, 0.3), 0 16px 36px -12px rgba(112, 71, 235, 0.25)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(4deg)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' }
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.15)' },
          '70%': { transform: 'scale(1)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        float: 'float 3.5s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        heartbeat: 'heartbeat 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite linear',
        'gradient-xy': 'gradient-xy 8s ease infinite'
      }
    }
  },
  plugins: []
};
