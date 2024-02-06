import { injectable } from "tsyringe";
import { User } from "../entity/User";
import { IUserRepository } from "../repository/IUserRepository";

@injectable()
export class UserRepositoryImpl implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [
      new User({
        birthDate: new Date(),
        email: "gabsn.dev@gmail.com",
        name: "Gabriel",
        password:
          "$2b$08$7ZEvfSfGblcgadvilmmweeadxuKs8t/.GHvvc6weJEqP4ZLjddhby",
        id: "simasturbo1234",
      }),
    ];
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }
}
