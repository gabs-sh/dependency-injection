export interface IPasswordHasher {
  hash(value: string): string;
}
