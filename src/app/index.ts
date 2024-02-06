/** A ordem das importações neste arquivo importa
 * - Não importar o container antes de configurar o dotenv ou de importar o reflect-metadata
 * - É possível importar o reflect-metadata após o dotent, nesse caso um não interfere no outro
 * - É aconselhável importar o container por último, para termos certeza de que as dependências tenham sido carregadas
 */
import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { AuthUserFactory } from "./factory/AuthUserFactory";
import "./container";

(async () => {
  const authUserUseCase = AuthUserFactory();

  console.log(
    await authUserUseCase.exec({
      email: "gabsn.dev@gmail.com",
      password: "123456789",
    })
  );
})();
