import { randomUUID } from "crypto";

interface CreateUserDTO {
  id?: string;
  name: string;
  birthDate: Date;
  password: string;
  email: string;
}

export class User {
  private _id: string;
  private _name: string;
  private _birthDate: Date;
  private _password: string;
  private _email: string;

  constructor(data: CreateUserDTO) {
    this._id = data.id || randomUUID();
    this._name = data.name;
    this._birthDate = data.birthDate;
    this._password = data.password;
    this._email = data.email;
  }

  public get password(): string {
    return this._password;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public get name(): string {
    return this._name;
  }

  public get email(): string {
    return this._email;
  }

  public get id(): string {
    return this._id;
  }
}
