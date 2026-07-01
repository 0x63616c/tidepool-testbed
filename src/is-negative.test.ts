import { describe, expect, it } from 'vitest';
import { isNegative } from './is-negative.ts';

describe('isNegative', () => {
  it('returns true only for numbers less than zero', () => {
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(0)).toBe(false);
    expect(isNegative(1)).toBe(false);
  });
});
