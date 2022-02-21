import { createAction } from '@reduxjs/toolkit';

export const registerUserRequest = createAction('register/request');
export const registerUserSuccess = createAction('register/success');
export const registerUserError = createAction('register/error');

export const logInUserRequest = createAction('logIn/request');
export const logInUserSuccess = createAction('logIn/success');
export const logInUserError = createAction('logIn/error');

export const logOutUserRequest = createAction('logOut/request');
export const logOutUserSuccess = createAction('logOut/success');
export const logOutUserError = createAction('logOut/error');
