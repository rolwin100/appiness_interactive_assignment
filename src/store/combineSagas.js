import {
  all, fork,
} from 'redux-saga/effects';
import usersSaga from 'views/Home/sagas';
import authSaga from 'views/Login/sagas';

export default function* root() {
  yield all([
    fork(authSaga),
    fork(usersSaga),
  ]);
}
