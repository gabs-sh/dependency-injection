import { IPasswordHasher } from "../interfaces/IPasswordHasher";
import { hashSync } from "bcrypt";

export class PasswordHasherImpl implements IPasswordHasher {
  hash(value: string): string {
    return hashSync(value, 8);
  }
}
