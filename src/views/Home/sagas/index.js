/* eslint-disable no-constant-condition */

import { put, call, takeEvery } from 'redux-saga/effects';
import api from 'utils/api';
import {
  GET_USERS, getusersFullfilled, getUsersRejected,
} from '../actions';
/**
 * worker saga
 */
const { get } = api;

export function* getUsersWorker() {
  try {
    const response = yield call(get, 'https://reqres.in/api/users');
    // console.log(response);
    yield put(getusersFullfilled(response.data));
  } catch (e) {
    yield put(getUsersRejected(e));
  }
}


/**
 * watcher saga
 */
export default function* getUserWatcher() {
  yield takeEvery(GET_USERS, getUsersWorker);
}
