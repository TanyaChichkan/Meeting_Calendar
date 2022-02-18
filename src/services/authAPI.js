import axios from 'axios';

const register = () => {
  return axios.post('/register');
};

const login = (user) => {
  return axios.post('/login', user);
};

const logout = (id) => {
  return axios.post('/logout');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, login, logout };
