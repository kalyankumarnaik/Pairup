/**
 * PairUp AI - Core Brand Colors & Theme Palettes
 * Primary Palette:
 * - Passion Coral (#FF3366) - Romantic actions, heart pulses, match alerts
 * - Electric Violet (#7047EB) - Primary buttons, brand identity, navigation highlights
 * - Sunset Peach (#FF7A45) - Secondary actions, warm badges, friendship highlights
 * - Dream Lavender (#EDE9FE) - Soft card accents, light backgrounds, pill tags
 * - Cloud White (#FAFAFD) - Clean page background, canvas cards
 * - Midnight Ink (#0F172A) - High contrast typography, dark surfaces
 * - Success Green (#10B981) - Verification badges, online presence, success states
 * - Soft Border (#E2E8F0) - Subtle dividers, inactive input borders
 */

export const colors = {
  brand: {
    passionCoral: '#FF3366',
    passionCoralHover: '#E61E50',
    passionCoralLight: '#FFF0F3',
    passionCoralDark: '#BE123C',

    electricViolet: '#7047EB',
    electricVioletHover: '#5F35DB',
    electricVioletLight: '#F4F0FF',
    electricVioletDark: '#43288C',

    sunsetPeach: '#FF7A45',
    sunsetPeachHover: '#EA5E26',
    sunsetPeachLight: '#FFF2EB',
    sunsetPeachDark: '#C43D0A',

    dreamLavender: '#EDE9FE',
    dreamLavenderHover: '#DDD6FE',
    dreamLavenderLight: '#F5F3FF',

    cloudWhite: '#FAFAFD',
    midnightInk: '#0F172A',
    midnightInkLight: '#1E293B',
    midnightInkMuted: '#64748B',

    successGreen: '#10B981',
    successGreenLight: '#ECFDF5',

    warningAmber: '#F59E0B',
    warningAmberLight: '#FEF3C7',

    dangerRed: '#EF4444',
    dangerRedLight: '#FEE2E2',

    softBorder: '#E2E8F0',
    softBorderHover: '#CBD5E1'
  },

  // Gradients for cards, hero headers, and celebratory overlays
  gradients: {
    passionViolet: 'linear-gradient(135deg, #FF3366 0%, #FA2D65 40%, #7047EB 100%)',
    sunsetCoral: 'linear-gradient(135deg, #FF7A45 0%, #FF3366 100%)',
    dreamGlow: 'linear-gradient(180deg, #FAFAFD 0%, #EDE9FE 100%)',
    midnightDark: 'linear-gradient(180deg, #0F172A 0%, #020617 100%)',
    cardOverlay: 'linear-gradient(180deg, rgba(15, 23, 42, 0) 35%, rgba(15, 23, 42, 0.88) 92%)',
    superLike: 'linear-gradient(135deg, #00D2FF 0%, #7047EB 100%)'
  },

  // Light theme default tokens
  light: {
    background: '#FAFAFD',
    foreground: '#0F172A',
    card: '#FFFFFF',
    cardForeground: '#0F172A',
    primary: '#7047EB',
    primaryForeground: '#FFFFFF',
    secondary: '#FF3366',
    secondaryForeground: '#FFFFFF',
    accent: '#FF7A45',
    accentForeground: '#FFFFFF',
    muted: '#F1F5F9',
    mutedForeground: '#64748B',
    border: '#E2E8F0',
    input: '#FFFFFF',
    ring: '#7047EB'
  },

  // Dark theme tokens
  dark: {
    background: '#0B0F19',
    foreground: '#F8FAFC',
    card: '#161B26',
    cardForeground: '#F8FAFC',
    primary: '#8B5CF6',
    primaryForeground: '#FFFFFF',
    secondary: '#FF3366',
    secondaryForeground: '#FFFFFF',
    accent: '#FF7A45',
    accentForeground: '#0B0F19',
    muted: '#1E2536',
    mutedForeground: '#94A3B8',
    border: '#273147',
    input: '#161B26',
    ring: '#8B5CF6'
  }
} as const;
