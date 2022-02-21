import { createReducer } from '@reduxjs/toolkit';

import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  logInUserSuccess,
  logInUserRequest,
  logInUserError,
  logOutUserRequest,
  logOutUserSuccess,
  logOutUserError,
  refreshUserRequest,
  refreshUserSuccess,
  refreshUserError,
} from './authActions';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: '',
  message: '',
};

export const authReducer = createReducer(initialState, {
  [registerUserRequest]: (state, _) => ({
    ...state,
    isLoading: true,
    error: '',
    message: '',
  }),

  [registerUserSuccess]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    message: "You've registered in successfully. Please, log in now",
  }),

  [registerUserError]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: 'Check your credentials or log in',
  }),

  [logInUserRequest]: (state, _) => ({
    ...state,
    error: '',
    message: '',
    isLoading: true,
  }),

  [logInUserSuccess]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    token: payload.userToken,
    user: { ...payload.user },
    isLoggedIn: true,
    message: "You've logged in successfully",
  }),

  [logInUserError]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: 'Check you credentials or register',
  }),

  [logOutUserRequest]: (state, _) => ({
    ...state,
    error: '',
    message: '',
    isLoading: true,
  }),

  [logOutUserSuccess]: (state, _) => ({
    ...state,
    isLoading: false,
    token: null,
    user: { name: '', email: '' },
    isLoggedIn: false,
  }),

  [logOutUserError]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),

  [refreshUserRequest]: (state, { payload }) => ({
    ...state,
    isLoading: true,
    error: '',
    message: '',
  }),

  [refreshUserSuccess]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    user: { ...payload },
    isLoggedIn: true,
  }),

  [refreshUserError]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    error: payload,
    token: null,
  }),
});
