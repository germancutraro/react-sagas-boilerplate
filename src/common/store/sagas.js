import { all, fork } from 'redux-saga/effects';
// sagas
import authSaga from '../../containers/Auth/authSaga';
import usersSaga from '@containers/Users/usersSaga';

export default function* root() {
  yield all([fork(authSaga), fork(usersSaga)]);
}
