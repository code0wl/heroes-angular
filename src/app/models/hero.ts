import { PersonInterface } from './person.interface';

export class Hero implements PersonInterface {
  id: string;
  name: string;
  description: string;
}
