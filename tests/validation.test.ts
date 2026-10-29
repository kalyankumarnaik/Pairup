import { describe, it, expect } from 'vitest';
import { SignupSchema, LoginSchema, VerifyOtpSchema, calculateAge } from '@pairup/validation';

describe('Root Test Suite: Input Validation Schemas & Age Compliance', () => {
  it('calculates age correctly from birthdate strings', () => {
    const age = calculateAge('2000-01-01');
    expect(age).toBeGreaterThanOrEqual(18);
  });

  it('validates compliant SignupSchema payload', () => {
    const valid = SignupSchema.safeParse({
      email: 'testuser@pairup.ai',
      password: 'SecurePassword1',
      displayName: 'Aarav Patel',
      birthDate: '1998-05-15',
      acceptedTerms: true
    });
    expect(valid.success).toBe(true);
  });

  it('rejects underage registration attempts (< 18)', () => {
    const underage = SignupSchema.safeParse({
      email: 'minor@pairup.ai',
      password: 'SecurePassword1',
      displayName: 'Minor User',
      birthDate: '2015-01-01',
      acceptedTerms: true
    });
    expect(underage.success).toBe(false);
  });

  it('validates LoginSchema input payloads', () => {
    const valid = LoginSchema.safeParse({
      identifier: 'test@pairup.ai',
      password: 'secretPassword123'
    });
    expect(valid.success).toBe(true);
  });

  it('validates 6-digit OTP verification schemas', () => {
    const valid = VerifyOtpSchema.safeParse({
      identifier: '+919876543210',
      otp: '123456'
    });
    expect(valid.success).toBe(true);

    const invalid = VerifyOtpSchema.safeParse({
      identifier: '+919876543210',
      otp: '12'
    });
    expect(invalid.success).toBe(false);
  });
});
