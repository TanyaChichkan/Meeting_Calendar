import {
  fetchTasksRequest,
  fetchTasksError,
  fetchTasksSuccess,
  deleteTaskRequest,
  deleteTaskError,
  deleteTaskSuccess,
  addTaskSuccess,
  addTaskRequest,
  addTaskError,
} from './tasksActions';
import APIServices from '../services/tasksAPI';

export const fetchTasksOperation = () => async (dispatch) => {
  dispatch(fetchTasksRequest());
  try {
    const result = await APIServices.fetchAllTasks();
    console.log(result);
    setTimeout(() => dispatch(fetchTasksSuccess(result.data)), 1000);
  } catch (err) {
    console.log(err);
    dispatch(fetchTasksError());
  }
};

export const deleteTaskOperation = (id) => async (dispatch) => {
  dispatch(deleteTaskRequest());
  try {
    const result = await APIServices.deleteTask(id);
    console.log(result);
    setTimeout(() => dispatch(deleteTaskSuccess(id)), 1000);
  } catch (err) {
    console.log(err);
    dispatch(deleteTaskError());
  }
};

export const addTaskOperation = (task) => async (dispatch) => {
  console.log(task);
  dispatch(addTaskRequest());
  try {
    const result = await APIServices.addTask(task);
    console.log(result);
    setTimeout(() => dispatch(addTaskSuccess(result.data)), 1000);
  } catch (err) {
    console.log(err.message);
    dispatch(addTaskError(err.message));
  }
};
