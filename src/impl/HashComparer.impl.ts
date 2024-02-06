import { compareSync } from "bcrypt";
import { IHashComparer } from "../interfaces/IHashComparer";
import { injectable } from "tsyringe";

@injectable()
export class HashComparerImpl implements IHashComparer {
  compare(value: string, hash: string): boolean {
    return compareSync(value, hash);
  }
}
