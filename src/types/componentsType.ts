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
export interface SidebarType {
  sortCities: () => void;
  sortCompany: () => void;
}
export interface ProfileType {
  edit: boolean;
  setEdit: (edit: boolean) => void;
}
