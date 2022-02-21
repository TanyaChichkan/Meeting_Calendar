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
import APIServices from '../../services/tasksAPI';

export const fetchTasksOperation = () => async (dispatch) => {
  dispatch(fetchTasksRequest());

  try {
    const result = await APIServices.fetchAllTasks();

    dispatch(fetchTasksSuccess(result.data.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchTasksError());
  }
};

export const deleteTaskOperation = (id) => async (dispatch) => {
  dispatch(deleteTaskRequest());
  try {
    const result = await APIServices.deleteTask(id);
    if (result.data.status === 200)
      setTimeout(() => dispatch(deleteTaskSuccess(id)), 1000);
  } catch (err) {
    console.log(err);
    dispatch(deleteTaskError());
  }
};

export const addTaskOperation = (task) => async (dispatch) => {
  dispatch(addTaskRequest());
  try {
    const result = await APIServices.addTask(task);
    console.log(result);

    setTimeout(() => dispatch(addTaskSuccess(result.data.data)), 1000);
  } catch (err) {
    console.log(err.message);
    dispatch(addTaskError(err.message));
  }
};
