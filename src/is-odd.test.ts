import { describe, expect, it } from 'vitest';
import { isOdd } from './is-odd.ts';

describe('isOdd', () => {
  it('returns true for odd numbers and false for even numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(-3)).toBe(true);
  });
});
