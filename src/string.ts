export const slugify = (s: string): string =>
  s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');

export const capitalize = (s: string): string =>
  s === '' ? s : s[0].toUpperCase() + s.slice(1);

export const truncate = (s: string, max: number): string =>
  s.length <= max ? s : s.slice(0, max - 1) + '…';
