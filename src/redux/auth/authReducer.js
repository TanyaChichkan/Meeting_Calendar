import { createReducer } from '@reduxjs/toolkit';
import { constantsText } from '../../constants/constants';

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

  [registerUserSuccess]: (state) => ({
    ...state,
    isLoading: false,
    message: constantsText.authMsg.registrationMsgSuccess,
  }),

  [registerUserError]: (state) => ({
    ...state,
    isLoading: false,
    error: constantsText.authMsg.registrationMsgError,
  }),

  [logInUserRequest]: (state) => ({
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
    message: constantsText.authMsg.logInMsgSuccess,
  }),

  [logInUserError]: (state) => ({
    ...state,
    isLoading: false,
    error: constantsText.authMsg.logInMsgError,
  }),

  [logOutUserRequest]: (state) => ({
    ...state,
    error: '',
    message: '',
    isLoading: true,
  }),

  [logOutUserSuccess]: (state) => ({
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

  [refreshUserRequest]: (state) => ({
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
