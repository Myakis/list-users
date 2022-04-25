//Типизирование Action
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../redux/store';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  InferValueTypes<T>
>;

//Типизирование Thnuk
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

interface AddressType {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
interface CompanyType {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
}
