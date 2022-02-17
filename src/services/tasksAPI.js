import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

const fetchAllTasks = () => {
  return axios.get('/tasks');
};

const addTask = (task) => {
  return axios.post('/tasks', task);
};

const deleteTask = (id) => {
  return axios.delete(`tasks/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchAllTasks, addTask, deleteTask };
