import * as constants from './authConstants';

/**
 * @description login
 */
export const loginStart = payload => ({
  type: constants.LOGIN_START,
  payload
});

export const loginSuccess = payload => ({
  type: constants.LOGIN_SUCCESS,
  payload
});

export const loginFailure = payload => ({
  type: constants.LOGIN_FAILURE,
  payload
});

/**
 * @description logout
 */
export const logout = () => ({
  type: constants.LOGOUT
});

/**
 * @description register
 */
export const registerStart = payload => ({
  type: constants.REGISTER_START,
  payload
});

export const registerSuccess = payload => ({
  type: constants.REGISTER_SUCCESS,
  payload
});

export const registerFailure = payload => ({
  type: constants.REGISTER_FAILURE,
  payload
});

/**
 * @description forgotPassword
 */
export const forgotPasswordStart = payload => ({
  type: constants.FORGOT_PASSWORD_START,
  payload
});

export const forgotPasswordSuccess = payload => ({
  type: constants.FORGOT_PASSWORD_SUCCESS,
  payload
});

export const forgotPasswordFailure = payload => ({
  type: constants.FORGOT_PASSWORD_FAILURE,
  payload
});

/**
 * @description resetPassword
 */
export const resetPasswordStart = payload => ({
  type: constants.RESET_PASSWORD_START,
  payload
});

export const resetPasswordSuccess = payload => ({
  type: constants.RESET_PASSWORD_SUCCESS,
  payload
});

export const resetPasswordFailure = payload => ({
  type: constants.RESET_PASSWORD_FAILURE,
  payload
});
