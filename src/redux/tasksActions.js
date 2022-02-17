import { createAction } from '@reduxjs/toolkit';

export const fetchTasksRequest = createAction('tasks/fetchTasksRequest');
export const fetchTasksSuccess = createAction('tasks/fetchTasksSuccess');
export const fetchTasksError = createAction('tasks/fetchTasksError');

export const deleteTaskRequest = createAction('tasks/deleteTaskRequest');
export const deleteTaskSuccess = createAction('tasks/deleteTaskSuccess');
export const deleteTaskError = createAction('tasks/deleteTaskError');

export const addTaskRequest = createAction('tasks/addTaskRequest');
export const addTaskSuccess = createAction('tasks/addTaskSuccess');
export const addTaskError = createAction('tasks/addTaskError');
