/** Returns its argument unchanged. A trivial seed so CI is green on an empty backlog. */
export const identity = <T>(x: T): T => x;

export { isEven } from './is-even.ts';
