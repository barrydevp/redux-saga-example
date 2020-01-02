import { put, takeEvery, call, take, all, fork } from "redux-saga/effects";

import { counterTypes } from "../actionTypes";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export const getRandomAsync = ms =>
  new Promise(res => setTimeout(() => res(Math.floor(Math.random() * 10)), ms));

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: counterTypes.INCREMENT });
  // throw new Error();
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

export function* incrementAsync2() {
  while (true) {
    const action = yield take(counterTypes.INCREMENT_ASYNC);
    try {
      yield fork(incrementAsync);
      // yield put({ type: counterTypes.INCREMENT });
      // throw(new Error("custom"));
      const action2 = yield take(counterTypes.INCREMENT_RANDOM_ASYNC);
      // console.log("action2", action2);
    } catch (error) {
      console.log("error", error);
    }
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  // const sagaAll = yield all([takeEvery(counterTypes.INCREMENT_RANDOM_ASYNC, incrementRandomAsync), takeEvery(counterTypes.INCREMENT_ASYNC, incrementAsync)]);
  const sagaAll = yield all({
    i1: takeEvery(counterTypes.INCREMENT_RANDOM_ASYNC, incrementRandomAsync),
    i2: takeEvery(counterTypes.INCREMENT_ASYNC, incrementAsync)
  });
  console.log("sagaall: ", sagaAll);

  // console.log("done watchIncrementAsync");
}
