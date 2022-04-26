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
export interface FormType {
  disabled?: boolean;
  inputValid: boolean;
  setEdit: (edit: boolean) => void;
  onSubmit: any;
  name: any;
  eMail: any;
  userName: any;
  street: any;
  city: any;
  zipCode: any;
  phone: any;
  webSite: any;
  comment: any;
}
