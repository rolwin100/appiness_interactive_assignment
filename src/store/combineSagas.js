import {
  all, fork,
} from 'redux-saga/effects';
import homeSaga from 'views/Home/sagas';

export default function* root() {
  yield all([
    fork(homeSaga),
  ]);
}
