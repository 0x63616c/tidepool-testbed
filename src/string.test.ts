import { describe, expect, it } from 'vitest';
import { slugify, truncate } from './string.ts';

describe('slugify', () => {
  it('lowercases, trims, replaces spaces, strips invalid chars, and collapses dashes', () => {
    expect(slugify('  Hello World  ')).toBe('hello-world');
    expect(slugify('Hello, World!')).toBe('hello-world');
    expect(slugify('foo   bar')).toBe('foo-bar');
    expect(slugify('foo---bar')).toBe('foo-bar');
  });
});

describe('truncate', () => {
  it('returns short strings unchanged', () => {
    expect(truncate('hi', 3)).toBe('hi');
  });

  it('returns exact-length strings unchanged', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  it('truncates one over to max chars total', () => {
    expect(truncate('hello!', 5)).toBe('hell…');
  });
});
