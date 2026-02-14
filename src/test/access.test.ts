import { describe, it, expect } from 'vitest';
import { isAccessActive, getExpirationDate } from '@/lib/access';

describe('isAccessActive', () => {
  it('returns false for null profile', () => {
    expect(isAccessActive(null)).toBe(false);
  });

  it('returns false if has_paid is false', () => {
    expect(isAccessActive({
      has_paid: false,
      access_expires_at: new Date(Date.now() + 86400000).toISOString(),
      created_at: new Date().toISOString(),
    })).toBe(false);
  });

  it('returns true if paid and not expired', () => {
    expect(isAccessActive({
      has_paid: true,
      access_expires_at: new Date(Date.now() + 86400000).toISOString(),
      created_at: new Date().toISOString(),
    })).toBe(true);
  });

  it('returns false if paid but expired', () => {
    expect(isAccessActive({
      has_paid: true,
      access_expires_at: new Date(Date.now() - 86400000).toISOString(),
      created_at: new Date().toISOString(),
    })).toBe(false);
  });

  it('falls back to created_at + 1 year if access_expires_at is null', () => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 2);
    expect(isAccessActive({
      has_paid: true,
      access_expires_at: null,
      created_at: oneYearAgo.toISOString(),
    })).toBe(false);
  });
});

describe('getExpirationDate', () => {
  it('returns access_expires_at when set', () => {
    const date = '2025-06-01T00:00:00Z';
    expect(getExpirationDate({ access_expires_at: date, created_at: '2024-01-01T00:00:00Z' }))
      .toEqual(new Date(date));
  });

  it('returns created_at + 1 year when access_expires_at is null', () => {
    const created = '2024-01-15T10:00:00Z';
    const result = getExpirationDate({ access_expires_at: null, created_at: created });
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(15);
  });
});
