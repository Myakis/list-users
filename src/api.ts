import axios from 'axios';

export const userAPI = {
  getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  },
  getProfileUser(id: string) {
    return axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  },
};
