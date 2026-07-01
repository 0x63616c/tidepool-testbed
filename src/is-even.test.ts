import { describe, expect, it } from 'vitest';
import { isEven } from './is-even.ts';

describe('isEven', () => {
  it('returns true only for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(0)).toBe(true);
  });
});
