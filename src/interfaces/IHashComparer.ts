/** Functional interface */
export interface IHashComparer {
  compare(value: string, hash: string): boolean;
}
