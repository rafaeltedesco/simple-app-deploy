import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

const getUsers = async () => {
  const { data: users } = await api.get('/users');
  return users;
};

export {
  getUsers,
};
