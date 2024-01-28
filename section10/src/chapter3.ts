/**
 * Exclude<T, U>
 */

type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract<T, U>
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * ReturnType<T>
 */
type ReturnType<T extends (...args: any) => any> = T extends () => infer R
  ? R
  : never;
