import { injectable } from "tsyringe";
import { IPasswordValidator } from "../interfaces/IPasswordValidator";

@injectable()
export class PasswordValidatorImpl implements IPasswordValidator {
  validate(value: string): boolean {
    if (value.length < 8) return false;
    // add other cases
    return true;
  }
}
