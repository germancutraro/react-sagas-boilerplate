import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as constants from './authConstants';
import * as actions from './authActions';
import * as services from './authServices';

function* register({ payload }) {
  try {
    const { user, token } = yield services.signUp(payload);
    if (user && token) {
      console.log(token);
      console.log(user);
      localStorage.setItem('token', token);
      yield put(actions.registerSuccess({ user }));
      yield put(push('/users'));
    }
  } catch (err) {
    yield put(actions.registerFailure({ error: err.message }));
  }
}

function* registerSaga() {
  yield takeLatest(constants.REGISTER_START, register);
}

// login
function* login({ payload }) {
  try {
    const { user, token } = yield services.signIn(payload);
    if (user && token) {
      localStorage.setItem('token', token);
      yield put(actions.loginSuccess({ user }));
      yield put(push('/users'));
    }
  } catch (err) {
    yield put(actions.loginFailure({ error: err.message }));
  }
}

function* loginSaga() {
  yield takeLatest(constants.LOGIN_START, login);
}

// forgot password
function* forgotPassword({ payload }) {
  try {
    yield services.forgotPassword(payload);
    yield put(actions.forgotPasswordSuccess());
    yield put(push('/signin'));
  } catch (err) {
    console.log(err);
    yield put(actions.forgotPasswordFailure({ error: err.message }));
  }
}

function* forgotPasswordSaga() {
  yield takeLatest(constants.FORGOT_PASSWORD_START, forgotPassword);
}

// reset password
function* resetPassword({ payload }) {
  try {
    const success = yield services.resetPassword(payload.data);
    if (success) {
      yield put(actions.resetPasswordSuccess());
      yield put(push('/'));
    }
  } catch (err) {
    yield put(actions.resetPasswordFailure({ error: err.message }));
  }
}

function* resetPasswordSaga() {
  yield takeLatest(constants.RESET_PASSWORD_START, resetPassword);
}

export default function* authSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(forgotPasswordSaga),
    fork(resetPasswordSaga)
  ]);
}
