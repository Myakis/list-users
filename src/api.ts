import axios from 'axios';

export const userAPI = {
  getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  },
  getProfileUser(name: string) {
    return axios.get(`https://jsonplaceholder.typicode.com/users?name=${name}`);
  },
};
