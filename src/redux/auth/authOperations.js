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
  refreshUserRequest,
  refreshUserError,
  refreshUserSuccess,
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
      ? setTimeout(() => dispatch(registerUserSuccess()), 1000)
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
    const { user, userToken } = result.data;
    const payload = { user, userToken };
    token.set(userToken);
    setTimeout(() => dispatch(logInUserSuccess(payload)), 1000);
  } catch (err) {
    console.log(err);
    dispatch(logInUserError(err.message));
  }
};

export const logOutOperation = () => async (dispatch) => {
  dispatch(logOutUserRequest());
  try {
    const result = await userAPIServices.logoutUser();
    console.log(result);
    token.unset();
    setTimeout(() => dispatch(logOutUserSuccess()), 1000);
  } catch (err) {
    console.log(err);
    dispatch(logOutUserError(err.message));
  }
};

export const refreshUserOperation = () => async (dispatch, getState) => {
  const userToken = getState().auth.token;
  if (token) {
    dispatch(refreshUserRequest());
    token.set(userToken);

    try {
      const result = await userAPIServices.refreshUser();
      console.log(result);
      setTimeout(() => dispatch(refreshUserSuccess(result.data.user)), 1000);
    } catch (err) {
      console.log(err);
      dispatch(refreshUserError);
    }
  }

  return;
};
