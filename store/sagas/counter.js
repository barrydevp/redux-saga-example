import { put, takeEvery, call } from "redux-saga/effects";

import { counterTypes } from "../actionTypes";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export const getRandomAsync = ms =>
  new Promise(res => setTimeout(() => res(Math.floor(Math.random() * 10)), ms));

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: counterTypes.INCREMENT });
}

export function* incrementRandomAsync() {
  const value = yield call(getRandomAsync, 1000);
  yield put({
    type: counterTypes.INCREMENT,
    payload: {
      value
    }
  });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(counterTypes.INCREMENT_RANDOM_ASYNC, incrementRandomAsync);
  yield takeEvery(counterTypes.INCREMENT_ASYNC, incrementAsync);
}
