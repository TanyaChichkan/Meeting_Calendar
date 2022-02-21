import axios from 'axios';
import userAPIServices from '../../services/authAPI';
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

const throwError = (msg) => {
  throw new Error(msg);
};

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = token;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const registrationOperation = (userData) => async (dispatch) => {
  dispatch(registerUserRequest());
  try {
    const result = await userAPIServices.registerUser(userData);
    console.log(result);
    result.data.code !== 409
      ? setTimeout(() => dispatch(registerUserSuccess(result.data.user)), 1000)
      : throwError(result.data.message);
  } catch (err) {
    console.log(err);
    dispatch(registerUserError(err.message));
  }
};

export const logInOperation = (userData) => async (dispatch) => {
  dispatch(logInUserRequest());
  try {
    const result = await userAPIServices.loginUser(userData);
    const data = { token: result.data.token, user: result.data.user };
    token.set(result.data.token);
    setTimeout(() => dispatch(logInUserSuccess(data)), 1000);
  } catch (err) {
    console.log(err);
    dispatch(logInUserError(err.message));
  }
};

export const logOutOperation = () => async (dispatch, getState) => {
  console.log(getState());
  dispatch(logOutUserRequest());
  try {
    const result = await userAPIServices.logoutUser();
    console.log(result);
    const data = { token: result.data.token, user: result.data.user };
    console.log(data);
    token.unset();
    setTimeout(() => dispatch(logOutUserSuccess()), 1000);
  } catch (err) {
    console.log(err);
    dispatch(logOutUserError(err.message));
  }
};
