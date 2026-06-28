export const clamp = (n: number, lo: number, hi: number): number =>
  Math.min(hi, Math.max(lo, n));
