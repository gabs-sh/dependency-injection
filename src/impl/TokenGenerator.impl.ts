import { injectable } from "tsyringe";
import {
  ITokenGenerator,
  ITokenGeneratorMetadata,
} from "../interfaces/ITokenGenerator";

import { sign } from "jsonwebtoken";
import config from "../config";

@injectable()
export class TokenGeneratorImpl implements ITokenGenerator {
  generate(data: any, metadata: ITokenGeneratorMetadata): string {
    return sign(data, config.JWT_KEY, { expiresIn: metadata.exp });
  }
}
