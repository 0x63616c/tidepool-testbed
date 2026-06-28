import { describe, expect, it } from 'vitest';
import { clamp } from './clamp.ts';

describe('clamp', () => {
  it('returns values inside the range unchanged', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('raises values below the lower bound', () => {
    expect(clamp(-1, 0, 10)).toBe(0);
  });

  it('lowers values above the upper bound', () => {
    expect(clamp(11, 0, 10)).toBe(10);
  });
});
