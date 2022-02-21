import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksReducer';
import { authReducer } from './auth/authReducer';

const reducer = {
  tasks: tasksReducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
