import { colors } from '@pairup/design-tokens';

export const tailwindPreset = {
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
        cloud: '#FAFAFD',
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
        violetGlow: '0 0 25px rgba(112, 71, 235, 0.45)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.05)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite'
      }
    }
  }
};
