import axios from 'axios';

const fetchAllTasks = () => {
  return axios.get('/api/tasks');
};

const addTask = (task) => {
  return axios.post('/api/tasks', task);
};

const deleteTask = (id) => {
  return axios.delete(`/api/tasks/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchAllTasks, addTask, deleteTask };
