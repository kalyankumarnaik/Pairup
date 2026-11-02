export const Colors = {
  // Brand Primary & Accents
  passionCoral: '#FF3366',
  electricViolet: '#7047EB',
  sunsetPeach: '#FF7A45',
  dreamLavender: '#EDE9FE',
  cloudWhite: '#FAFAFD',
  midnightInk: '#0F172A',
  successGreen: '#10B981',
  softBorder: '#E2E8F0',
  warningAmber: '#F59E0B',
  dangerRed: '#EF4444',

  // Gradients
  primaryGradient: ['#FF3366', '#7047EB'],
  coralPeachGradient: ['#FF3366', '#FF7A45'],
  violetIndigoGradient: ['#7047EB', '#4F46E5'],
  goldGradient: ['#F59E0B', '#D97706'],

  // Backgrounds & Neutrals
  background: '#FAFAFD',
  surface: '#FFFFFF',
  surfaceAlt: '#F1F5F9',
  card: '#FFFFFF',
  modal: '#FFFFFF',

  // Text Colors
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  textMuted: '#94A3B8',
  textInverse: '#FFFFFF',

  // Border & Dividers
  border: '#E2E8F0',
  borderStrong: '#CBD5E1',

  // Semantic
  online: '#10B981',
  offline: '#94A3B8',
  verified: '#7047EB',
  superLike: '#0EA5E9',
  pass: '#94A3B8',
  like: '#FF3366'
} as const;

export const Typography = {
  h1: { fontSize: 28, fontWeight: '800' as const, color: Colors.midnightInk },
  h2: { fontSize: 22, fontWeight: '700' as const, color: Colors.midnightInk },
  h3: { fontSize: 18, fontWeight: '600' as const, color: Colors.midnightInk },
  body: { fontSize: 15, fontWeight: '400' as const, color: Colors.textPrimary },
  bodyBold: { fontSize: 15, fontWeight: '600' as const, color: Colors.textPrimary },
  caption: { fontSize: 12, fontWeight: '500' as const, color: Colors.textSecondary },
  button: { fontSize: 16, fontWeight: '700' as const, color: Colors.textInverse }
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  full: 9999
};
