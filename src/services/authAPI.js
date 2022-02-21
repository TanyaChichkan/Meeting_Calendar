import axios from 'axios';

const registerUser = (user) => {
  return axios.post('auth/register', user);
};

const loginUser = (user) => {
  return axios.post('auth/login', user);
};

const logoutUser = () => {
  return axios.post('auth/logout');
};

const refreshUser = () => {
  return axios.post('auth/refresh');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { registerUser, loginUser, logoutUser, refreshUser };
