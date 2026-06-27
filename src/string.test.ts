import { describe, expect, it } from 'vitest';
import { slugify } from './string.ts';

describe('slugify', () => {
  it('lowercases, trims, replaces spaces, strips invalid chars, and collapses dashes', () => {
    expect(slugify('  Hello World  ')).toBe('hello-world');
    expect(slugify('Hello, World!')).toBe('hello-world');
    expect(slugify('foo   bar')).toBe('foo-bar');
    expect(slugify('foo---bar')).toBe('foo-bar');
  });
});
