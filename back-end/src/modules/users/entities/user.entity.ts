import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;

  @Exclude() //Removendo a senha na instância da classe
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
