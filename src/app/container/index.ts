import { container } from "tsyringe";
import { EmailValidatorImpl } from "../../impl/EmailValidator.impl";
import { HashComparerImpl } from "../../impl/HashComparer.impl";
import { PasswordValidatorImpl } from "../../impl/PasswordValidator.impl";
import { TokenGeneratorImpl } from "../../impl/TokenGenerator.impl";
import { UserRepositoryImpl } from "../../impl/UserRepository.impl";
import { IEmailValidator } from "../../interfaces/IEmailValidator";
import { IHashComparer } from "../../interfaces/IHashComparer";
import { IPasswordValidator } from "../../interfaces/IPasswordValidator";
import { ITokenGenerator } from "../../interfaces/ITokenGenerator";
import { IUserRepository } from "../../repository/IUserRepository";
import { PasswordHasherImpl } from "../../impl/PasswordHasher.impl";
import { IPasswordHasher } from "../../interfaces/IPasswordHasher";

container.registerSingleton<IUserRepository>(
  "IUserRepository",
  UserRepositoryImpl
);

container.registerSingleton<IEmailValidator>(
  "IEmailValidator",
  EmailValidatorImpl
);

container.registerSingleton<IHashComparer>("IHashComparer", HashComparerImpl);

container.registerSingleton<IPasswordValidator>(
  "IPasswordValidator",
  PasswordValidatorImpl
);

container.registerSingleton<ITokenGenerator>(
  "ITokenGenerator",
  TokenGeneratorImpl
);

container.registerSingleton<IPasswordHasher>(
  "IPasswordHasher",
  PasswordHasherImpl
);
