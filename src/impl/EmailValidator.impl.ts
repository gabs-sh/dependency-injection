import { IEmailValidator } from "../interfaces/IEmailValidator";
import { isEmail } from "validator";
import { injectable } from "tsyringe";

@injectable()
export class EmailValidatorImpl implements IEmailValidator {
  validate(value: string): boolean {
    return isEmail(value);
  }
}
