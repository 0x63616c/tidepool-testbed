import { describe, expect, it } from 'vitest';
import { isZero } from './is-zero.ts';

describe('isZero', () => {
  it('returns true only for zero', () => {
    expect(isZero(0)).toBe(true);
    expect(isZero(1)).toBe(false);
    expect(isZero(-1)).toBe(false);
  });
});
