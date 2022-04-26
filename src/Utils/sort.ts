import { User } from '../types/reduxTypes';

//Сортировка по городам
export function sortCities(a: User, b: User) {
  const nameA = a.address.city.toLowerCase(),
    nameB = b.address.city.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}

//Сортировка по компаниям
export function sortCompany(a: User, b: User) {
  const nameA = a.company.name.toLowerCase(),
    nameB = b.company.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}
