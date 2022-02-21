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
} from './authActions';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

export const authReducer = createReducer(initialState, {
  [registerUserRequest]: (state, _) => ({
    ...state,
    isLoading: true,
    error: '',
  }),
  [registerUserSuccess]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    user: { ...payload },
  }),
  [registerUserError]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),

  [logInUserRequest]: (state, _) => ({ ...state, error: '', isLoading: true }),
  [logInUserSuccess]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    token: payload.token,
    user: { ...payload.user },
    isLoggedIn: true,
  }),
  [logInUserError]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
  [logOutUserRequest]: (state, _) => ({ ...state, error: '', isLoading: true }),
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
});
