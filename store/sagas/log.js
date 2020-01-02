import { select, takeEvery, take } from "redux-saga/effects";

export function* watchAndLog() {
  while (true) {
    console.log("start");

    const action = yield take("counter/increment_async");
    const state = yield select();

    console.log("action", action);
    console.log("state after", state);
  }

  // yield takeEvery('*', function* logger(action) {
  //   const state = yield select()

  //   console.log('action', action)
  //   console.log('state after', state)
  // })
}
