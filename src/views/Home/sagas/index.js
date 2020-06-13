/* eslint-disable no-constant-condition */

import { put, call, takeEvery } from 'redux-saga/effects';
import api from 'utils/api';
import { URLS } from 'constants/urls';
import { authError } from 'utils/auth';
import {
  GET_USERS, getUsersFullfilled, getUsersRejected,
} from '../actions';
/**
 * worker saga
 */
const { get } = api;
const { USERS } = URLS;

export function* getUsersWorker() {
  try {
    const response = yield call(get, USERS);
    yield put(getUsersFullfilled(response.data));
  } catch (e) {
    authError(e.message);
    yield put(getUsersRejected(e));
  }
}


/**
 * watcher saga
 */
export default function* getUsersWatcher() {
  yield takeEvery(GET_USERS, getUsersWorker);
}
