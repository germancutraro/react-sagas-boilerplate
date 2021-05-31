import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './usersConstants';
import * as actions from './usersActions';
import * as services from './usersServices';

function* getUsers() {
  try {
    const { users, pagination } = yield services.getAllUsers();
    if (users) yield put(actions.getUsersSuccess({ list: users, pagination }));
  } catch (err) {
    yield put(actions.getUsersFailure({ error: err.message }));
  }
}

function* getUsersSaga() {
  yield takeLatest(constants.GET_USERS_START, getUsers);
}

// get one
function* getOneUser({ payload }) {
  try {
    const user = yield services.getOneUser(payload);
    if (user) yield put(actions.getOneUserSuccess({ user }));
  } catch (err) {
    yield put(actions.getOneUserFailure({ error: err.message }));
  }
}

function* getOneUserSaga() {
  yield takeLatest(constants.GET_ONE_USER_START, getOneUser);
}

/**
 * @description usersSagas
 */
export default function* usersSaga() {
  yield all([fork(getUsersSaga), fork(getOneUserSaga)]);
}
