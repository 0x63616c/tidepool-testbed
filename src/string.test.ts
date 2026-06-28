import { describe, expect, it } from 'vitest';
import { slugify, truncate, wordCount } from './string.ts';

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

describe('wordCount', () => {
  it('returns 0 for an empty string', () => {
    expect(wordCount('')).toBe(0);
  });

  it('returns 1 for a single word', () => {
    expect(wordCount('hello')).toBe(1);
  });

  it('counts multiple words separated by spaces', () => {
    expect(wordCount('one two three')).toBe(3);
  });

  it('ignores leading and trailing whitespace', () => {
    expect(wordCount('  one two  ')).toBe(2);
  });
});
