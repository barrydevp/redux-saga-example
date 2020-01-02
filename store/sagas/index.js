import { all } from "redux-saga/effects";

import { watchIncrementAsync } from '../sagas/counter'
import { helloSaga } from '../sagas/hello'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}