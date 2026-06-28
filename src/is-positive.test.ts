import { describe, expect, it } from 'vitest';
import { isPositive } from './is-positive.ts';

describe('isPositive', () => {
  it('returns true only for numbers greater than zero', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-1)).toBe(false);
  });
});
