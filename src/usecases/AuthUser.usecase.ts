import { inject, injectable } from "tsyringe";
import { IEmailValidator } from "../interfaces/IEmailValidator";
import { IHashComparer } from "../interfaces/IHashComparer";
import { IPasswordValidator } from "../interfaces/IPasswordValidator";
import { ITokenGenerator } from "../interfaces/ITokenGenerator";
import { IUserRepository } from "../repository/IUserRepository";

interface IAuthUserDTO {
  password: string;
  email: string;
}

interface IAuthUserResultDTO {
  token: string;
}

@injectable()
export class AuthUser {
  constructor(
    @inject("IUserRepository") private repository: IUserRepository,
    @inject("IPasswordValidator")
    private passwordValidator: IPasswordValidator,
    @inject("IEmailValidator") private emailValidator: IEmailValidator,
    @inject("IHashComparer") private hashComparer: IHashComparer,
    @inject("ITokenGenerator") private tokenGenerator: ITokenGenerator
  ) {}

  async exec({ email, password }: IAuthUserDTO): Promise<IAuthUserResultDTO> {
    if (!email || !password) throw new Error("Email e senha são obrigatórios");

    if (!this.passwordValidator.validate(password))
      throw new Error("Senha inválida");

    if (!this.emailValidator.validate(email)) throw new Error("Email inválido");

    const user = await this.repository.findByEmail(email);

    if (!user) throw new Error("Usuário ou senha inválidos");

    if (!this.hashComparer.compare(password, user.password))
      throw new Error("Usuário ou senha inválidos");

    return {
      token: this.tokenGenerator.generate(
        { name: user.name, email: user.email },
        { exp: "1d" }
      ),
    };
  }
}
