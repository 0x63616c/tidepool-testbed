import { describe, expect, it } from 'vitest';
import { reverseString } from './reverse-string.ts';

describe('reverseString', () => {
  it('reverses a string', () => {
    expect(reverseString('stressed')).toBe('desserts');
  });

  it('returns an empty string unchanged', () => {
    expect(reverseString('')).toBe('');
  });
});
