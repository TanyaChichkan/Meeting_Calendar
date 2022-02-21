import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTasksRequest,
  fetchTasksError,
  fetchTasksSuccess,
  deleteTaskRequest,
  deleteTaskError,
  deleteTaskSuccess,
  addTaskRequest,
  addTaskError,
  addTaskSuccess,
  setSelectedTaskID,
} from './tasksActions';

const initialState = {
  tasksList: [],
  loading: false,
  error: '',
  selectedTaskId: null,
};

export const tasksReducer = createReducer(initialState, {
  [fetchTasksRequest]: (state, _) => ({ ...state, loading: true, error: '' }),
  [fetchTasksSuccess]: (state, { payload }) => ({
    ...state,
    loading: false,
    tasksList: payload,
  }),
  [fetchTasksError]: (state, payload) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [deleteTaskRequest]: (state, _) => ({ ...state, loading: true, error: '' }),
  [deleteTaskSuccess]: (state, { payload }) => ({
    ...state,
    loading: false,
    tasksList: [...state.tasksList.filter(({ _id }) => _id !== payload)],
  }),

  [deleteTaskError]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [addTaskRequest]: (state, _) => ({ ...state, loading: true, error: '' }),
  [addTaskSuccess]: (state, { payload }) => ({
    ...state,
    loading: false,
    tasksList: [...payload.tasks],
  }),
  [addTaskError]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [setSelectedTaskID]: (state, { payload }) => ({
    ...state,
    selectedTaskId: payload,
  }),
});
