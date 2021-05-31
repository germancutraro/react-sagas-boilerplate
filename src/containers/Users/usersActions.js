import * as constants from './usersConstants';

/**
 * @description getUsers
 */
export const getUsersStart = payload => ({
  type: constants.GET_USERS_START,
  payload
});

export const getUsersSuccess = payload => ({
  type: constants.GET_USERS_SUCCESS,
  payload
});

export const getUsersFailure = payload => ({
  type: constants.GET_USERS_FAILURE,
  payload
});

/**
 * @description getOneUser
 */
export const getOneUserStart = payload => ({
  type: constants.GET_ONE_USER_START,
  payload
});

export const getOneUserSuccess = payload => ({
  type: constants.GET_ONE_USER_SUCCESS,
  payload
});

export const getOneUserFailure = payload => ({
  type: constants.GET_ONE_USER_FAILURE,
  payload
});
