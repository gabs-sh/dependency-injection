/** Functional interface */
export interface IPasswordValidator {
  validate(value: string): boolean;
}
