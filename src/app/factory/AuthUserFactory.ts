import { container } from "tsyringe";
import { AuthUser } from "../../usecases/AuthUser.usecase";

export const AuthUserFactory = (): AuthUser => container.resolve(AuthUser);
