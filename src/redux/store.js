import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksReducer';

const reducer = {
  tasks: tasksReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
