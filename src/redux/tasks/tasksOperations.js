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
    if (result.data.status === 200) dispatch(deleteTaskSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteTaskError());
  }
};

export const addTaskOperation = (task) => async (dispatch) => {
  dispatch(addTaskRequest());

  try {
    const result = await APIServices.addTask(task);
    dispatch(addTaskSuccess(result.data.data));
  } catch (err) {
    console.log(err.message);
    dispatch(addTaskError(err.message));
  }
};
