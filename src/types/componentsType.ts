import { User } from './reduxTypes';

export interface MainType {
  users: Array<User>;
  userCount: number;
  userNumerals: string;
  isPending: boolean;
}

export interface CardUserType {
  name: string;
  city: string;
  company: string;
}
