import { User } from '../types/reduxTypes';

export function sortCities(a: User, b: User) {
  const nameA = a.address.city.toLowerCase(),
    nameB = b.address.city.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}
export function sortCompany(a: User, b: User) {
  debugger;
  const nameA = a.company.name.toLowerCase(),
    nameB = b.company.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}
