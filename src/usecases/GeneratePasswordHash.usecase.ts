import { inject, injectable } from "tsyringe";
import { IPasswordHasher } from "../interfaces/IPasswordHasher";

@injectable()
export class GeneratePasswordHash {
  constructor(
    @inject("IPasswordHasher") private passwordHasher: IPasswordHasher
  ) {}
  exec(value: string): string {
    return this.passwordHasher.hash(value);
  }
}
