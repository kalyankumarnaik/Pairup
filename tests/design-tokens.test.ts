import { describe, it, expect } from 'vitest';
import { colors } from '@pairup/design-tokens';

describe('Root Test Suite: Design Tokens & Styling Constants', () => {
  it('exposes core brand color palette', () => {
    expect(colors.brand.passionCoral).toBe('#FF3366');
    expect(colors.brand.electricViolet).toBe('#7047EB');
    expect(colors.brand.sunsetPeach).toBe('#FF7A45');
    expect(colors.brand.cloudWhite).toBe('#FAFAFD');
    expect(colors.brand.midnightInk).toBe('#0F172A');
  });

  it('exposes celebratory gradients for swipe animations and matches', () => {
    expect(colors.gradients.passionViolet).toContain('#FF3366');
    expect(colors.gradients.passionViolet).toContain('#7047EB');
    expect(colors.gradients.sunsetCoral).toContain('#FF7A45');
  });
});
