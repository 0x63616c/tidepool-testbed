/** Returns its argument unchanged. A trivial seed so CI is green on an empty backlog. */
export const identity = <T>(x: T): T => x;

export { isNegative } from './is-negative.ts';
export { isPositive } from './is-positive.ts';
export { isZero } from './is-zero.ts';
