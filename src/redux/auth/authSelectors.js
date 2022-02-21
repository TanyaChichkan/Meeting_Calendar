export const getAuthLoader = (state) => state.auth.isLoading;
export const getAuthError = (state) => state.auth.error;

export const getAuthLoggedIn = (state) => state.auth.isLoggedIn;
export const getAuthUser = (state) => state.auth.user;
export const getAuthToken = (state) => state.auth.token;
