import { describe, it, expect } from 'vitest';
import { colors } from '@pairup/design-tokens';

describe('Root Test Suite: Design Tokens & Styling Constants', () => {
  it('exposes core brand color palette', () => {
    expect(colors.brand.passionCoral).toBe('#FF4F81');
    expect(colors.brand.electricViolet).toBe('#7C3AED');
    expect(colors.brand.sunsetPeach).toBe('#FF8A5B');
    expect(colors.brand.cloudWhite).toBe('#F8F7FF');
    expect(colors.brand.midnightInk).toBe('#242039');
  });

  it('exposes celebratory gradients for swipe animations and matches', () => {
    expect(colors.gradients.passionViolet).toContain('#FF4F81');
    expect(colors.gradients.passionViolet).toContain('#7C3AED');
    expect(colors.gradients.sunsetCoral).toContain('#FF8A5B');
  });
});
